import styled, { css } from 'styled-components';
import BannerContainer from './banner';
import { Content, Image } from './banner-css';
import { mediamax } from '../../media';

export default styled(BannerContainer)`
  align-items: stretch;
  justify-content: flex-end;
  flex-direction: row;

  ${Content} {
    align-self: center;
    flex-grow: 1;
    flex-shrink: 1;
    margin: 0 auto;
  }

  ${props => props.orient === 'right' && css`
    flex-direction: row-reverse;
  `}

  ${mediamax.tablet`
    @media screen and (orientation: portrait) {
      flex-direction: column-reverse;
      text-align: center;

      ${Content} {
        width: 100%;
      }

      ${Image} {
        width: 100%;
      }
    }
  `}
`;
