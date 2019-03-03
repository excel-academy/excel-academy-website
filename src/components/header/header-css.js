import styled from 'styled-components';
import media from '../../media';
import { themeColor } from '../../../site-config';
import buttonCSS from '../button/button-css';
import logo from '../../images/logo-square.png';

export const HomeLink = styled.h1`
  color: #3d424f;
  font-size: 14px;
  font-weight: 600;
  height: inherit;
  left: 1.25em;
  line-height: inherit;
  margin: 0 auto;
  padding: 0;
  display: inline-block;

  a {
    background-image: url(${logo});
    background-size: 25px 25px;
    background-repeat: no-repeat;
    background-position: left center;
    display: block;
    padding-left: 35px;
  }

  ${media.tablet`
    position: absolute;
    top: 0;
    margin: 0;
  `}
`;

export const HeaderNav = styled.nav`
  display: none;
  border-top: solid 1px rgba(144, 144, 144, 0.25);

  .open & {
    display: block;
  }

  ul {
    list-style: none;
    margin: 0;
  }

  > ul {
    padding-left: 1.5em;
    padding-right: 1.5em;

    > li {
      &:first-child {
        a {
          border-top: 0;
        }
      }

      > a {
        font-weight: 600;
      }

      > ul {
        padding: 0;
        a {
          padding-left: 1.5em;
        }
      }
    }
  }

  a {
    color: #4b505c;
    display: block;
    text-decoration: none;
    border-top: solid 1px rgba(144, 144, 144, 0.2);
  }

  ${media.tablet`
    height: inherit;
    line-height: inherit;
    position: absolute;
    right: 1.25em;
    top: 0;
    vertical-align: middle;
    display: block;
    border-top: 0;

    > ul {
      padding-left: 0;
      padding-right: 0;

      > li {
        border-radius: 8px;
        display: inline-block;
        margin-left: 1.5em;
        padding-left: 0;
        position: relative;

        a {
          display: inline-block;
          border-top: 0;
          font-weight: normal;

          &:hover {
            color: ${themeColor};
          }
        }

        &:first-child {
          margin-left: 0;
        }

        &:last-child {
          a {
            ${buttonCSS}
            border-color: rgba(144,144,144,0.25);
            box-shadow: none;
            margin-bottom: 0;
            padding: 0 1.5em;
            position: relative;
            top: -0.075em;
            vertical-align: middle;
            height: 2.5em;
            line-height: 2.5em;
            color: #fff !important;
          }
        }

        &:hover {
          > ul {
            display: block;
          }
        }

        > ul {
          display: none;
          position: absolute;
          background-color: #fff;
          list-style: none;
          min-width: 13em;
          padding: 0 1em;
          margin: 0;
          border-right: solid 1px rgba(0,0,0,0.05);
          border-bottom: solid 1px rgba(0,0,0,0.05);
          border-left: solid 1px rgba(0,0,0,0.05);

          > li {
            border-top: solid 1px rgba(144,144,144,0.25);
            padding: 0;

            a {
              display: block;
              /* line-height: 3em; */
              text-decoration: none;
              padding-left: 0;
            }

            &:first-child {
              border-top: 0;
            }
          }
        }
      }
    }
  `}
`;

export default styled.header`
  background-color: #fff;
  box-shadow: 0px 0.0375em 0.125em 0px rgba(0,0,0,0.05);
  border-bottom: solid 1px rgba(144, 144, 144, 0.25);
  left: 0;
  font-size: 14px;
  line-height: 3.4em;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  display: flex;
  flex-direction: column;

  .mobile-menu-button {
    display: inline-block;
    padding-left: 1.5em;
    padding-right: 1.5em;
    border-right: solid 1px rgba(144, 144, 144, 0.25);
    position: absolute;
    left: 0;
    top: 0;
  }

  ${media.tablet`
    height: 3.5em;
    border: 0;
    display: block;

    .mobile-menu-button {
      display: none;
    }
  `}
`;
