import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Image } from './banner-css';

const BannerImage = ({ image, desc, ...props }) => (
  <Image {...props}>
    <Img fluid={image} alt={desc} />
  </Image>
);

BannerImage.propTypes = {
  image: PropTypes.object.isRequired,
  desc: PropTypes.string.isRequired,
};

export default BannerImage;
