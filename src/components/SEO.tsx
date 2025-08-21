import Head from 'next/head';
import { SEOProps } from '@/types/content';

interface SEOComponentProps extends SEOProps {
  children?: React.ReactNode;
}

export default function SEO({ 
  title, 
  description = "Personal portfolio of a passionate developer creating meaningful digital experiences",
  ogImage,
  canonical,
  children 
}: SEOComponentProps) {
  const siteUrl = 'https://username.github.io/my-portfolio';
  const fullTitle = title.includes('Your Name') ? title : `${title} - Your Name`;
  const canonicalUrl = canonical || siteUrl;
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Your Name",
    "jobTitle": "Software Developer",
    "description": "Passionate developer creating meaningful digital experiences",
    "url": siteUrl,
    "sameAs": [
      "https://github.com/username",
      "https://linkedin.com/in/username"
    ]
  };

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      {ogImage && <meta property="og:image" content={`${siteUrl}${ogImage}`} />}
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      {ogImage && <meta property="twitter:image" content={`${siteUrl}${ogImage}`} />}
      
      {/* Favicon */}
      <link rel="icon" href="/my-portfolio/favicon.ico" />
      
      {/* Preload fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link 
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" 
        rel="stylesheet" 
      />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      
      {children}
    </Head>
  );
}