import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import HeaderContainer from './header-css';
// import MainMenu from '../mainmenu/mainmenu';

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </HeaderContainer>
);

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};

export default Header;
