import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Flex, Box, Text } from 'rebass';
import { FaCheck } from 'react-icons/fa';
// import { Heading } from 'rebass';
// import { rgba } from 'polished';
// import { themeColor } from '../../site-config';
import Layout from '../components/layout/layout';
import Metadata from '../components/metadata/metadata';
import LargeText from '../components/large-text/large-text-css';
import MaxWidthBox from '../components/max-width-box/max-width-box-css';
import { HTMLContent } from '../components/content/content';
import theme from '../theme';

export const ProgramTemplate = ({
  title, description, image, intro, opportunities, schedule,
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
      bg="white"
    >
      <Box
        width={{ mobile: 1.65 / 3 }}
      >
        <h1>{title}</h1>
        <p>{intro.text}</p>
        {/* <LinkButton to={intro.cta.url}>{intro.cta.action}</LinkButton> */}
      </Box>
      <Box width={{ mobile: 1.35 / 3 }} pr={{ mobile: 1 }} mb={2}>
        <img src={intro.image_static} alt="" />
      </Box>
    </MaxWidthBox>
    <nav class="page-nav">
      <ul>
        <li><a href="#opportunities">Career opportunities</a></li>
        <li><a href="#schedules">Class schedule</a></li>
        <li><a href="#tuition">Tuition</a></li>
        <li><a href="#graduation">Graduation</a></li>
        <li><a href="#start">Start a career</a></li>
      </ul>
    </nav>
    <MaxWidthBox
      maxWidth={2}
      p={{ sm: 1, tablet: 3 }}
      css={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        width={{ tablet: 10 / 12 }}
        css={{
          textAlign: 'center',
        }}
      >
        <Text as="h1" mb={2}>
          {opportunities.title}
        </Text>
        <LargeText as="p">{opportunities.intro}</LargeText>
      </Box>
      <Box
        as="ul"
        css={{
          listStyleType: 'none',
        }}
        p={0}
        m={0}
      >
        {opportunities.places.map(place => (
          <Box
            as="li"
            key={place}
            css={{
              position: 'relative',
            }}
            pl={2}
            mb={1}
          >
            <FaCheck
              color={theme.colors.theme}
              size="1.8em"
              css={{
                position: 'absolute',
                left: 0,
              }}
            />
            <span>{place}</span>
          </Box>
        ))}
      </Box>
      <Box width={{ mobile: 8 / 12 }}>
        <Text as="p">{opportunities.content}</Text>
        <Text as="p" fontSize={0} bg="#eee" color="#999" p="1em">{opportunities.disclaimer}</Text>
      </Box>
    </MaxWidthBox>
    <MaxWidthBox
      maxWidth={2}
      px={{ sm: 1, tablet: 3 }}
      py={3}
      css={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        width={{ tablet: 10 / 12 }}
        css={{
          textAlign: 'center',
        }}
      >
        <Text as="h1" mb={2}>
          {schedule.title}
        </Text>
        <LargeText as="p">{schedule.intro}</LargeText>
      </Box>
      <Flex flexWrap="wrap" justifyContent="space-between">
        <Box width={{ mobile: 1 / 2 }} pr={{ mobile: 1 }} mb={2}>
          <h3>Lesson plan</h3>
          <HTMLContent content={schedule.lesson_plan} />
        </Box>
        <Box width={{ mobile: 1 / 2 }}>
          <h3>{schedule.dates.title}</h3>
          <p>{schedule.dates.intro}</p>
        </Box>
      </Flex>
    </MaxWidthBox>
  </>
);

const ProgramPage = ({ data }) => {
  const { markdownRemark: page } = data;
  const { frontmatter: metadata } = page;

  return (
    <Layout>
      <Metadata pageData={page.frontmatter} />
      <ProgramTemplate
        title={page.frontmatter.title}
        intro={metadata.intro}
        opportunities={metadata.opportunities}
        schedule={metadata.schedule}
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
          image_static
          text
        }
        opportunities {
          title
          intro
          places
          content
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
      }
    }
  }
`;
