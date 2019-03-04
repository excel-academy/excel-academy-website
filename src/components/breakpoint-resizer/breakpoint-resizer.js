import React, { useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import ResizeObserver from 'resize-observer-polyfill';
import { breakpoints } from '../../theme';

const BreakpointResizer = ({ buttonText, program }) => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = (entry) => {
    const { width, height } = entry.contentRect;

    // console.log('Element:', entry.target);
    // console.log(`Element's size: ${ width }px x ${ height }px`);
    // console.log(`Element's paddings: ${ top }px ; ${ left }px`);
    setWindowSize({ width, height });
  };

  const resizeObserver = new ResizeObserver(entries => handleResize(entries[0]));

  const fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);

  const currentBreakpoint = (width) => {
    let breakpoint;
    Object.keys(breakpoints).map((key) => {
      console.log(key, breakpoints[key]);
      const emWidth = String(breakpoints[key]).replace('em', '');
      const breakpointPxWidth = parseFloat(emWidth) * fontSize;
      // console.log(parseFloat(emWidth) * fontSize);
      if (width > breakpointPxWidth) {
        breakpoint = key;
      } else {
        return breakpoint;
      }
    });
    return breakpoint;
  };

  useLayoutEffect(() => {
    resizeObserver.observe(document.body);

    return () => resizeObserver.unobserve(document.body);
  }, [windowSize.width]);

  return (
    <>
      <div css={{
        paddingTop: '4em',
      }}>
        <p>Font size: {fontSize}</p>
        <p>{currentBreakpoint(windowSize.width)}</p>
        <p>Window width: {windowSize.width}</p>
        <p>Window height: {windowSize.height}</p>
      </div>
    </>
  )
};

BreakpointResizer.propTypes = {

};

export default BreakpointResizer;
