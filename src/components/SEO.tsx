import React from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  keywords?: string;
  noindex?: boolean;
}

export default function SEO({ 
  title, 
  description, 
  canonical,
  ogType = 'website',
  ogImage = 'https://liverpoolsplumber.co.uk/images/owner/plumbing-service-van-branding-residential-driveway.webp',
  keywords = 'plumber liverpool, emergency plumber liverpool, boiler repair liverpool, knowsley plumber, pjs plumbing',
  noindex = false
}: SEOProps) {
  const siteName = 'PJS Plumbing & Heating Liverpool';
  const fullTitle = `${title} | ${siteName}`;

  React.useEffect(() => {
    document.title = fullTitle;
    
    const updateMeta = (name: string, content: string, attr: 'name' | 'property' = 'name') => {
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      if (element) {
        element.setAttribute('content', content);
      } else {
        element = document.createElement('meta');
        element.setAttribute(attr, name);
        element.setAttribute('content', content);
        document.head.appendChild(element);
      }
    };

    updateMeta('description', description);
    updateMeta('keywords', keywords);
    updateMeta('robots', noindex ? 'noindex, nofollow' : 'index, follow');
    
    // OpenGraph
    updateMeta('og:title', fullTitle, 'property');
    updateMeta('og:description', description, 'property');
    updateMeta('og:type', ogType, 'property');
    updateMeta('og:site_name', siteName, 'property');
    updateMeta('og:image', ogImage, 'property');
    updateMeta('og:locale', 'en_GB', 'property');
    updateMeta('og:url', canonical ?? window.location.href, 'property');

    // Twitter
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', fullTitle);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', ogImage);

    // Canonical link — use the explicit canonical prop directly (no path manipulation)
    if (canonical) {
      let link: HTMLLinkElement | null = document.querySelector('link[rel="canonical"]');
      if (link) {
        link.setAttribute('href', canonical);
      } else {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        link.setAttribute('href', canonical);
        document.head.appendChild(link);
      }
    }
  }, [fullTitle, description, ogType, ogImage, canonical, keywords, noindex]);

  return null;
}
