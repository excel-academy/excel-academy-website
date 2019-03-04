import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import Metadata from '../metadata/metadata';
import Header from '../header/header';
import Footer from '../footer/footer';
import BreakpointObserver from '../breakpoint-observer/breakpoint-observer';
import BreakpointContext from '../../context/BreakpointContext';
import theme from '../../theme';
import LayoutStyle from './layout-css';

const Layout = ({ data, setBreakpoint, children }) => (
  <>
    <Normalize />
    <LayoutStyle />
    <Metadata />
    <BreakpointObserver setBreakpoint={setBreakpoint} />
    <Header siteTitle={data.site.siteMetadata.siteTitle} />
    {children}
    <Footer />
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
      <BreakpointContext.Consumer>
        {bpctx => (
          <ThemeProvider theme={theme}>
            <Layout data={data} setBreakpoint={bpctx.setBreakpoint} {...props} />
          </ThemeProvider>
        )}
      </BreakpointContext.Consumer>
    )}
  />
);

LayoutWithQuery.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutWithQuery;
