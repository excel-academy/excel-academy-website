import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import Metadata from '../metadata/metadata';
import Header from '../header/header';
import theme from '../../theme';
import LayoutStyle from './layout-css';

const Layout = ({ data, children }) => (
  <>
    <Normalize />
    <LayoutStyle />
    <Metadata />
    <Header siteTitle={data.site.siteMetadata.siteTitle} />
    {children}
  </>
);

Layout.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.object.isRequired,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

const LayoutWithQuery = props => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            siteTitle
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <Layout data={data} {...props} />
      </ThemeProvider>
    )}
  />
);

LayoutWithQuery.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutWithQuery;
