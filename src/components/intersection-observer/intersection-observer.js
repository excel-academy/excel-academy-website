// from https://github.com/fabe/gatsby-universal/blob/master/src/components/io/io.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';

let io;
const listeners = [];

function getIO(rootMargin = '-50px') {
  if (
    typeof io === 'undefined'
    && typeof window !== 'undefined'
    && window.IntersectionObserver
  ) {
    io = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          listeners.forEach((listener) => {
            if (listener[0] === entry.target) {
              // Edge doesn't currently support isIntersecting
              // so also test for an intersectionRatio > 0
              if (entry.isIntersecting || entry.intersectionRatio > 0) {
                // io.unobserve(l[0]);
                listener[1](true);
              } else if (!entry.isIntersecting || entry.intersectionRatio <= 0) {
                listener[1](false);
              }
            }
          });
        });
      },
      { rootMargin },
    );
  }

  return io;
}

const listenToIntersections = (el, cb, rm) => {
  const intersection = getIO(rm);
  intersection.observe(el);
  listeners.push([el, cb]);
  return intersection;
};

class IO extends Component {
  constructor() {
    super();

    // Always not visible while server rendering.
    this.state = {
      isVisible: false,
      hasBeenVisible: false,
    };

    this.handleRef = this.handleRef.bind(this);
  }

  async componentDidMount() {
    // Default values
    let isVisible = true;
    let hasBeenVisible = true;

    // Intersection Observer polyfill
    if (typeof window !== 'undefined' && !window.IntersectionObserver) {
      await import('intersection-observer').then(() => {
        // eslint-disable-next-line no-console
        console.log('IntersectionObserver polyfill injected.');
      });
    }

    // Check if browser (now) supports IntersectionObserver
    if (typeof window !== 'undefined' && window.IntersectionObserver) {
      isVisible = false;
      hasBeenVisible = false;
    }

    this.setState(
      {
        isVisible,
        hasBeenVisible,
      },
      this.setupIntersections,
    );
  }

  componentWillUnmount() {
    this.io.disconnect();
  }

  setupIntersections() {
    const { rootMargin } = this.props;
    this.io = listenToIntersections(
      this.ref,
      (isVisible) => {
        this.setState((state) => {
          let newState = {};

          if (!state.hasBeenVisible && isVisible) {
            newState = { hasBeenVisible: true };
          }

          return { isVisible, ...newState };
        });
      },
      rootMargin,
    );
  }

  handleRef(ref) {
    if (ref) {
      this.ref = ref;
    }
  }

  render() {
    const { isVisible, hasBeenVisible } = this.state;
    const { children } = this.props;

    return (
      <div ref={this.handleRef}>
        {children({ isVisible, hasBeenVisible })}
      </div>
    );
  }
}

IO.propTypes = {
  children: PropTypes.func.isRequired,
  rootMargin: PropTypes.string,
};

IO.defaultProps = {
  rootMargin: '-50px',
};

export default IO;
