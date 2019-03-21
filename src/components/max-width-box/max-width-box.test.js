import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import MaxWidthBox from './max-width-box-css';

describe('MaxWidthBox', () => {
  it('default renders correctly', () => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <MaxWidthBox maxWidth={1}>
          <h1>hello world</h1>
        </MaxWidthBox>
      </ThemeProvider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('styled system renders correctly', () => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <MaxWidthBox
          css={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          maxWidth={2}
          px={{ sm: 1, tablet: 3 }}
          py={3}
          bg="white"
        >
          <h1>hello world</h1>
        </MaxWidthBox>
      </ThemeProvider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
