import React from 'react';
import { Content } from './banner-css';
import BannerContainer from './boxed-content-css';
import BannerImage from './banner-img';
import { BannerProps, BannerDefaultProps } from './banner';

const BoxedContentBanner = ({
  image, imagedesc, children, ...props
}) => (
  <BannerContainer p={[1, 1, 2, 3, 4, 5]} {...props}>
    <Content p={[1, 1, 2, 3, 4, 5]} mb={1}>
      {children}
    </Content>
    <BannerImage image={image} desc={imagedesc} background />
  </BannerContainer>
);

BoxedContentBanner.propTypes = BannerProps;
BoxedContentBanner.defaultProps = BannerDefaultProps;

export default BoxedContentBanner;
