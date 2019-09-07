import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Heading } from 'rebass/styled-components';
import theme from '../../theme';
import ContentOverlayBanner from './content-overlay';
import image from '../../utils/mockBannerImg';

describe('ContentOverlayBanner', () => {
  it('renders correctly', () => {
    const { asFragment } = render(
      <ThemeProvider theme={theme}>
        <ContentOverlayBanner image={image.src} imagedesc={image.alt} contentAlign="center" orient="left" imagePosition="center" bg="blue" fullscreen>
          <Heading fontWeight={300} fontSize="5rem" lineHeight={1} mb={1}>Ernie Bello</Heading>
        </ContentOverlayBanner>
      </ThemeProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
