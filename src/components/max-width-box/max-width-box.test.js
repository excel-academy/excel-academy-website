import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import MaxWidthBox from './max-width-box-css';

describe('MaxWidthBox', () => {
  it('default renders correctly', () => {
    const { asFragment } = render(
      <ThemeProvider theme={theme}>
        <MaxWidthBox maxWidth={1}>
          <h1>hello world</h1>
        </MaxWidthBox>
      </ThemeProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('styled system renders correctly', () => {
    const { asFragment } = render(
      <ThemeProvider theme={theme}>
        <MaxWidthBox
          css={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          maxWidth={2}
          px={{ _: 1, tablet: 3 }}
          py={3}
          bg="white"
        >
          <h1>hello world</h1>
        </MaxWidthBox>
      </ThemeProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
