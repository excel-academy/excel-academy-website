import React from 'react';
import PropTypes from 'prop-types';
import { Link, StaticQuery, graphql } from 'gatsby';
import HeaderContainer, { HomeLink, HeaderNav } from './header-css';

const Header = ({ siteTitle, programs }) => (
  <HeaderContainer>
    <HomeLink>
      <Link to="/">{siteTitle}</Link>
    </HomeLink>
    <HeaderNav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li>
          <a href="#">Programs</a>
          <ul>
            {programs.map(({ node }) => (
              <li>
                <Link
                  key={node.frontmatter.program}
                  to={node.fields.slug}
                >
                  <span>{node.frontmatter.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li><a href="#locations">Locations</a></li>
        <li><a href="#start" className="button">Start a career</a></li>
      </ul>
    </HeaderNav>
  </HeaderContainer>
);

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
