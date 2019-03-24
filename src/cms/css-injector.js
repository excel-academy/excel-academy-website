import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheetManager } from 'styled-components';

// Component used to Enable netlify CMS to apply the styles added through styled-components
class CSSInjector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      iframeRef: '',
    };
  }

  componentDidMount() {
    const iframe = document.querySelector('.nc-previewPane-frame');
    const iframeHeadElem = iframe.contentDocument.head;
    this.setState({ iframeRef: iframeHeadElem });
  }

  render() {
    const { iframeRef } = this.state;
    const { children } = this.props;
    return (
      <div>
        { iframeRef && (
          <StyleSheetManager target={iframeRef}>
            { children }
          </StyleSheetManager>
        )}
      </div>
    );
  }
}

CSSInjector.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default CSSInjector;
