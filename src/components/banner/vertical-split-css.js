import styled, { css } from 'styled-components';
import BannerContainer from './banner';
import { Content, Image } from './banner-css';

export default styled(BannerContainer)`
  align-items: stretch;
  justify-content: flex-end;

  ${Content} {
    align-self: center;
    flex-grow: 1;
    flex-shrink: 1;
    margin: 0 auto;
  }

  @media screen and (orientation: portrait) {
    flex-direction: column-reverse;
    text-align: center;

    ${Content} {
      display: flex;
      flex-direction: column;
      justify-content: center;
      max-width: 100%;
      width: 100%;
    }

    ${Image} {
      height: 45vh;
      width: 100%;
    }
  }

  ${props => props.fullscreen && css`
    @media screen and (orientation: portrait) {
      ${Content} {
        min-height: 50vh;
      }

      ${Image} {
        height: 50vh;
      }
    }
  `}

  ${props => props.orient === 'right' && css`
    flex-direction: row-reverse;

    @media screen and (orientation: portrait) {
      flex-direction: column-reverse;
    }
  `}

  ${props => props.contentAlign === 'right' && css`
    @media screen and (orientation: portrait) {
      text-align: center;
    }
  `}
`;
