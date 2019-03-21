import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import PageNavBar from './page-nav-bar';

describe('PageNavBar', () => {
  it('default renders correctly', () => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <PageNavBar navItems={[
          { id: 'test', title: 'Test' },
          { id: 'test2', title: 'Test 2' },
        ]}
        />
      </ThemeProvider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
