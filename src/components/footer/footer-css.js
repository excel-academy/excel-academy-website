import styled from 'styled-components';
import media from '../../media';
import { themeColor } from '../../../site-config';

export const SocialContainer = styled.ul`
  display: inline-flex;
  justify-content: space-between;
  list-style-type: none;
  padding: 0;
  margin: 0;
  > li:not(:last-child) {
    margin-right: 1em;
  }
  a {
    font-size: 2em;
  }
`;

export const FooterWrapper = styled.div`
  font-size: 0.9em;

  h3 {
    color: #fff;
    font-size: 1.2em;
  }

  a {
    color: #cfd0d3;
    text-decoration: none;

    &:hover {
      color: ${themeColor};
    }
  }

  > * {
    margin-bottom: 2em;
  }

  ${media.tablet`
    display: flex;

    > * {
      flex: 2;
      &:not(:last-child) {
        margin-right: 1em;
      }
    }

    .narrow {
      flex: 1;
    }
  `}

  ${media.desktop`
    > * {
      &:not(:last-child) {
        margin-right: 2em;
      }
    }
  `}
`;
