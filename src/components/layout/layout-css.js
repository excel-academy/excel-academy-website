import { createGlobalStyle } from 'styled-components';
import buttonCSS from '../button/button-css';
import media, { mediamax } from '../../media';
import { themeColor } from '../../../site-config';

export default createGlobalStyle`
  html {
    scroll-behavior: smooth;
    font-family: 'Open Sans', Helvetica, sans-serif;
    font-size: 11pt;
    ${media.tablet`
      font-size: 12pt;
    `}
    ${media.desktop`
      font-size: 14pt;
    `}
    ${media.extrawide`
      font-size: 18pt;
    `}
  }

  body {
    font-size: 1rem;
    line-height: 1.65;
    background-color: #f7f7f7;
    color: #4b505c;
  }

  ::-webkit-input-placeholder {
    color: #bbb;
    opacity: 1.0;
  }

  :-moz-placeholder {
    color: #bbb;
    opacity: 1.0;
  }

  ::-moz-placeholder {
    color: #bbb;
    opacity: 1.0;
  }

  :-ms-input-placeholder {
    color: #bbb;
    opacity: 1.0;
  }

  /* account for fixed header */
  :target::before {
    content: "";
    display: block;
    height: 5.4em; /* fixed header height + top padding of section */
    margin: -3.4em 0 0; /* negative fixed header height */
  }

  #___gatsby {
    background-color: inherit;
    & > [role="group"] {
      background-color: inherit;
    }
  }

  p {
    margin: 0 0 2rem 0;
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.5;
    margin: 0 0 1rem 0;

    a {
      color: inherit;
      text-decoration: none;
    }
  }

  h1 {
    font-size: 2.25rem;
    line-height: 1.25;
  }

  h2 {
    font-size: 1.75rem;
  }

  h3 {
    font-size: 1.35rem;
  }

  h4 {
    font-size: 1.1rem;
  }

  h5 {
    font-size: 0.9rem;
  }

  h6 {
    font-size: 0.7rem;
  }

  a {
    color: ${themeColor};
    &.button {
      ${buttonCSS}
    }
  }

  sub {
    font-size: 0.8rem;
    position: relative;
    top: 0.5rem;
  }

  sup {
    font-size: 0.8rem;
    position: relative;
    top: -0.5rem;
  }

  blockquote {
    border-left: solid 4px;
    font-style: italic;
    margin: 0 0 2rem 0;
    padding: 0.5rem 0 0.5rem 2rem;
  }

  code {
    border-radius: 4px;
    font-family: monospace;
    font-size: 0.9em;
    padding: 0.25rem 0.325rem;
    background-color: rgba(220, 220, 220, 0.5);
  }

  pre {
    font-family: monospace;
    font-size: 0.9em;
    margin: 0 0 2rem 0;

    code {
      display: block;
      line-height: 1.5;
      padding: 0.75rem 1rem;
      overflow-x: auto;
    }
  }

  hr {
    border: 0;
    border-bottom: solid 1px;
    margin: 2.5rem 0;

    &.major {
      margin: 3.5rem 0;
    }
  }

  video,
  img {
    max-width: 100%;
  }

  figure {
    margin: 0 0 3rem 0;

    > p,
    > video {
      /* box-shadow: 2px 2px 18px 4px rgba(138, 43, 226, 0.1); */
      box-shadow: 2px 2px 18px 4px rgba(0, 0, 0, 0.1);
      margin: 0;
      display: block;
    }
  }

  figcaption {
    text-align: center;
    font-size: 0.9rem;
    font-style: italic;
    font-weight: 300;
    /* border-top: solid 1px #aaa; */
    padding-top: 1rem;
  }

  input[type="text"],
  input[type="password"],
  input[type="email"],
  select,
  textarea {
    appearance: none;
    border-radius: 8px;
    border: none;
    border: solid 1px rgba(144,144,144,0.25);
    box-sizing: border-box;
    background-color: #fff;
    color: #000;
    display: block;
    outline: 0;
    padding: 0 1em;
    text-decoration: none;
    width: 100%;

    &:invalid {
      box-shadow: none;
    }

    &:focus {
      border-color: ${themeColor};
      box-shadow: 0 0 0 1px ${themeColor};
    }
  }

  input[type="text"],
  input[type="password"],
  input[type="email"],
  select {
    height: 2.75em;
    margin-bottom: 1em;
  }

  input[type="submit"] {
    ${buttonCSS}
  }

  table {
    margin: 0 0 2em 0;
    width: 100%;
    border-collapse: collapse;

    tbody {
      tr {
        border: solid 1px rgba(144,144,144,0.25);
        border-left: 0;
        border-right: 0;

        &:nth-child(2n + 1) {
          background-color: rgba(144,144,144,0.075);
          td {
            border-top-width: 1px;
          }
        }

        td {
          border: solid 1px rgba(144,144,144,0.25);
          border-left-width: 0;
          border-top-width: 0;

          &:first-child {
            border-left-width: 1px;
          }
        }
      }
    }

    td {
      padding: 0.75em 0.75em;
    }

    th {
      color: #3d424f;
      font-size: 0.9em;
      font-weight: 600;
      padding: 0 0.75em 0.75em 0.75em;
      text-align: left;
    }

    tfoot {
      td {
        font-weight: bold;
      }
    }
  }

  .major {
    font-size: 2em;
    font-weight: 200;
    line-height: 1.3;
    letter-spacing: -0.025rem;
  }

  /* still visible to screen readers */
  .visuallyhidden {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  ${mediamax.tablet`
    p {
      &.major {
        font-size: 1.1rem;
      }
    }

    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1.25rem;
    }

    h4 {
      font-size: 1rem;
    }
  `}
`;
