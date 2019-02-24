import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
// import { Heading } from 'rebass';
// import { rgba } from 'polished';
// import { themeColor } from '../../site-config';
import { Flex, Box, Text } from 'rebass';
import { FaCheck } from 'react-icons/fa';
import Layout from '../components/layout/layout';
import Metadata from '../components/metadata/metadata';
import MaxWidthBox from '../components/max-width-box/max-width-box-css';
import LinkButton from '../components/link-button/link-button-css';
import logo from '../images/Excel-Academy-logo.jpg';
import theme from '../theme';

export const HomeTemplate = ({
  title, description, image, intro, programs, programsHeadline, benefitsblock,
}) => (
  <>
    <MaxWidthBox
      css={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      maxWidth={2}
      px={{ sm: 1, tablet: 3 }}
      py={3}
    >
      {/* <Box width={{ tablet: 1 / 2 }} mr={{ tablet: }}> */}
      {/* <Box width={{ sm: 1, tablet: 'auto' }}> */}
      <Box width={{ tablet: 1.35 / 3 }} pr={{ tablet: 1 }} mb={2}>
        <img src={logo} alt="Excel Academy - A DanielCare Affiliate" />
      </Box>
      <Box
        width={{ tablet: 1.65 / 3 }}
        css={{
          textAlign: 'center',
        }}
      >
        <h1>{intro.headline}</h1>
        <LinkButton to={intro.cta.url}>{intro.cta.action}</LinkButton>
      </Box>
    </MaxWidthBox>
    <MaxWidthBox
      maxWidth={2}
      p={{ sm: 1, tablet: 3 }}
      bg="theme"
      color="white"
      id="programs"
    >
      <Text as="h2" textAlign={{ tablet: 'center' }} mb={2}>
        {programsHeadline}
      </Text>
      <Box
        css={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {programs.map(({ node }) => (
          <Box
            width={{ tablet: 1 / 3 }}
            pl={{ tablet: 1 }}
            mb={2}
            key={node.frontmatter.program}
            css={{
              '&:first-child': {
                paddingLeft: 0,
              },
            }}
          >
            <h3>{node.frontmatter.navtitle || node.frontmatter.title}</h3>
            <p>{node.frontmatter.home_description}</p>
            <LinkButton to={node.fields.slug}>Learn more</LinkButton>
          </Box>
        ))}
      </Box>
    </MaxWidthBox>
    <MaxWidthBox
      maxWidth={2}
      p={{ sm: 1, tablet: 3 }}
      bg="purples.0"
      color="white"
      css={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}
    >
      <Box width={{ tablet: 5 / 12 }} mb={2}>
        <Text as="h2">
          {benefitsblock.headline}
        </Text>
        <Text>{benefitsblock.description}</Text>
      </Box>
      <Box width={{ sm: 1, tablet: 6.5 / 12 }}>
        <Box
          as="ul"
          css={{
            columnCount: 2,
            listStyleType: 'none',
          }}
          p={0}
          m={0}
        >
          {benefitsblock.benefits.map(benefit => (
            <Box
              as="li"
              key={benefit}
              css={{
                breakInside: 'avoid-column',
                pageBreakInside: 'avoid',
                position: 'relative',
              }}
              pl={1}
              mb={1}
            >
              <FaCheck
                color={theme.colors.theme}
                size="1.5em"
                css={{
                  position: 'absolute',
                  left: 0,
                }}
              />
              <span>{benefit}</span>
            </Box>
          ))}
        </Box>
      </Box>
    </MaxWidthBox>
  </>
);

const IndexPage = ({ data }) => {
  const { markdownRemark: page, logo, programs } = data;
  const { frontmatter: metadata } = page;

  return (
    <Layout>
      <Metadata pageData={metadata} />
      <HomeTemplate
        title={metadata.title}
        content={page.htmlAst}
        image={logo.childImageSharp.fluid}
        intro={metadata.intro}
        programsHeadline={metadata.programs_headline}
        programs={programs.edges}
        benefitsblock={metadata.benefitsblock}
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
          image
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
      }
    },
    logo: file(relativePath: { eq: "Excel-Academy-logo.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid_withWebp
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
  }
`;
