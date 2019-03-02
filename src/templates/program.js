import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import {
  Flex, Box, Text, Card, Link,
} from 'rebass';
import {
  FaCheck, FaBriefcaseMedical, FaRegCalendar, FaDollarSign, FaGraduationCap,
} from 'react-icons/fa';
import Layout from '../components/layout/layout';
import Metadata from '../components/metadata/metadata';
import TitleIntro from '../components/title-intro/title-intro';
import MaxWidthBox from '../components/max-width-box/max-width-box-css';
import UpcomingDate from '../components/upcoming-date/upcoming-date';
import { HTMLContent } from '../components/content/content';
import theme from '../theme';

export const ProgramTemplate = ({
  title, description, image, intro, nav, opportunities, schedule, upcomingDates, tuition, graduation, cta, locations, admissionPolicy,
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
      px={{ sm: 1, tablet: 3 }}
      py={3}
    >
      <Box
        width={{ mobile: 1.65 / 3 }}
        pr={1}
      >
        <Text as="h1" color="theme">{title}</Text>
        <p>{intro.text}</p>
        {/* <LinkButton to={intro.cta.url}>{intro.cta.action}</LinkButton> */}
      </Box>
      <Box width={{ mobile: 1.35 / 3 }} pr={{ mobile: 1 }} mb={2}>
        <img src={intro.image_static} alt="" />
      </Box>
    </MaxWidthBox>
    <Box
      as="nav"
      bg="greens.0"
      px={3}
      css={{
        position: 'sticky',
        top: 0,
        bottom: 0,
        zIndex: 11,
      }}
    >
      <Box
        as="ul"
        p={0}
        m={0}
        css={{
          display: 'flex',
          listStyle: 'none',
          justifyContent: 'space-between',
        }}
      >
        {nav.map(({ id, title }) => (
          <li key={id}>
            <Link
              href={`#${id}`}
              color="greens.1"
              fontSize={2}
              py="1em"
              css={{
                textDecoration: 'none',
                textTransform: 'uppercase',
                display: 'inline-block',
                '&:hover': {
                  color: theme.colors.theme,
                },
              }}
            >
              {title}
            </Link>
          </li>
        ))}
      </Box>
    </Box>
    <MaxWidthBox
      maxWidth={2}
      p={{ sm: 1, tablet: 3 }}
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
        <Text as="p">{opportunities.text}</Text>
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
          }
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
              <Text as="p" mb="1rem">Four week duration from 8AM-2PM Monday-Friday.</Text>
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
              <Text as="p" mb="1rem">Five week duration from 4:30-9:30PM Monday-Thursday.</Text>
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
              <Text as="p" mb="1rem">Nine week duration from 8AM-2PM Saturday-Sunday.</Text>
              <Text as="p" mb="1rem">New classes begin every Saturday, call for details.</Text>
              <p>(203) 691-7989</p>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </MaxWidthBox>
    <MaxWidthBox
      maxWidth={2}
      p={{ sm: 1, tablet: 3 }}
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
      p={{ sm: 1, tablet: 3 }}
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
                content: 'counter(grad-counter)',
                color: `${theme.colors.theme}`,
                fontSize: '1.6rem',
                fontWeight: 'bold',
                position: 'absolute',
                left: 'calc(-1 * var(--size) - 10px)',
                lineHeight: 'calc(var(--size) - 5px)',
                width: 'var(--size)',
                height: 'var(--size)',
                top: '-5px',
                border: `solid 5px ${theme.colors.theme}`,
                borderRadius: '50%',
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
        <Text as="p">{graduation.text}</Text>
      </Box>
    </MaxWidthBox>
    <MaxWidthBox
      maxWidth={2}
      p={{ sm: 1, tablet: 3 }}
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
            <Text as="h5" textAlign={{ tablet: 'center' }} color="#3d424f">
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
      <Box width={{ mobile: 5 / 12 }}>
        <h4>{cta.form_header}</h4>
        <form
          name="open-house"
          method="POST"
          data-netlify="true"
          css={{
            'input:not([type=submit])': {
              backgroundColor: '#ffffff',
              color: '#000',
            },
          }}
        >
          <input type="text" name="name" id="name" placeholder="Name" />
          <input type="email" name="email" id="email" placeholder="Email" />
          <input type="submit" value={cta.form_button} />
        </form>
      </Box>
    </MaxWidthBox>
    <MaxWidthBox
      maxWidth={2}
      p={{ sm: 1, tablet: 2 }}
      bg="#eeeeee"
      color="#777777"
      css={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      <Box width={{ tablet: 6 / 12 }} fontSize="0.7em">
        <Text as="h3" mb={1}>
          {admissionPolicy.title}
        </Text>
        <Box
          as="ul"
          pl="1em"
          m={0}
        >
          {admissionPolicy.policies.map(policy => (
            <li key={policy}>{policy}</li>
          ))}
        </Box>
      </Box>
    </MaxWidthBox>
  </>
);

const ProgramPage = ({ data }) => {
  const { markdownRemark: page, schedules, locations, admissionPolicy } = data;
  const { frontmatter: metadata } = page;
  const { program } = metadata;
  const upcomingDates = schedules.childrenSchedulesJson.find(s => s.program === program);

  return (
    <Layout>
      <Metadata pageData={metadata} />
      <ProgramTemplate
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
