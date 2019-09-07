import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import {
  Flex, Box, Text, Card,
} from 'rebass/styled-components';
import {
  FaCheck, FaBriefcaseMedical, FaRegCalendar, FaDollarSign, FaGraduationCap,
} from 'react-icons/fa';
import Layout from '../components/layout/layout';
import Metadata from '../components/metadata/metadata';
import TitleIntro from '../components/title-intro/title-intro';
import MaxWidthBox from '../components/max-width-box/max-width-box-css';
import UpcomingDate from '../components/upcoming-date/upcoming-date';
import { HTMLContent } from '../components/content/content';
import PageNavBar from '../components/page-nav-bar/page-nav-bar';
import FormOpenHouse from '../components/form-open-house/form-open-house';
import AdmissionPolicy from '../components/admission-policy/admission-policy';
import theme from '../theme';

export const ProgramTemplate = ({
  title, intro, nav, opportunities, schedule, upcomingDates,
  tuition, graduation, cta, locations, admissionPolicy, program,
}) => (
  <>
    <MaxWidthBox
      css={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
      maxWidth={2}
      px={{ _: 1, tablet: 3 }}
      py={{ _: 5, tablet: 3 }}
    >
      <Box
        width={{ mobile: 1.65 / 3 }}
        pr={1}
      >
        <Text as="h1" color="theme" mb="default">{title}</Text>
        <p>{intro.text}</p>
        {/* <LinkButton to={intro.cta.url}>{intro.cta.action}</LinkButton> */}
      </Box>
      <Box width={{ mobile: 1.35 / 3 }} pr={{ mobile: 1 }} mb={2}>
        <img src={intro.image_static} alt="" />
      </Box>
    </MaxWidthBox>
    <PageNavBar navItems={nav} />
    <MaxWidthBox
      maxWidth={2}
      p={{ _: 1, tablet: 3 }}
      css={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      id="opportunities"
    >
      <TitleIntro
        title={opportunities.title}
        intro={opportunities.intro}
        icon={<FaBriefcaseMedical />}
      />
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
        <Text as="p" mb={1}>{opportunities.text}</Text>
        <Text as="p" fontSize={0} bg="#eee" color="#999" p="1em" mb={1}>{opportunities.disclaimer}</Text>
      </Box>
    </MaxWidthBox>
    <MaxWidthBox
      maxWidth={2}
      px={{ _: 1, tablet: 3 }}
      py={3}
      css={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      bg="purples.2"
      id="schedules"
    >
      <TitleIntro
        title={schedule.title}
        intro={schedule.intro}
        icon={<FaRegCalendar />}
      />
      <Flex
        flexWrap="wrap"
        justifyContent="space-between"
        fontSize={2}
        css={{
          'tbody td': {
            backgroundColor: 'rgba(251, 251, 253, 1)',
          },
        }}
      >
        <Card
          width={{ desktop: 1 / 2 }}
          pr={{ desktop: 1 }}
          mb={2}
          borderRight={{ desktop: 'solid 1px #ebebeb' }}
        >
          <Text as="h3" m={0} fontSize={3}>Lesson plan</Text>
          <HTMLContent content={schedule.lesson_plan} />
        </Card>
        <Box width={{ desktop: 1 / 2 }} pl={{ desktop: 1 }}>
          <Text as="h3" m={0} fontSize={3}>{schedule.dates.title}</Text>
          <p>{schedule.dates.intro}</p>
          <Flex flexWrap="wrap" justifyContent="space-between">
            <Box fontSize={1} width="31%">
              <Text as="h4" color="theme" fontSize={1} m={0}>Daytime sessions</Text>
              <Text as="p" mb="default">Four week duration from 8AM-2PM Monday-Friday.</Text>
              <Box
                as="ul"
                css={{
                  listStyleType: 'none',
                }}
                p={0}
                m={0}
              >
                {upcomingDates.daytime.map(date => <UpcomingDate key={date} date={date} />)}
              </Box>
            </Box>
            <Box fontSize={1} width="31%">
              <Text as="h4" color="theme" fontSize={1} m={0}>Evening sessions</Text>
              <Text as="p" mb="default">Five week duration from 4:30-9:30PM Monday-Thursday.</Text>
              <Box
                as="ul"
                css={{
                  listStyleType: 'none',
                }}
                p={0}
                m={0}
              >
                {upcomingDates.evening.map(date => <UpcomingDate key={date} date={date} />)}
              </Box>
            </Box>
            <Box fontSize={1} width="31%">
              <Text as="h4" color="theme" fontSize={1} m={0}>Weekend sessions</Text>
              <Text as="p" mb="default">Nine week duration from 8AM-2PM Saturday-Sunday.</Text>
              <Text as="p" mb="default">New classes begin every Saturday, call for details.</Text>
              <p>(203) 691-7989</p>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </MaxWidthBox>
    <MaxWidthBox
      maxWidth={2}
      p={{ _: 1, tablet: 3 }}
      css={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      id="tuition"
    >
      <TitleIntro
        title={tuition.title}
        intro={tuition.intro}
        icon={<FaDollarSign />}
      />
      <Box width={{ mobile: 7 / 12 }}>
        <HTMLContent content={tuition.text} />
      </Box>
    </MaxWidthBox>
    <MaxWidthBox
      maxWidth={2}
      p={{ _: 1, tablet: 3 }}
      css={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      bg="purples.2"
      id="graduation"
    >
      <TitleIntro
        title={graduation.title}
        intro={graduation.intro}
        cols={7}
        icon={<FaGraduationCap size="1.2em" />}
      />
      <Box
        as="ol"
        css={{
          listStyleType: 'none',
          counterReset: 'grad-counter',
          paddingLeft: '2em',
        }}
        p={0}
        m={0}
      >
        {graduation.steps.map(step => (
          <Box
            as="li"
            key={step}
            css={{
              position: 'relative',
              counterIncrement: 'grad-counter',
              padding: '0 0 1em 1em',
              '--size': '50px',
              lineHeight: 'var(--size)',
              '&:before': {
                position: 'absolute',
                top: '-5px',
                left: 'calc(-1 * var(--size) - 10px)',
                width: 'var(--size)',
                height: 'var(--size)',
                border: `solid 5px ${theme.colors.theme}`,
                borderRadius: '50%',
                color: `${theme.colors.theme}`,
                content: 'counter(grad-counter)',
                fontSize: '1.6rem',
                fontWeight: 'bold',
                lineHeight: 'calc(var(--size) - 5px)',
                textAlign: 'center',
              },
            }}
            mb="1em"
          >
            <span>{step}</span>
          </Box>
        ))}
      </Box>
      <Box width={{ mobile: 8 / 12 }}>
        <Text as="p" mb={1}>{graduation.text}</Text>
      </Box>
    </MaxWidthBox>
    <MaxWidthBox
      maxWidth={2}
      p={{ _: 1, tablet: 3 }}
      bg="theme"
      color="white"
      css={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      id="start"
    >
      <TitleIntro
        title={cta.title}
        intro={cta.intro}
        cols={7}
        titleColor="#ffffff"
      />
      <Box
        css={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
        id="locations"
      >
        {locations.map(({ node }) => (
          <Box
            width={{ tablet: '31%' }}
            mb={2}
            key={node.frontmatter.title}
          >
            <Text as="h5" textAlign={{ tablet: 'center' }} color="#3d424f" mb="default">
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
          </Box>
        ))}
      </Box>
      <Box width={{ _: 1, tablet: 5 / 12 }}>
        <Text as="h4" mb="default">{cta.form_header}</Text>
        <FormOpenHouse buttonText={cta.form_button} program={program} />
      </Box>
    </MaxWidthBox>
    {admissionPolicy && (
      <AdmissionPolicy
        title={admissionPolicy.title}
        policies={admissionPolicy.policies}
      />
    )}
  </>
);

ProgramTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  intro: PropTypes.shape({
    text: PropTypes.string.isRequired,
    image_static: PropTypes.string.isRequired,
  }).isRequired,
  nav: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
  opportunities: PropTypes.shape({
    title: PropTypes.string.isRequired,
    intro: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    disclaimer: PropTypes.string.isRequired,
    places: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  schedule: PropTypes.shape({
    title: PropTypes.string.isRequired,
    intro: PropTypes.string.isRequired,
    lesson_plan: PropTypes.string.isRequired,
    dates: PropTypes.shape({
      title: PropTypes.string.isRequired,
      intro: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  tuition: PropTypes.shape({
    title: PropTypes.string.isRequired,
    intro: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  graduation: PropTypes.shape({
    title: PropTypes.string.isRequired,
    intro: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    steps: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  cta: PropTypes.shape({
    title: PropTypes.string.isRequired,
    intro: PropTypes.string.isRequired,
    form_header: PropTypes.string.isRequired,
    form_button: PropTypes.string.isRequired,
  }).isRequired,
  locations: PropTypes.arrayOf(PropTypes.object).isRequired,
  upcomingDates: PropTypes.shape({
    daytime: PropTypes.arrayOf(PropTypes.string).isRequired,
    evening: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  admissionPolicy: PropTypes.shape({
    title: PropTypes.string.isRequired,
    policies: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
  program: PropTypes.string.isRequired,
};

ProgramTemplate.defaultProps = {
  admissionPolicy: null,
};

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
