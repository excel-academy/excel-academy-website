import React from 'react';
import PropTypes from 'prop-types';
import StyledBannerContainer from './banner-css';

const BannerContainer = ({
  fullscreen, orient, contentAlign, imagePosition, children, ...props
}) => (
  <StyledBannerContainer
    as="section"
    fullscreen={fullscreen}
    orient={orient}
    contentAlign={contentAlign}
    imagePosition={imagePosition}
    {...props}
  >
    {children}
  </StyledBannerContainer>
);

const BannerContainerProps = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  fullscreen: PropTypes.bool,
  orient: PropTypes.oneOf(['left', 'right']),
  contentAlign: PropTypes.oneOf(['left', 'center', 'right']),
  imagePosition: PropTypes.oneOf(['left', 'center', 'right']),
};

export const BannerProps = {
  ...BannerContainerProps,
  image: PropTypes.object.isRequired,
  imagedesc: PropTypes.string.isRequired,
};

export const BannerDefaultProps = {
  fullscreen: false,
  orient: 'left',
  contentAlign: 'left',
  imagePosition: 'right',
};

BannerContainer.propTypes = BannerContainerProps;
BannerContainer.defaultProps = BannerDefaultProps;

export default BannerContainer;
