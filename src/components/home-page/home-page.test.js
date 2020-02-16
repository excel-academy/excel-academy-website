import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import HomeTemplate from './home-page';
import image from '../../utils/mockBannerImg';

const programs = [
  {
    node: {
      frontmatter: {
        title: 'program 1',
        program: 'pr1',
        home_description: 'description for home page',
      },
      fields: {
        slug: '/pr1',
      },
    },
  },
  {
    node: {
      frontmatter: {
        title: 'program 2',
        program: 'pr2',
        home_description: 'description for home page 2',
      },
      fields: {
        slug: '/pr2',
      },
    },
  },
];

const locations = [
  {
    node: {
      frontmatter: {
        title: 'loc 1',
        address: 'loc 1 address',
        city: 'loc 1 city',
        state: 'loc 1 state',
        zip: 'loc 1 zip',
        googleMap: 'google map source',
      },
    },
  },
  {
    node: {
      frontmatter: {
        title: 'loc 2',
        address: 'loc 2 address',
        city: 'loc 2 city',
        state: 'loc 2 state',
        zip: 'loc 2 zip',
        googleMap: 'google map source 2',
      },
    },
  },
];

describe('Home template', () => {
  it('renders correctly', () => {
    const { asFragment } = render(
      <ThemeProvider theme={theme}>
        <HomeTemplate
          intro={{
            headline: 'headline home page',
            cta: {
              action: 'learn more',
              url: '#learnmore',
            },
          }}
          programs={programs}
          programsHeadline="programs headline"
          benefitsblock={{
            headline: 'benefits headline',
            description: 'description for benefits',
            benefits: ['benefit 1', 'benefit 2'],
          }}
          locations={locations}
          locationsHeadline="locations headline"
          cta={{
            headline: 'Call to action',
            description: 'desc to cta',
            form_header: 'Form header',
            form_button: 'Submit button',
            image: {
              childImageSharp: {
                fluid: image.src,
              },
            },
          }}
        />
      </ThemeProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
