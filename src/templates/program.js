import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import Metadata from '../components/metadata/metadata';
import ProgramTemplate from '../components/program/program';

const ProgramPage = ({ data }) => {
  const {
    markdownRemark: page,
    schedules,
    locations,
    admissionPolicy,
  } = data;
  const { frontmatter: metadata } = page;
  const { program } = metadata;
  const upcomingDates = schedules.childrenSchedulesJson.find(s => s.program === program);

  return (
    <Layout>
      <Metadata pageData={metadata} />
      <ProgramTemplate
        program={program}
        title={metadata.title}
        intro={metadata.intro}
        nav={metadata.nav}
        opportunities={metadata.opportunities}
        schedule={metadata.schedule}
        upcomingDates={upcomingDates}
        tuition={metadata.tuition}
        graduation={metadata.graduation}
        cta={metadata.cta}
        locations={locations.edges}
        admissionPolicy={admissionPolicy.frontmatter}
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
        program
        title
        meta_description
        intro {
          image_static
          text
        }
        nav {
          id
          title
        }
        opportunities {
          title
          intro
          places
          text
          disclaimer
        }
        schedule {
          title
          intro
          lesson_plan
          dates {
            title
            intro
          }
        }
        tuition {
          title
          intro
          text
        }
        graduation {
          title
          intro
          steps
          text
        }
        cta {
          title
          intro
          form_header
          form_button
        }
      }
    },
    schedules: file(relativePath: { eq: "schedules.json" }) {
      childrenSchedulesJson {
        program
        daytime
        evening
      }
    },
    locations: allMarkdownRemark(
      filter: { fields: { slug: { regex: "\/locations\/.+\/" }}},
      sort: {fields: [frontmatter___weight]}
    ) {
      edges {
        node {
          frontmatter {
            title
            googleMap
          }
        }
      }
    },
    admissionPolicy: markdownRemark(fields: { slug: { eq: "/admission-policy/" } }) {
      frontmatter {
        title
        policies
      }
    }
  }
`;
