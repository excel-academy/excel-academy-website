import React from 'react';
import PropTypes from 'prop-types';
import AdmissionPolicy from '../components/admission-policy/admission-policy';

const AdmissionPolicyPreview = ({ entry }) => {
  const entryPolicies = entry.getIn(['data', 'policies']);
  const policies = entryPolicies ? entryPolicies.toJS() : [];

  return (
    <AdmissionPolicy
      title={entry.getIn(['data', 'title'])}
      policies={policies}
    />
  );
};

AdmissionPolicyPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }).isRequired,
};

export default AdmissionPolicyPreview;
