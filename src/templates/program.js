import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
// import { Heading } from 'rebass';
// import { rgba } from 'polished';
// import { themeColor } from '../../site-config';
import Layout from '../components/layout/layout';
import Metadata from '../components/metadata/metadata';
import { VerticalSplitBanner } from '../components/banner';

export const ProgramTemplate = ({
  title, description, image
}) => (
  <VerticalSplitBanner image={image} contentAlign="left" orient="left" imagePosition="right" bg="white">
    <h1>{title}</h1>
    <p>{description}</p>
    {/* <LinkButton to="/engineering/ux#example-list" large="true" primary="true">Get Started</LinkButton> */}
  </VerticalSplitBanner>
);

const ProgramPage = ({ data }) => {
  const { markdownRemark: page } = data;

  return (
    <Layout>
      <Metadata pageData={page.frontmatter} />
      <HomeTemplate
        title={page.frontmatter.title}
        content={page.htmlAst}
      />
    </Layout>
  );
};

ProgramPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }).isRequired,
};

export default ProgramPage;

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_description
        intro {
          image
          text
        }
      }
    }
  }
`;
