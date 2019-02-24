import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { Heading } from 'rebass';
import theme from '../../theme';
import ContentOverlayBanner from './content-overlay';
import image from '../../utils/mockBannerImg';

describe('ContentOverlayBanner', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <ContentOverlayBanner image={image} contentAlign="center" orient="left" imagePosition="center" bg="blue" fullscreen>
          <Heading fontWeight={300} fontSize="5rem" lineHeight={1} mb={1}>Ernie Bello</Heading>
        </ContentOverlayBanner>
      </ThemeProvider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
