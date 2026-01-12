import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, canonicalUrl, schema }) => {
    const siteTitle = "JH Law Firm | Best Advocate in Hyderabad";
    const defaultDescription = "Expert legal representation in Hyderabad for Civil, Criminal, and Family law cases. Top-rated advocates for Divorce, Bail, and Property disputes.";

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{title ? `${title} | JH Law Firm` : siteTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            {keywords && <meta name="keywords" content={keywords} />}
            <link rel="canonical" href={`https://jhlawfirm.com${canonicalUrl || ''}`} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title || siteTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:url" content={`https://jhlawfirm.com${canonicalUrl || ''}`} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title || siteTitle} />
            <meta name="twitter:description" content={description || defaultDescription} />

            {/* Schema.org JSON-LD */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
