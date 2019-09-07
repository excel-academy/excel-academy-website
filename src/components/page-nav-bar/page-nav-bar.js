import React from 'react';
import PropTypes from 'prop-types';
import { Box, Link } from 'rebass/styled-components';
import theme from '../../theme';
import NavContainer from './page-nav-bar-css';

const PageNavBar = ({ navItems }) => (
  <NavContainer
    as="nav"
    bg="greens.0"
    px={3}
  >
    <Box
      as="ul"
      p={0}
      m={0}
      css={{
        display: 'flex',
        listStyle: 'none',
        justifyContent: 'space-between',
      }}
    >
      {navItems.map(({ id, title }) => (
        <li key={id}>
          <Link
            href={`#${id}`}
            color="greens.1"
            fontSize="1em"
            py="1em"
            css={{
              textDecoration: 'none',
              textTransform: 'uppercase',
              display: 'inline-block',
              '&:hover': {
                color: theme.colors.theme,
              },
            }}
          >
            {title}
          </Link>
        </li>
      ))}
    </Box>
  </NavContainer>
);

PageNavBar.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

export default PageNavBar;
