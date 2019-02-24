import { createGlobalStyle } from 'styled-components';
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
    background-color: #fff;
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
