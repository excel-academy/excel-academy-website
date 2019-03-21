import bannerImg from '../images/Excel-Academy-logo.jpg';

const fluidShapeMock = {
  aspectRatio: 1.5,
  src: bannerImg,
  maxWidth: 4000,
  srcSet: 'some srcSet',
  sizes: '(max-width: 600px) 100vw, 600px',
};

export default {
  src: fluidShapeMock,
  alt: 'banner',
};
