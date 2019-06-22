/* eslint-disable react/prop-types */
import React from 'react';
import { BreakpointProvider } from './src/context/BreakpointContext';

export const wrapRootElement = ({ element }) => (
  <BreakpointProvider>{element}</BreakpointProvider>
);
