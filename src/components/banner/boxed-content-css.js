import styled, { css } from 'styled-components';
import BannerContainer from './banner';
import { Content } from './banner-css';

export default styled(BannerContainer)`
  align-items: center;
  justify-content: center;

  ${Content} {
    background-color: inherit;
    width: 40rem;
    border-radius: 0.5rem;
  }

  ${props => props.orient === 'left' && css`
    justify-content: flex-start;
    padding-left: 0 !important;

    ${Content} {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  `}

  ${props => props.orient === 'right' && css`
    justify-content: flex-end;
    padding-right: 0 !important;

    ${Content} {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  `}
`;
