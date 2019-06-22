import styled, { css } from 'styled-components';
import BannerContainer from './banner';
import { Content, Image } from './banner-css';

export default styled(BannerContainer)`
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;

  ${Content} {
    max-width: 31.5rem;
  }

  ${Image} {
    border-radius: 100%;

    img {
      border-radius: 100%;
    }
  }

  @media screen and (orientation: portrait) {
    flex-direction: column-reverse;
    text-align: center;

    /* ${Content} {
      width: 34rem;
    } */

    ${Image} {
      margin-right: 0;
      margin-left: 0;
    }
  }

  ${props => props.orient === 'left' && css`
    flex-direction: row;
    ${Image} {
      margin-right: 0;
    }
  `}

  ${props => props.orient === 'right' && css`
    ${Image} {
      margin-left: 0;
    }
  `}
`;
