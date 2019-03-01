import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from 'rebass';
import LargeText from '../large-text/large-text-css';

const TitleIntro = ({
  title, intro, cols, icon, titleColor,
}) => (
  <Box
    width={{ tablet: cols / 12 }}
    css={{
      textAlign: 'center',
    }}
  >
    <Text as="h1" mb={2} color={titleColor}>
      {icon && (
        <span
          css={{
            marginRight: '0.5em',
            position: 'relative',
            top: '2px',
          }}
        >
          {icon}
        </span>
      )}
      {title}
    </Text>
    <LargeText as="p">{intro}</LargeText>
  </Box>
);

TitleIntro.propTypes = {
  title: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
  titleColor: PropTypes.string,
  cols: PropTypes.number,
  icon: PropTypes.object,
};

TitleIntro.defaultProps = {
  cols: 10,
  icon: null,
  titleColor: 'purples.3',
};

export default TitleIntro;
