import { css } from 'styled-components';
import { space } from 'styled-system';
import { darken, lighten } from 'polished';
import { themeColor } from '../../../site-config';

const buttonBg = '#595C68';

const disabled = css`
  pointer-events: none;
  opacity: 0.25;
  box-shadow: inset 0 -0.15em 0 0 rgba(0,0,0,0.15);
`;

export default css`
  appearance: none;
  transition-property: background-color, color;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  border: 0;
  cursor: pointer;
  display: inline-block;
  height: 2.85em;
  line-height: 2.85em;
  border-radius: 8px;
  font-weight: 600;
  letter-spacing: 0.125em;
  text-align: center;
  text-decoration: none;
  overflow: hidden;
  white-space: nowrap;
  padding: 0 2.5em;
  background-color: ${buttonBg};
  color: #fff;
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
