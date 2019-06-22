import { css } from 'styled-components';
import { space } from 'styled-system';
import { darken, lighten } from 'polished';
import { themeColor } from '../../../site-config';

const buttonBg = '#595C68';

const disabled = css`
  box-shadow: inset 0 -0.15em 0 0 rgba(0,0,0,0.15);
  opacity: 0.25;
  pointer-events: none;
`;

export default css`
  display: inline-block;
  overflow: hidden;
  height: 2.85em;
  padding: 0 2.5em;
  border: 0;
  appearance: none;
  background-color: ${buttonBg};
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  font-weight: 600;
  line-height: 2.85em;
  /* letter-spacing: 0.125em; */
  text-align: center;
  text-decoration: none;
  transition-duration: 0.2s;
  transition-property: background-color, color;
  transition-timing-function: ease-in-out;
  white-space: nowrap;
  ${space}

  &:active,
  &:hover {
    background-color: ${lighten(0.2, buttonBg)};
  }

  &:active {
    background-color: ${darken(0.2, buttonBg)};
  }

  &:disabled {
    ${disabled}
  }
`;


export const primaryButton = css`
  background-color: ${themeColor};

  &:hover {
    background-color: ${lighten(0.1, themeColor)};
    color: #fff;
  }

  &:active {
    background-color: ${darken(0.2, themeColor)};
  }
`;

export const smallButton = css`
  font-size: 0.8em;
  line-height: 3em;
`;

export const largeButton = css`
  font-size: 1.35em;
  line-height: 2.825em;
`;

export const disabledButton = css`
  ${disabled}
`;
