import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import Metadata from '../components/metadata/metadata';
import HomeTemplate from '../components/home-page/home-page';

const IndexPage = ({ data }) => {
  const { markdownRemark: page, programs, locations } = data;
  const { frontmatter: metadata } = page;

  return (
    <Layout>
      <Metadata pageData={metadata} />
      <HomeTemplate
        title={metadata.title}
        content={page.htmlAst}
        intro={metadata.intro}
        programsHeadline={metadata.programs_headline}
        programs={programs.edges}
        benefitsblock={metadata.benefitsblock}
        locationsHeadline={metadata.locations_headline}
        locations={locations.edges}
        cta={metadata.cta}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }).isRequired,
};

export default IndexPage;

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_description
        intro {
          headline
          cta {
            action
            url
          }
        }
        programs_headline
        benefitsblock {
          headline
          description
          benefits
        }
        locations_headline
        cta {
          headline
          description
          image {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          form_header
          form_button
        }
      }
    },
    programs: allMarkdownRemark(
      filter: { fields: { slug: { regex: "\/programs\/.+\/" }}},
      sort: {fields: [frontmatter___weight]}
    ) {
      edges {
        node {
          frontmatter {
            title
            program
            home_description
          }
          fields {
            slug
          }
        }
      }
    }
    locations: allMarkdownRemark(
      filter: { fields: { slug: { regex: "\/locations\/.+\/" }}},
      sort: {fields: [frontmatter___weight]}
    ) {
      edges {
        node {
          frontmatter {
            title
            address
            city
            state
            zip
            googleMap
          }
        }
      }
    }
  }
`;
