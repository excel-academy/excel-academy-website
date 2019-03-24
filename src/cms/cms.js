import React from 'react';
import CMS from 'netlify-cms';
import CSSInjector from './css-injector';
import HomePreview from './home-preview';
import ProgramPreview from './program-preview';
import AdmissionPolicyPreview from './admission-policy-preview';

// CMS.registerPreviewStyle('/styles.css');
CMS.registerPreviewTemplate('home', props => (
  <CSSInjector>
    <HomePreview {...props} />
  </CSSInjector>
));
CMS.registerPreviewTemplate('programs', props => (
  <CSSInjector>
    <ProgramPreview {...props} />
  </CSSInjector>
));
CMS.registerPreviewTemplate('admission-policy', props => (
  <CSSInjector>
    <AdmissionPolicyPreview {...props} />
  </CSSInjector>
));
