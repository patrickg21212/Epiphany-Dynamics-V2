import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Epiphany Dynamics | Work, Reimagined',
  description = 'Industry-leading generative and traditional AI solutions.',
  canonical,
  image = 'https://epiphanydynamics.com/og-image.jpg',
}) => {
  const fullTitle = title.includes('Epiphany Dynamics')
    ? title
    : `${title} | Epiphany Dynamics`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
