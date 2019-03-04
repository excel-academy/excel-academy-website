import { useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import ResizeObserver from 'resize-observer-polyfill';
import { breakpoints } from '../../theme';

const BreakpointObserver = ({ setBreakpoint }) => {
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

  const determineBreakpoint = (width) => {
    const validBreakpoints = Object.keys(breakpoints).filter((key) => {
      const emWidth = String(breakpoints[key]).replace('em', '');
      const breakpointPxWidth = parseFloat(emWidth) * fontSize;
      return width > breakpointPxWidth;
    });
    return validBreakpoints.pop() || '';
  };

  useLayoutEffect(() => {
    resizeObserver.observe(document.body);
    const breakpoint = determineBreakpoint(windowSize.width);
    // console.log(breakpoint);
    setBreakpoint(breakpoint);

    return () => resizeObserver.unobserve(document.body);
  }, [windowSize.width]);

  return null;
};

BreakpointObserver.propTypes = {
  setBreakpoint: PropTypes.func.isRequired,
};

export default BreakpointObserver;
