import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import LinkButton from './link-button-css';

describe('LinkButton', () => {
  it('default renders correctly', () => {
    const { asFragment } = render(
      <ThemeProvider theme={theme}>
        <LinkButton to="/engineering/ux#example-list">Get Started</LinkButton>
      </ThemeProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('primary renders correctly', () => {
    const { asFragment } = render(
      <ThemeProvider theme={theme}>
        <LinkButton to="/engineering/ux#example-list" primary="true">Get Started</LinkButton>
      </ThemeProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('large renders correctly', () => {
    const { asFragment } = render(
      <ThemeProvider theme={theme}>
        <LinkButton to="/engineering/ux#example-list" large="true">Get Started</LinkButton>
      </ThemeProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('small renders correctly', () => {
    const { asFragment } = render(
      <ThemeProvider theme={theme}>
        <LinkButton to="/engineering/ux#example-list" small="true">Get Started</LinkButton>
      </ThemeProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
