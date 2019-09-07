import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from 'rebass/styled-components';
import MaxWidthBox from '../max-width-box/max-width-box-css';

const AdmissionPolicy = ({ title, policies }) => (
  <MaxWidthBox
    maxWidth={2}
    p={{ _: 1, tablet: 2 }}
    bg="#eeeeee"
    color="#444444"
    css={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    }}
  >
    <Box width={{ tablet: 6 / 12 }} fontSize="0.7em">
      <Text as="h3" mb={1}>
        {title}
      </Text>
      <Box
        as="ul"
        pl="1em"
        m={0}
      >
        {policies.map(policy => (
          <li key={policy}>{policy}</li>
        ))}
      </Box>
    </Box>
  </MaxWidthBox>
);

AdmissionPolicy.propTypes = {
  title: PropTypes.string.isRequired,
  policies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AdmissionPolicy;
