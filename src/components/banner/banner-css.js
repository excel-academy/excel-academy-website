import styled, { css } from 'styled-components';
import { Box } from 'rebass';

export const Content = styled(Box)`
  z-index: 1;
`;

export const Image = styled(Box)`
  flex-grow: 0;
  flex-shrink: 0;

  ${props => props.background && css`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  `}

  .gatsby-image-wrapper {
    height: 100%;
  }
`;

export default styled(Box)`
  display: flex;
  position: relative;
  overflow-x: hidden;
  text-align: ${props => props.contentAlign};

  ${props => props.fullscreen && css`
    min-height: 100vh;
  `}

  ${Image} {
    img {
      object-position: ${props => props.imagePosition} !important;
    }
  }
`;
