import styled from 'styled-components';
import BannerContainer from './banner';
import { Content, Image } from './banner-css';

export default styled(BannerContainer)`
  align-items: center;
  justify-content: center;

  ${Content} {
    width: 40rem;
  }

  ${Image} {
    opacity: 0.5;
  }
`;
