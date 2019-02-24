import React from 'react';
import { Content } from './banner-css';
import BannerContainer from './content-overlay-css';
import BannerImage from './banner-img';
import { BannerProps, BannerDefaultProps } from './banner';

const ContentOverlayBanner = ({
  image, imagedesc, children, ...props
}) => (
  <BannerContainer p={[1, 1, 2, 3, 4, 5]} {...props}>
    <Content mb={1}>
      {children}
    </Content>
    <BannerImage image={image} desc={imagedesc} background />
  </BannerContainer>
);

ContentOverlayBanner.propTypes = BannerProps;
ContentOverlayBanner.defaultProps = BannerDefaultProps;

export default ContentOverlayBanner;
