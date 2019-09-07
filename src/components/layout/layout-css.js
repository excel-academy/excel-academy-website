import { createGlobalStyle } from 'styled-components';
import buttonCSS from '../button/button-css';
import media, { mediamax } from '../../media';
import { themeColor } from '../../../site-config';

export default createGlobalStyle`
  @font-face {
    font-display: fallback;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 300;
    src: local('Open Sans Light'), local('OpenSans-Light'), url('https://fonts.gstatic.com/s/opensans/v16/mem5YaGs126MiZpBA-UN_r8OUuhpKKSTjw.woff2') format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  @font-face {
    font-display: fallback;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url('https://fonts.gstatic.com/s/opensans/v16/mem5YaGs126MiZpBA-UNirkOUuhpKKSTjw.woff2') format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  html {
    font-family: 'Open Sans', Helvetica, sans-serif;
    font-size: 11pt;
    scroll-behavior: smooth;
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
    background-color: #f7f7f7;
    color: #4b505c;
    font-size: 1rem;
    line-height: 1.65;
  }

  ::-webkit-input-placeholder {
    color: #bbb;
    opacity: 1.0;
  }

  ::-moz-placeholder {
    color: #bbb;
    opacity: 1.0;
  }

  :-moz-placeholder {
    color: #bbb;
    opacity: 1.0;
  }

  :-ms-input-placeholder {
    color: #bbb;
    opacity: 1.0;
  }

  /* account for fixed header */
  :target::before {
    display: block;
    height: 5.4em; /* fixed header height + top padding of section */
    margin: -3.4em 0 0; /* negative fixed header height */
    content: "";
  }

  #___gatsby {
    background-color: inherit;
    & > [role="group"] {
      background-color: inherit;
    }
  }

  a {
    color: ${themeColor};
    &.button {
      ${buttonCSS}
    }
  }

  p {
    margin: 0 0 2rem 0;
  }

  h1, h2, h3, h4, h5, h6 {
    /* margin: 0 0 1rem 0; */
    line-height: 1.5;

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

  sub {
    position: relative;
    top: 0.5rem;
    font-size: 0.8rem;
  }

  sup {
    position: relative;
    top: -0.5rem;
    font-size: 0.8rem;
  }

  blockquote {
    padding: 0.5rem 0 0.5rem 2rem;
    border-left: solid 4px;
    margin: 0 0 2rem 0;
    font-style: italic;
  }

  code {
    padding: 0.25rem 0.325rem;
    background-color: rgba(220, 220, 220, 0.5);
    border-radius: 4px;
    font-family: monospace;
    font-size: 0.9em;
  }

  pre {
    margin: 0 0 2rem 0;
    font-family: monospace;
    font-size: 0.9em;

    code {
      display: block;
      padding: 0.75rem 1rem;
      line-height: 1.5;
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
      display: block;
      margin: 0;
      box-shadow: 2px 2px 18px 4px rgba(0, 0, 0, 0.1);
    }
  }

  figcaption {
    padding-top: 1rem;
    font-size: 0.9rem;
    font-style: italic;
    font-weight: 300;
    text-align: center;
  }

  input[type="text"],
  input[type="password"],
  input[type="email"],
  select {
    height: 2.75em;
    margin-bottom: 1em;
  }

  input[type="text"],
  input[type="password"],
  input[type="email"],
  select,
  textarea {
    display: block;
    width: 100%;
    box-sizing: border-box;
    padding: 0 1em;
    border: solid 1px rgba(144,144,144,0.25);
    appearance: none;
    background-color: #fff;
    border-radius: 8px;
    color: #000;
    outline: 0;
    text-decoration: none;

    &:invalid {
      box-shadow: none;
    }

    &:focus {
      border-color: ${themeColor};
      box-shadow: 0 0 0 1px ${themeColor};
    }
  }

  input[type="submit"] {
    ${buttonCSS}
  }

  table {
    width: 100%;
    margin: 0 0 2em 0;
    border-collapse: collapse;

    td {
      padding: 0.75em 0.75em;
    }

    tfoot {
      td {
        font-weight: bold;
      }
    }

    tbody {
      tr {
        border: solid 1px rgba(144,144,144,0.25);
        border-right: 0;
        border-left: 0;

        td {
          border: solid 1px rgba(144,144,144,0.25);
          border-top-width: 0;
          border-left-width: 0;

          &:first-child {
            border-left-width: 1px;
          }
        }

        &:nth-child(2n + 1) {
          background-color: rgba(144,144,144,0.075);
          td {
            border-top-width: 1px;
          }
        }
      }
    }

    th {
      padding: 0 0.75em 0.75em 0.75em;
      color: #3d424f;
      font-size: 0.9em;
      font-weight: 600;
      text-align: left;
    }
  }

  .major {
    font-size: 2em;
    font-weight: 200;
    letter-spacing: -0.025rem;
    line-height: 1.3;
  }

  /* still visible to screen readers */
  .visuallyhidden {
    position: absolute;
    overflow: hidden;
    width: 1px;
    height: 1px;
    padding: 0;
    border: 0;
    margin: -1px;
    clip: rect(0 0 0 0);
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
