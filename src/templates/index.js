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
  intro, programs, programsHeadline, benefitsblock, locationsHeadline, locations,
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
      <Box width={{ mobile: 1.35 / 3 }} pr={{ mobile: 1 }} mb={2}>
        <img src={logo} alt="Excel Academy - A DanielCare Affiliate" />
      </Box>
      <Box
        width={{ mobile: 1.65 / 3 }}
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
          justifyContent: 'space-between',
        }}
      >
        {programs.map(({ node }) => (
          <Box
            width={{ tablet: '31%' }}
            mb={2}
            key={node.frontmatter.program}
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
    <MaxWidthBox
      maxWidth={2}
      p={{ sm: 1, tablet: 3 }}
      bg="purples.1"
      color="white"
      id="locations"
    >
      <Text as="h2" textAlign={{ tablet: 'center' }} mb={2}>
        {locationsHeadline}
      </Text>
      <Box
        css={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        {locations.map(({ node }) => (
          <Box
            width={{ tablet: '31%' }}
            mb={2}
            key={node.frontmatter.program}
          >
            <Text as="h5" textAlign={{ tablet: 'center' }}>
              {node.frontmatter.title}
            </Text>
            <iframe
              title={node.frontmatter.title}
              src={node.frontmatter.googleMap}
              width="100%"
              height="150"
              frameBorder="0"
              allowFullScreen
            />
            <Text bg="purples.0" p={1} fontSize={1} textAlign="center">
              {node.frontmatter.address}
              <br />
              {node.frontmatter.city}
              ,&nbsp;
              {node.frontmatter.state}
              &nbsp;
              {node.frontmatter.zip}
            </Text>
          </Box>
        ))}
      </Box>
    </MaxWidthBox>
  </>
);

const IndexPage = ({ data }) => {
  const { markdownRemark: page, logo, programs, locations } = data;
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
        locationsHeadline={metadata.locations_headline}
        locations={locations.edges}
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
        locations_headline
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
