import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, StaticQuery, graphql } from 'gatsby';
import { FaBars } from 'react-icons/fa';
import classNames from 'classnames';
import HeaderContainer, { HomeLink, HeaderNav } from './header-css';

const Header = ({ siteTitle, programs }) => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const mobileMenuExpandedClasses = classNames({
    open: navIsOpen,
  });

  return (
    <HeaderContainer className={mobileMenuExpandedClasses}>
      <span
        className="mobile-menu-button"
        role="menu"
        tabIndex={0}
        onClick={() => setNavIsOpen(!navIsOpen)}
        onKeyPress={() => setNavIsOpen(!navIsOpen)}
      >
        <FaBars />
      </span>
      <HomeLink>
        <Link to="/">{siteTitle}</Link>
      </HomeLink>
      <HeaderNav>
        <ul>
          <li><Link to="/" onClick={() => setNavIsOpen(false)}>Home</Link></li>
          <li>
            <a href="#">Programs</a>
            <ul>
              {programs.map(({ node }) => (
                <li>
                  <Link
                    key={node.frontmatter.program}
                    to={node.fields.slug}
                    onClick={() => setNavIsOpen(false)}
                  >
                    <span>{node.frontmatter.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li><a href="#locations" onClick={() => setNavIsOpen(false)}>Locations</a></li>
          <li><a href="#start" onClick={() => setNavIsOpen(false)}>Start a career</a></li>
        </ul>
      </HeaderNav>
    </HeaderContainer>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};

const HeaderWithQuery = props => (
  <StaticQuery
    query={graphql`
      query HeaderQuery {
        programs: allMarkdownRemark(
          filter: { fields: { slug: { regex: "\/programs\/.+\/" }}},
          sort: {fields: [frontmatter___weight]}
        ) {
          edges {
            node {
              frontmatter {
                program
                title
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `}
    render={data => <Header programs={data.programs.edges} {...props} />}
  />
);

HeaderWithQuery.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeaderWithQuery;
