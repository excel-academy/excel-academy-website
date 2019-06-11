import React from 'react';
import { Content } from './banner-css';
import BannerContainer from './circle-image-css';
import BannerImage from './banner-img';
import { BannerProps, BannerDefaultProps } from './banner';

const CircleImageBanner = ({
  image, imagedesc, children, ...props
}) => (
  <BannerContainer p={[1, 1, 2, 3, 4, 5]} {...props}>
    <Content>
      {children}
    </Content>
    <BannerImage
      image={image}
      desc={imagedesc}
      mx={2}
      mb={1}
      width={{ _: '15.75rem', tablet: '18.375rem', desktop: '21rem' }}
      height={{ _: '15.75rem', tablet: '18.375rem', desktop: '21rem' }}
    />
  </BannerContainer>
);

CircleImageBanner.propTypes = BannerProps;
CircleImageBanner.defaultProps = BannerDefaultProps;

export default CircleImageBanner;
