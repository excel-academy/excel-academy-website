import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import { ProgramTemplate } from './program';

const nav = [
  {
    id: 'opportunities',
    title: 'Career opportunities',
  },
  {
    id: 'schedules',
    title: 'Schedules',
  },
];

const locations = [
  {
    node: {
      frontmatter: {
        title: 'loc 1',
        googleMap: 'google map source',
      },
    },
  },
  {
    node: {
      frontmatter: {
        title: 'loc 2',
        googleMap: 'google map source 2',
      },
    },
  },
];

describe('Program template', () => {
  it('renders correctly', () => {
    const { asFragment } = render(
      <ThemeProvider theme={theme}>
        <ProgramTemplate
          program="CNA"
          title="Certified nursing assistant"
          intro={{
            text: 'intro to cna',
            image_static: '/img/medical-staff.jpg',
          }}
          nav={nav}
          opportunities={{
            title: 'Opportunities',
            intro: 'intro to opps',
            text: 'detail for opps',
            disclaimer: 'disclaimer for opps',
            places: ['place 1', 'place 2'],
          }}
          schedule={{
            title: 'Schedule',
            intro: 'intro to schedule',
            lesson_plan: '<p>html for <b>lesson</b> plan</p>',
            dates: {
              title: 'date title',
              intro: 'date intro',
            },
          }}
          tuition={{
            title: 'Tuition',
            intro: 'intro to tuition',
            text: '<p>html for <b>tuition</b></p>',
          }}
          graduation={{
            title: 'Graduation',
            intro: 'intro to graduation',
            text: 'detail for graduation',
            steps: ['step 1', 'step 2'],
          }}
          cta={{
            title: 'Call to action',
            intro: 'intro to cta',
            form_header: 'Form header',
            form_button: 'Submit button',
          }}
          locations={locations}
          admissionPolicy={{
            title: 'Admission policy',
            policies: ['policy 1', 'policy 2'],
          }}
          upcomingDates={{
            daytime: ['2035-01-02', '2035-02-03'],
            evening: ['2035-01-03', '2035-02-04'],
          }}
        />
      </ThemeProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
