import React from 'react';
import { Content } from './banner-css';
import BannerContainer from './spotlight-css';
import BannerImage from './banner-img';
import { BannerProps, BannerDefaultProps } from './banner';

const SpotlightBanner = ({
  image, imagedesc, children, ...props
}) => (
  <BannerContainer {...props}>
    <Content p={[1, 1, 2, 3, 4, 5]} maxWidth={1} width={[1 / 2, 1 / 2, 1 / 2, 2 / 3]}>
      {children}
    </Content>
    <BannerImage image={image} desc={imagedesc} width={[1 / 2, 1 / 2, 1 / 2, 1 / 3]} />
  </BannerContainer>
);

SpotlightBanner.propTypes = BannerProps;
SpotlightBanner.defaultProps = BannerDefaultProps;

export default SpotlightBanner;
