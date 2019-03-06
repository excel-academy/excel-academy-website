import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import urljoin from 'url-join';
import { Location } from '@reach/router';
import config from '../../../site-config';

const Metadata = ({ pageData, location }) => {
  const siteURL = urljoin(config.siteUrl, config.pathPrefix || '');
  const title = pageData ? pageData.title : config.siteTitle;
  const isHome = location.pathname === '/';
  const browsertitle = pageData && !isHome
    ? `${pageData.browsertitle || pageData.title} - ${config.siteTitle}` : config.siteTitle;
  const description = pageData && pageData.meta_description;
  const canonicalUrl = urljoin(siteURL, location.pathname || '');
  let image = pageData && pageData.image;
  if (image) {
    image = urljoin(siteURL, image);
  }

  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': config.company.type,
      '@id': config.siteUrl,
      additionalType: config.company.additionalType,
      address: {
        '@type': 'PostalAddress',
        addressCountry: config.company.address.country,
        addressRegion: config.company.address.region,
        postalCode: config.company.address.postalCode,
        streetAddress: config.company.address.streetAddress,
      },
      url: siteURL,
      name: config.company.name,
      legalName: config.company.legalName,
      alternateName: config.company.alternateNames,
      description: config.company.description,
      email: config.company.email,
      sameAs: config.company.sameAs,
      telephone: config.company.telephone,
    },
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: siteURL,
      name: config.siteTitle,
      description: config.siteDescription,
    },
    {
      '@context': 'http://schema.org',
      '@type': 'WebPage',
      url: canonicalUrl,
      name: title,
      description,
    },
  ];

  return (
    <Helmet
      title={browsertitle}
      htmlAttributes={{
        lang: 'en',
      }}
    >
      {/* General tags */}
      {description && <meta name="description" content={description} />}
      {image && <meta name="image" content={image} />}

      {/* OpenGraph tags */}
      <meta property="og:site_name" content={config.siteTitle} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={image} />}

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:url" content={canonicalUrl} />
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image} />}

      {/* Schema.org tags */}
      {/* this will not get overridden by Helmet when nested so it will output more than once. */}
      {/* to counter we check for pageData as that is only set once */}
      {pageData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script>
      )}
    </Helmet>
  );
};

Metadata.propTypes = {
  pageData: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    browsertitle: PropTypes.string,
    image: PropTypes.string,
  }),
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

Metadata.defaultProps = {
  pageData: null,
};

const MetadataWithLocation = props => (
  <Location>
    {({ location }) => (
      <Metadata {...props} location={location} />
    )}
  </Location>
);

export default MetadataWithLocation;
