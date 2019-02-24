import React from 'react';
import { Content } from './banner-css';
import BannerContainer from './vertical-split-css';
import BannerImage from './banner-img';
import { BannerProps, BannerDefaultProps } from './banner';

const VerticalSplitBanner = ({
  image, imagedesc, children, ...props
}) => (
  <BannerContainer {...props}>
    <Content p={[1, 1, 2, 3, 4, 5]} maxWidth={0} width="50%">
      {children}
    </Content>
    <BannerImage image={image} desc={imagedesc} width="50%" />
  </BannerContainer>
);

VerticalSplitBanner.propTypes = BannerProps;
VerticalSplitBanner.defaultProps = BannerDefaultProps;

export default VerticalSplitBanner;
