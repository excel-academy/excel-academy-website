import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Header from './header';

describe('Header', () => {
  it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Header siteTitle="Hello world" />);
    const result = renderer.getRenderOutput();
    // const tree = renderer.create(<Header siteTitle="Hello world" />).toJSON();
    expect(result).toMatchSnapshot();
    // expect(result).toHaveStyleRule('background', 'rebeccapurple');
  });
});
