import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'rebass';
import { FaRegCalendarCheck } from 'react-icons/fa';

const dateTimeFormat = new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', timeZone: 'UTC' });

const UpcomingDate = ({ date }) => {
  const formatDate = datestr => dateTimeFormat.format(new Date(datestr));
  const isFutureDate = datestr => new Date().toISOString().substring(0, 10) < datestr;

  return (
    <>
      {isFutureDate(date) && (
        <Box
          as="li"
          key={date}
          mb="0.3em"
        >
          <FaRegCalendarCheck
            css={{
              marginRight: '1em',
            }}
          />
          <time dateTime={date}>{formatDate(date)}</time>
        </Box>
      )}
    </>
  );
};

UpcomingDate.propTypes = {
  date: PropTypes.string.isRequired,
};

export default UpcomingDate;
