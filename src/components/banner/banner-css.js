import styled, { css } from 'styled-components';
import { Box } from 'rebass/styled-components';

export const Content = styled(Box)`
  z-index: 1;
`;

export const Image = styled(Box)`
  flex-grow: 0;
  flex-shrink: 0;

  ${props => props.background && css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  `}

  .gatsby-image-wrapper {
    height: 100%;
  }
`;

export default styled(Box)`
  position: relative;
  display: flex;
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
