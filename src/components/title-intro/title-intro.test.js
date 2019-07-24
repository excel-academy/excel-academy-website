import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { FaBriefcaseMedical } from 'react-icons/fa';
import theme from '../../theme';
import TitleIntro from './title-intro';

describe('TitleIntro', () => {
  it('default renders correctly', () => {
    const { asFragment } = render(
      <ThemeProvider theme={theme}>
        <TitleIntro
          title="hello"
          intro="world"
        />
      </ThemeProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('default renders with an icon', () => {
    const { asFragment } = render(
      <ThemeProvider theme={theme}>
        <TitleIntro
          title="hello"
          intro="world"
          icon={<FaBriefcaseMedical />}
        />
      </ThemeProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('default renders with different cols', () => {
    const { asFragment } = render(
      <ThemeProvider theme={theme}>
        <TitleIntro
          title="hello"
          intro="world"
          cols={5}
        />
      </ThemeProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('default renders with different titleColor', () => {
    const { asFragment } = render(
      <ThemeProvider theme={theme}>
        <TitleIntro
          title="hello"
          intro="world"
          titleColor="black"
        />
      </ThemeProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
