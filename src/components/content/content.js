/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';

export const HTMLContent = ({ content, className, tag }) => {
  const CustomTag = tag;
  return (
    <CustomTag className={className} dangerouslySetInnerHTML={{ __html: content }} />
  );
};

const Content = ({ content, className, tag }) => {
  const CustomTag = tag;
  return (
    <CustomTag className={className}>{content}</CustomTag>
  );
};

Content.propTypes = {
  content: PropTypes.string.isRequired,
  className: PropTypes.string,
  tag: PropTypes.string,
};

Content.defaultProps = {
  tag: 'div',
};

HTMLContent.propTypes = Content.propTypes;
HTMLContent.defaultProps = Content.defaultProps;

export default Content;
