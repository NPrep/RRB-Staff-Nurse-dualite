import React from 'react';
import Head from 'next/head';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  type?: string;
  schema?: Record<string, any> | Record<string, any>[];
}

export default function SEOHead({ 
  title, 
  description, 
  canonicalUrl,
  type = 'website',
  schema
}: SEOHeadProps) {
  const siteUrl = 'https://rrbstaffnurse.in';
  const { pathname } = useLocation();
  const fullUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : `${siteUrl}${pathname}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />
      
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Head>
  );
}
