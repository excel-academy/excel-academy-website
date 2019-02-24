import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import LinkButton from './link-button-css';

describe('LinkButton', () => {
  it('default renders correctly', () => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <LinkButton to="/engineering/ux#example-list">Get Started</LinkButton>
      </ThemeProvider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('primary renders correctly', () => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <LinkButton to="/engineering/ux#example-list" primary="true">Get Started</LinkButton>
      </ThemeProvider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('large renders correctly', () => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <LinkButton to="/engineering/ux#example-list" large="true">Get Started</LinkButton>
      </ThemeProvider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('small renders correctly', () => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <LinkButton to="/engineering/ux#example-list" small="true">Get Started</LinkButton>
      </ThemeProvider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
