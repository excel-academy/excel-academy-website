import React from 'react';
import IO from '../intersection-observer/intersection-observer';
import Container from './intersection-observer-example-css';

// <IO> uses a render prop to pass down `isVisible` and `hasBeenVisible`.
// In this example, we only care about `isVisible` and reset the styles
// every time we scroll back up. Use `hasBeenVisible` to keep the styles
// after scrolling back up and down again.
const IOExample = () => (
  <IO rootMargin="-50px">
    {({ isVisible }) => (
      <Container isVisible={isVisible}>
        <h2>IntersectionObserver</h2>
      </Container>
    )}
  </IO>
);

export default IOExample;
