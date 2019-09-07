import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'rebass/styled-components';
import { FaRegCalendarCheck } from 'react-icons/fa';
import BreakpointContext from '../../context/BreakpointContext';

const UpcomingDate = ({ date }) => {
  const formatDate = (datestr, breakpoint) => {
    const month = breakpoint ? 'long' : 'short';
    const options = { month, day: 'numeric', timeZone: 'UTC' };
    return new Date(datestr).toLocaleDateString('en-US', options);
  };
  const isFutureDate = datestr => new Date().toISOString().substring(0, 10) < datestr;

  return (
    <BreakpointContext.Consumer>
      {bpctx => (
        <>
          {isFutureDate(date) && (
            <Box
              as="li"
              mb="0.3em"
            >
              <FaRegCalendarCheck
                css={{
                  marginRight: '0.5em',
                }}
              />
              <time dateTime={date}>{formatDate(date, bpctx.breakpoint)}</time>
            </Box>
          )}
        </>
      )}
    </BreakpointContext.Consumer>
  );
};

UpcomingDate.propTypes = {
  date: PropTypes.string.isRequired,
};

export default UpcomingDate;
