import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import SpotlightBanner from './spotlight';
import image from '../../utils/mockBannerImg';

describe('SpotlightBanner', () => {
  it('left orient renders correctly', () => {
    const { asFragment } = render(
      <ThemeProvider theme={theme}>
        <SpotlightBanner image={image.src} imagedesc={image.alt} contentAlign="left" orient="left" imagePosition="right">
          <h2>Title</h2>
          <p>Description</p>
        </SpotlightBanner>
      </ThemeProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('right orient renders correctly', () => {
    const { asFragment } = render(
      <ThemeProvider theme={theme}>
        <SpotlightBanner image={image.src} imagedesc={image.alt} contentAlign="left" orient="right" imagePosition="left">
          <h2>Title</h2>
          <p>Description</p>
        </SpotlightBanner>
      </ThemeProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
