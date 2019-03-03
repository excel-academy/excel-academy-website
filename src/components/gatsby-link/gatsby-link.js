import React from 'react';
import PropTypes from 'prop-types';
import { Link as GatsbyLink } from 'gatsby';

const Link = (props) => {
  const { to, children } = props;
  if (to.indexOf('/') === 0 && to.indexOf('/uploads') !== 0) {
    return (
      <GatsbyLink {...props}>
        {children}
      </GatsbyLink>
    );
  }

  return (
    <a {...props} href={to}>
      {children}
    </a>
  );
};

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Link;
