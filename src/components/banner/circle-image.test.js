import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { Heading } from 'rebass';
import theme from '../../theme';
import CircleImageBanner from './circle-image';
import image from '../../utils/mockBannerImg';

describe('CircleImageBanner', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <CircleImageBanner image={image.src} imagedesc={image.alt} orient="right" p={{ sm: 1, tablet: 3 }}>
          <Heading fontWeight={300} fontSize="5rem" lineHeight={1} mb={1}>Ernie Bello</Heading>
        </CircleImageBanner>
      </ThemeProvider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
