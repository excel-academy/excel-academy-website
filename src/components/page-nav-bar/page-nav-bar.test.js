import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import PageNavBar from './page-nav-bar';

describe('PageNavBar', () => {
  it('default renders correctly', () => {
    const { asFragment } = render(
      <ThemeProvider theme={theme}>
        <PageNavBar navItems={[
          { id: 'test', title: 'Test' },
          { id: 'test2', title: 'Test 2' },
        ]}
        />
      </ThemeProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
