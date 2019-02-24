/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs';
import Header from './header';

addDecorator(withKnobs);
storiesOf('Header', module).add('default', () => {
  const title = text('Site title', 'Gatsby demo');
  return (
    <Header siteTitle={title} />
  );
});
