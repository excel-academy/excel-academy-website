import React, { useState } from 'react';
import PropTypes from 'prop-types';

const defaultState = '';
const BreakpointContext = React.createContext(defaultState);

const BreakpointProvider = ({ children }) => {
  const [breakpoint, setBreakpoint] = useState(defaultState);

  return (
    <BreakpointContext.Provider value={{ breakpoint, setBreakpoint }}>
      {children}
    </BreakpointContext.Provider>
  );
};

BreakpointProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default BreakpointContext;

export { BreakpointProvider };
