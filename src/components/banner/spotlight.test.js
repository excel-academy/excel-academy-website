import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import SpotlightBanner from './spotlight';
import image from '../../utils/mockBannerImg';

describe('SpotlightBanner', () => {
  it('left orient renders correctly', () => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <SpotlightBanner image={image.src} imagedesc={image.alt} contentAlign="left" orient="left" imagePosition="right">
          <h2>Title</h2>
          <p>Description</p>
        </SpotlightBanner>
      </ThemeProvider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('right orient renders correctly', () => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <SpotlightBanner image={image.src} imagedesc={image.alt} contentAlign="left" orient="right" imagePosition="left">
          <h2>Title</h2>
          <p>Description</p>
        </SpotlightBanner>
      </ThemeProvider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
