import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { FaBriefcaseMedical } from 'react-icons/fa';
import theme from '../../theme';
import TitleIntro from './title-intro';

describe('TitleIntro', () => {
  it('default renders correctly', () => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <TitleIntro
          title="hello"
          intro="world"
        />
      </ThemeProvider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('default renders with an icon', () => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <TitleIntro
          title="hello"
          intro="world"
          icon={<FaBriefcaseMedical />}
        />
      </ThemeProvider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('default renders with different cols', () => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <TitleIntro
          title="hello"
          intro="world"
          cols={5}
        />
      </ThemeProvider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('default renders with different titleColor', () => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <TitleIntro
          title="hello"
          intro="world"
          titleColor="black"
        />
      </ThemeProvider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
