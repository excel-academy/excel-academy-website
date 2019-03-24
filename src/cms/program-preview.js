import React from 'react';
import PropTypes from 'prop-types';
import { ProgramTemplate } from '../templates/program';

const ProgramPreview = ({ entry }) => {
  const entryNav = entry.getIn(['data', 'nav']);
  const nav = entryNav ? entryNav.toJS() : [];
  const entryPlaces = entry.getIn(['data', 'opportunities', 'places']);
  const places = entryPlaces ? entryPlaces.toJS() : [];
  const entrySteps = entry.getIn(['data', 'graduation', 'steps']);
  const steps = entrySteps ? entrySteps.toJS() : [];

  return (
    <ProgramTemplate
      title={entry.getIn(['data', 'title'])}
      intro={{
        text: entry.getIn(['data', 'intro', 'text']),
        image_static: entry.getIn(['data', 'intro', 'image_static']),
      }}
      nav={nav}
      opportunities={{
        title: entry.getIn(['data', 'opportunities', 'title']),
        intro: entry.getIn(['data', 'opportunities', 'intro']),
        disclaimer: entry.getIn(['data', 'opportunities', 'disclaimer']),
        text: entry.getIn(['data', 'opportunities', 'text']),
        places,
      }}
      schedule={{
        title: entry.getIn(['data', 'schedule', 'title']),
        intro: entry.getIn(['data', 'schedule', 'intro']),
        lesson_plan: entry.getIn(['data', 'schedule', 'lesson_plan']),
        dates: {
          title: entry.getIn(['data', 'schedule', 'dates', 'title']),
          intro: entry.getIn(['data', 'schedule', 'dates', 'intro']),
        },
      }}
      tuition={{
        title: entry.getIn(['data', 'tuition', 'title']),
        intro: entry.getIn(['data', 'tuition', 'intro']),
        text: entry.getIn(['data', 'tuition', 'text']),
      }}
      graduation={{
        title: entry.getIn(['data', 'graduation', 'title']),
        intro: entry.getIn(['data', 'graduation', 'intro']),
        text: entry.getIn(['data', 'graduation', 'text']),
        steps,
      }}
      cta={{
        title: entry.getIn(['data', 'cta', 'title']),
        intro: entry.getIn(['data', 'cta', 'intro']),
        form_header: entry.getIn(['data', 'cta', 'form_header']),
        form_button: entry.getIn(['data', 'cta', 'form_button']),
      }}
      upcomingDates={{
        daytime: [],
        evening: [],
      }}
      locations={[]}
      program={entry.getIn(['data', 'program'])}
    />
  );
};

ProgramPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }).isRequired,
};

export default ProgramPreview;
