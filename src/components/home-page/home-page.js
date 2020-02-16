import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text, Flex } from 'rebass/styled-components';
import { FaCheck } from 'react-icons/fa';
import MaxWidthBox from '../max-width-box/max-width-box-css';
import LinkButton from '../link-button/link-button-css';
import FormOpenHouse from '../form-open-house/form-open-house';
import { CircleImageBanner } from '../banner';
import logo from '../../images/Excel-Academy-logo.jpg';
import theme from '../../theme';

const HomeTemplate = ({
  intro, programs, programsHeadline, benefitsblock, locationsHeadline, locations, cta,
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
      px={{ _: 1, tablet: 3 }}
      py={3}
      bg="white"
    >
      <Box width={{ mobile: 1.35 / 3 }} pr={{ mobile: 1 }} mb={2}>
        <img src={logo} alt="Excel Academy - A DanielCare Affiliate" />
      </Box>
      <Box
        width={{ mobile: 1.65 / 3 }}
        css={{
          textAlign: 'center',
        }}
      >
        <Text as="h1" mb="default">{intro.headline}</Text>
        <LinkButton to={intro.cta.url}>{intro.cta.action}</LinkButton>
      </Box>
    </MaxWidthBox>
    <MaxWidthBox
      maxWidth={2}
      p={{ _: 1, tablet: 3 }}
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
            <Text as="h3" mb="default">{node.frontmatter.navtitle || node.frontmatter.title}</Text>
            <p>{node.frontmatter.home_description}</p>
            <LinkButton to={node.fields.slug}>View program</LinkButton>
          </Box>
        ))}
      </Box>
    </MaxWidthBox>
    <MaxWidthBox
      maxWidth={2}
      p={{ _: 1, tablet: 3 }}
      bg="purples.0"
      color="white"
      css={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}
    >
      <Box width={{ tablet: 5 / 12 }} mb={2}>
        <Text as="h2" mb="default">
          {benefitsblock.headline}
        </Text>
        <Text>{benefitsblock.description}</Text>
      </Box>
      <Box width={{ _: 1, tablet: 6.5 / 12 }}>
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
      p={{ _: 1, tablet: 3 }}
      bg="purples.1"
      color="white"
      id="locations"
    >
      <Text as="h2" textAlign={{ tablet: 'center' }} mb={2}>
        {locationsHeadline}
      </Text>
      <Flex flexWrap="wrap" justifyContent="space-between">
        {locations.map(({ node }) => (
          <Flex
            flexDirection="column"
            width={{ tablet: '31%' }}
            mb={2}
            key={node.frontmatter.title}
          >
            <Text as="h5" textAlign={{ tablet: 'center' }} mb="default">
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
            <Text
              bg="purples.0"
              p={1}
              fontSize={1}
              textAlign="center"
              css={{
                flex: 1,
              }}
            >
              {node.frontmatter.address}
              <br />
              {node.frontmatter.city}
              ,&nbsp;
              {node.frontmatter.state}
              &nbsp;
              {node.frontmatter.zip}
            </Text>
          </Flex>
        ))}
      </Flex>
    </MaxWidthBox>
    <MaxWidthBox maxWidth={2} id="start">
      <CircleImageBanner
        image={cta.image.childImageSharp.fluid}
        imagedesc="nurse"
        orient="right"
        p={{ _: 1, tablet: 3 }}
      >
        <Text as="h3" mb="default">{cta.headline}</Text>
        <p>{cta.description}</p>
        <Text as="h4" mb="default">{cta.form_header}</Text>
        <FormOpenHouse buttonText={cta.form_button} />
      </CircleImageBanner>
    </MaxWidthBox>
  </>
);

HomeTemplate.propTypes = {
  intro: PropTypes.shape({
    headline: PropTypes.string.isRequired,
    cta: PropTypes.shape({
      action: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  programs: PropTypes.arrayOf(PropTypes.object).isRequired,
  programsHeadline: PropTypes.string.isRequired,
  benefitsblock: PropTypes.shape({
    headline: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    benefits: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  locationsHeadline: PropTypes.string.isRequired,
  locations: PropTypes.arrayOf(PropTypes.object).isRequired,
  cta: PropTypes.shape({
    headline: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
    description: PropTypes.string.isRequired,
    form_header: PropTypes.string.isRequired,
    form_button: PropTypes.string.isRequired,
  }).isRequired,
};

export default HomeTemplate;
