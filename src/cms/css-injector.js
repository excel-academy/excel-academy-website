import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyleSheetManager } from 'styled-components';

// Component used to Enable netlify CMS to apply the styles added through styled-components
const CSSInjector = ({ children }) => {
  const [iframeRef, setIframeRef] = useState('');

  useEffect(() => {
    const iframe = document.querySelector('.nc-previewPane-frame');
    const iframeHeadElem = iframe.contentDocument.head;
    setIframeRef(iframeHeadElem);
  });

  return (
    <div>
      { iframeRef && (
        <StyleSheetManager target={iframeRef}>
          { children }
        </StyleSheetManager>
      )}
    </div>
  );
};

CSSInjector.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default CSSInjector;
