import styled from 'styled-components';
import { themeColor } from '../../../site-config';
import logo from '../../images/logo-square.png';

export const HomeLink = styled.h1`
  color: #3d424f;
  font-size: 14px;
  font-weight: 600;
  height: inherit;
  left: 1.25em;
  line-height: inherit;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;

  a {
    background-image: url(${logo});
    background-size: 36px 36px;
    background-repeat: no-repeat;
    background-position: left center;
    display: block;
    height: 50px;
    padding-left: 50px;
  }
`;

export const HeaderNav = styled.nav`
  height: inherit;
  line-height: inherit;
  position: absolute;
  right: 1.25em;
  top: 0;
  vertical-align: middle;

  > ul {
    list-style: none;
    margin: 0;
    padding-left: 0;

    > li {
      border-radius: 8px;
      display: inline-block;
      margin-left: 1.5em;
      padding-left: 0;
      position: relative;

      a {
        color: #4b505c;
        display: inline-block;
        text-decoration: none;

        &:hover {
          color: ${themeColor};
        }
      }

      &:first-child {
        margin-left: 0;
      }

      &:hover {
        > ul {
          display: block;
        }
      }

      .button {
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

      > ul {
        display: none;
        position: absolute;
        background-color: #fff;
        /* border-radius: 8px; */
        /* box-shadow: 0px 0.0375em 0.25em 0px rgba(0,0,0,0.1); */
        list-style: none;
        /* margin: -0.75em 0 0 0; */
        min-width: 12em;
        padding: 0 1em;
        margin: 0;
        border-right: solid 1px rgba(0,0,0,0.05);
        border-bottom: solid 1px rgba(0,0,0,0.05);
        border-left: solid 1px rgba(0,0,0,0.05);

        /* &:before {
          transform: rotate(45deg);
          background-color: #fff;
          content: '';
          display: block;
          height: 1em;
          position: absolute;
          left: 1.25em;
          top: -0.5em;
          width: 1em;
        } */

        > li {
          border-top: solid 1px rgba(144,144,144,0.25);
          padding: 0;

          a {
            display: block;
            line-height: 3em;
            text-decoration: none;
          }

          &:first-child {
            border-top: 0;
          }
        }
      }
    }
  }
`;

export default styled.header`
  background-color: #fff;
  box-shadow: 0px 0.0375em 0.125em 0px rgba(0,0,0,0.05);
  cursor: default;
  height: 3.5em;
  left: 0;
  font-size: 14px;
  line-height: 3.4em;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
`;
