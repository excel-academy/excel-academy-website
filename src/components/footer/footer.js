import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { FaFacebookF, FaEnvelope, FaChevronRight } from 'react-icons/fa';
import { Box, Text } from 'rebass';
import Link from '../gatsby-link/gatsby-link';
import MaxWidthBox from '../max-width-box/max-width-box-css';
import { FooterWrapper, SocialContainer } from './footer-css';

const LinkList = ({ title, links }) => (
  <section className="narrow">
    <h3>{title}</h3>
    <Box
      as="ul"
      css={{
        listStyleType: 'none',
      }}
      p={0}
      m={0}
    >
      {links.map(({ node }) => (
        <Box
          as="li"
          key={node.frontmatter.title}
          css={{
            position: 'relative',
          }}
          pl="1.5em"
          mb="1em"
        >
          <FaChevronRight
            size="0.8em"
            css={{
              position: 'absolute',
              left: 0,
              top: '0.5em',
            }}
          />
          <Link to={node.frontmatter.url || node.fields.slug}>
            <span>{node.frontmatter.title}</span>
          </Link>
        </Box>
      ))}
    </Box>
  </section>
);

LinkList.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    node: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        url: PropTypes.string,
      }).isRequired,
      fields: PropTypes.shape({
        slug: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  })).isRequired,
};

const Footer = ({ programs, locations, company }) => (
  <MaxWidthBox
    as="footer"
    maxWidth={2}
    p={{ sm: 1, tablet: 3 }}
    bg="#3d424f"
    color="#cfd0d3"
  >
    <FooterWrapper>
      <section>
        <h3>Accreditations</h3>
        <p>
          Excel Academy is approved by the Connecticut Office of
          Higher Education and the Connecticut Department of Public Health.
        </p>
        <SocialContainer>
          <li><OutboundLink href="https://www.facebook.com/excelacademyct/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></OutboundLink></li>
          <li><a href={`mailto:${company.email}`} aria-label="Email"><FaEnvelope /></a></li>
        </SocialContainer>
      </section>
      <LinkList title="Programs" links={programs} />
      <LinkList title="Locations" links={locations} />
      <section>
        <h3>Call today</h3>
        <p>
          We are ready to help with your enrollment process or answer any questions you may have.
        </p>
        <p><a href="tel:203-691-7989" className="major">(203) 691-7989</a></p>
      </section>
    </FooterWrapper>
    <Text textAlign={{ tablet: 'center' }} fontSize="0.9em">
      &copy;&nbsp;
      {company.legalName}
      . All rights reserved.
    </Text>
  </MaxWidthBox>
);

Footer.propTypes = {
  programs: PropTypes.arrayOf(PropTypes.object).isRequired,
  locations: PropTypes.arrayOf(PropTypes.object).isRequired,
  company: PropTypes.shape({
    legalName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

const FooterWithQuery = props => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        site {
          siteMetadata {
            company {
              legalName
              email
            }
          }
        }
        programs: allMarkdownRemark(
          filter: { fields: { slug: { regex: "\/programs\/.+\/" }}},
          sort: {fields: [frontmatter___weight]}
        ) {
          edges {
            node {
              frontmatter {
                title
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
                url
              }
              fields {
                slug
              }
            }
          }
        },
      }
    `}
    render={data => (
      <Footer
        programs={data.programs.edges}
        locations={data.locations.edges}
        company={data.site.siteMetadata.company}
        {...props}
      />
    )}
  />
);

export default FooterWithQuery;
