import React from 'react';
import PropTypes from 'prop-types';
import { HomeTemplate } from '../templates/index';

const HomePreview = ({ entry }) => {
  const entryBenefits = entry.getIn(['data', 'benefitsblock', 'benefits']);
  const benefits = entryBenefits ? entryBenefits.toJS() : [];

  return (
    <HomeTemplate
      intro={{
        headline: entry.getIn(['data', 'intro', 'headline']),
        cta: {
          action: entry.getIn(['data', 'intro', 'cta', 'action']),
          url: entry.getIn(['data', 'intro', 'cta', 'url']),
        },
      }}
      programs={[]}
      programsHeadline={entry.getIn(['data', 'programs_headline'])}
      benefitsblock={{
        headline: entry.getIn(['data', 'benefitsblock', 'headline']),
        description: entry.getIn(['data', 'benefitsblock', 'description']),
        benefits,
      }}
      locations={[]}
      locationsHeadline={entry.getIn(['data', 'locations_headline'])}
      cta={{
        headline: entry.getIn(['data', 'cta', 'headline']),
        description: entry.getIn(['data', 'cta', 'description']),
        image: entry.getIn(['data', 'cta', 'image']),
        form_header: entry.getIn(['data', 'cta', 'form_header']),
        form_button: entry.getIn(['data', 'cta', 'form_button']),
      }}
    />
  );
};

HomePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }).isRequired,
};

export default HomePreview;
