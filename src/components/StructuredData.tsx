import React from 'react';
import { useLocation } from 'react-router-dom';

export default function StructuredData() {
  const location = useLocation();

  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "PlumbingBusiness",
    "name": "PJS Plumbing & Heating Services",
    "image": "https://liverpoolsplumber.co.uk/images/owner/plumbing-service-van-branding-residential-driveway.webp",
    "@id": "https://liverpoolsplumber.co.uk",
    "url": "https://liverpoolsplumber.co.uk",
    "telephone": "0151 440 2614",
    "priceRange": "££",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "48 Archway Rd",
      "addressLocality": "Liverpool",
      "addressRegion": "Merseyside",
      "postalCode": "L36 9XE",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 53.4084,
      "longitude": -2.9916
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "areaServed": [
      { "@type": "City", "name": "Liverpool" },
      { "@type": "City", "name": "Knowsley" },
      { "@type": "City", "name": "Huyton" },
      { "@type": "City", "name": "Prescot" },
      { "@type": "City", "name": "Whiston" },
      { "@type": "City", "name": "Rainhill" },
      { "@type": "City", "name": "St Helens" },
      { "@type": "City", "name": "Halewood" }
    ],
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "name": "Gas Safe Registration",
      "credentialCategory": "Professional Certification",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Gas Safe Register",
        "url": "https://www.gassaferegister.co.uk/"
      },
      "identifier": "221708"
    },
    "knowsAbout": [
      "Emergency Plumbing",
      "Boiler Repair",
      "Boiler Servicing",
      "Central Heating Installation",
      "Central Heating Repairs",
      "Gas Safety Certificates",
      "Landlord CP12 Certificates",
      "General Plumbing",
      "Powerflushing",
      "Radiator Installation"
    ],
    "description": "PJS Plumbing & Heating Services: 40 years experience in Liverpool and Knowsley. Gas Safe registered (Reg #221708). Emergency plumbing, boiler repair & servicing, central heating installation & repairs, gas safety certificates, and general plumbing.",
    "sameAs": [
      "https://www.facebook.com/TheHuytonPlumber/",
      "https://www.instagram.com/paulyplumb1969"
    ]
  };

  const schemas: any[] = [baseSchema];

  // Breadcrumb per route
  const breadcrumbMap: Record<string, { name: string; item: string }[]> = {
    '/': [{ name: 'Home', item: 'https://liverpoolsplumber.co.uk/' }],
    '/about': [
      { name: 'Home', item: 'https://liverpoolsplumber.co.uk/' },
      { name: 'About', item: 'https://liverpoolsplumber.co.uk/about' },
    ],
    '/services': [
      { name: 'Home', item: 'https://liverpoolsplumber.co.uk/' },
      { name: 'All Services', item: 'https://liverpoolsplumber.co.uk/services' },
    ],
    '/boiler-repair-servicing': [
      { name: 'Home', item: 'https://liverpoolsplumber.co.uk/' },
      { name: 'Boiler Repair & Servicing', item: 'https://liverpoolsplumber.co.uk/boiler-repair-servicing' },
    ],
    '/emergency-plumber-liverpool': [
      { name: 'Home', item: 'https://liverpoolsplumber.co.uk/' },
      { name: 'Emergency Plumber Liverpool', item: 'https://liverpoolsplumber.co.uk/emergency-plumber-liverpool' },
    ],
    '/emergency-plumber-huyton': [
      { name: 'Home', item: 'https://liverpoolsplumber.co.uk/' },
      { name: 'Emergency Plumber Huyton', item: 'https://liverpoolsplumber.co.uk/emergency-plumber-huyton' },
    ],
    '/emergency-plumber-prescot': [
      { name: 'Home', item: 'https://liverpoolsplumber.co.uk/' },
      { name: 'Emergency Plumber Prescot', item: 'https://liverpoolsplumber.co.uk/emergency-plumber-prescot' },
    ],
    '/boiler-repair-knowsley': [
      { name: 'Home', item: 'https://liverpoolsplumber.co.uk/' },
      { name: 'Boiler Repair Knowsley', item: 'https://liverpoolsplumber.co.uk/boiler-repair-knowsley' },
    ],
    '/boiler-repair-huyton': [
      { name: 'Home', item: 'https://liverpoolsplumber.co.uk/' },
      { name: 'Boiler Repair Huyton', item: 'https://liverpoolsplumber.co.uk/boiler-repair-huyton' },
    ],
    '/heating': [
      { name: 'Home', item: 'https://liverpoolsplumber.co.uk/' },
      { name: 'Central Heating', item: 'https://liverpoolsplumber.co.uk/heating' },
    ],
    '/plumbing': [
      { name: 'Home', item: 'https://liverpoolsplumber.co.uk/' },
      { name: 'Plumbing Services', item: 'https://liverpoolsplumber.co.uk/plumbing' },
    ],
    '/gas-safety-certificate-liverpool': [
      { name: 'Home', item: 'https://liverpoolsplumber.co.uk/' },
      { name: 'Gas Safety Certificates', item: 'https://liverpoolsplumber.co.uk/gas-safety-certificate-liverpool' },
    ],
    '/contact': [
      { name: 'Home', item: 'https://liverpoolsplumber.co.uk/' },
      { name: 'Contact', item: 'https://liverpoolsplumber.co.uk/contact' },
    ],
    '/faq': [
      { name: 'Home', item: 'https://liverpoolsplumber.co.uk/' },
      { name: 'FAQ', item: 'https://liverpoolsplumber.co.uk/faq' },
    ],
    '/service-areas': [
      { name: 'Home', item: 'https://liverpoolsplumber.co.uk/' },
      { name: 'Service Areas', item: 'https://liverpoolsplumber.co.uk/service-areas' },
    ],
  };

  const crumbs = breadcrumbMap[location.pathname];
  if (crumbs && crumbs.length > 1) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": crumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": crumb.name,
        "item": crumb.item,
      })),
    });
  }

  // Page-specific service schemas
  const serviceSchemas: Record<string, any> = {
    '/boiler-repair-servicing': {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Boiler Repair & Servicing Liverpool",
      "provider": { "@type": "LocalBusiness", "name": "PJS Plumbing & Heating Services", "url": "https://liverpoolsplumber.co.uk" },
      "areaServed": [
        { "@type": "City", "name": "Liverpool" },
        { "@type": "City", "name": "Knowsley" },
      ],
      "description": "Gas Safe boiler repair and annual servicing across Liverpool and Knowsley by Paul Scott (Reg #221708). Same-day repair where possible, honest pricing.",
      "url": "https://liverpoolsplumber.co.uk/boiler-repair-servicing",
    },
    '/emergency-plumber-liverpool': {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Emergency Plumber Liverpool",
      "provider": { "@type": "LocalBusiness", "name": "PJS Plumbing & Heating Services", "url": "https://liverpoolsplumber.co.uk" },
      "areaServed": [
        { "@type": "City", "name": "Liverpool" },
        { "@type": "City", "name": "Knowsley" },
      ],
      "description": "24/7 emergency plumbing service across Liverpool and Knowsley. Burst pipes, leaks, flooding — Paul responds fast.",
      "url": "https://liverpoolsplumber.co.uk/emergency-plumber-liverpool",
    },
    '/emergency-plumber-huyton': {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Emergency Plumber Huyton",
      "provider": { "@type": "LocalBusiness", "name": "PJS Plumbing & Heating Services", "url": "https://liverpoolsplumber.co.uk" },
      "areaServed": [
        { "@type": "City", "name": "Huyton" },
        { "@type": "City", "name": "Knowsley" },
      ],
      "description": "24/7 emergency plumbing in Huyton and Knowsley. Burst pipes, leaks, flooding. Gas Safe registered, fast local response.",
      "url": "https://liverpoolsplumber.co.uk/emergency-plumber-huyton",
    },
    '/emergency-plumber-prescot': {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Emergency Plumber Prescot",
      "provider": { "@type": "LocalBusiness", "name": "PJS Plumbing & Heating Services", "url": "https://liverpoolsplumber.co.uk" },
      "areaServed": [
        { "@type": "City", "name": "Prescot" },
        { "@type": "City", "name": "Rainhill" },
        { "@type": "City", "name": "Whiston" },
        { "@type": "City", "name": "Knowsley" },
      ],
      "description": "24/7 emergency plumbing in Prescot, Rainhill, Whiston and Knowsley. Gas Safe registered, fast local response.",
      "url": "https://liverpoolsplumber.co.uk/emergency-plumber-prescot",
    },
    '/boiler-repair-knowsley': {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Boiler Repair Knowsley",
      "provider": { "@type": "LocalBusiness", "name": "PJS Plumbing & Heating Services", "url": "https://liverpoolsplumber.co.uk" },
      "areaServed": [
        { "@type": "City", "name": "Knowsley" },
        { "@type": "City", "name": "Huyton" },
        { "@type": "City", "name": "Prescot" },
        { "@type": "City", "name": "Kirkby" },
        { "@type": "City", "name": "Halewood" },
      ],
      "description": "Boiler repair and servicing across Knowsley by Gas Safe engineer Paul Scott (Reg #221708). 40 years experience, same-day repair where possible.",
      "url": "https://liverpoolsplumber.co.uk/boiler-repair-knowsley",
    },
    '/boiler-repair-huyton': {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Boiler Repair Huyton",
      "provider": { "@type": "LocalBusiness", "name": "PJS Plumbing & Heating Services", "url": "https://liverpoolsplumber.co.uk" },
      "areaServed": [
        { "@type": "City", "name": "Huyton" },
        { "@type": "City", "name": "Knowsley" },
      ],
      "description": "Boiler repair and servicing in Huyton by local Gas Safe engineer Paul Scott (Reg #221708). Same-day repair where possible, honest pricing.",
      "url": "https://liverpoolsplumber.co.uk/boiler-repair-huyton",
    },
    '/heating': {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Central Heating Installation & Repair Liverpool",
      "provider": { "@type": "LocalBusiness", "name": "PJS Plumbing & Heating Services", "url": "https://liverpoolsplumber.co.uk" },
      "areaServed": [
        { "@type": "City", "name": "Liverpool" },
        { "@type": "City", "name": "Knowsley" },
      ],
      "description": "Central heating installation, repairs, powerflushing, and radiator fitting across Liverpool and Knowsley.",
      "url": "https://liverpoolsplumber.co.uk/heating",
    },
    '/plumbing': {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Plumbing Services Liverpool",
      "provider": { "@type": "LocalBusiness", "name": "PJS Plumbing & Heating Services", "url": "https://liverpoolsplumber.co.uk" },
      "areaServed": [
        { "@type": "City", "name": "Liverpool" },
        { "@type": "City", "name": "Knowsley" },
      ],
      "description": "General domestic plumbing across Liverpool and Knowsley — leaks, taps, toilets, drains, showers, and bathroom fitting.",
      "url": "https://liverpoolsplumber.co.uk/plumbing",
    },
    '/gas-safety-certificate-liverpool': {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Gas Safety Certificate Liverpool",
      "provider": { "@type": "LocalBusiness", "name": "PJS Plumbing & Heating Services", "url": "https://liverpoolsplumber.co.uk" },
      "areaServed": [
        { "@type": "City", "name": "Liverpool" },
        { "@type": "City", "name": "Knowsley" },
      ],
      "description": "CP12 gas safety certificates for landlords across Liverpool and Knowsley. Gas Safe registered, same-day certificate.",
      "url": "https://liverpoolsplumber.co.uk/gas-safety-certificate-liverpool",
    },
    '/faq': {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you offer emergency plumbing in Liverpool?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Paul Scott offers a 24/7 emergency plumbing service across Liverpool and Knowsley. Call 0151 440 2614 directly — no call centres."
          }
        },
        {
          "@type": "Question",
          "name": "Is Paul Scott Gas Safe registered?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Paul is Gas Safe registered under number 221708. You can verify this at gassaferegister.co.uk."
          }
        },
        {
          "@type": "Question",
          "name": "What areas do you cover in Merseyside?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Paul covers the whole of Liverpool and Knowsley, including Huyton, Prescot, Whiston, Kirkby, Halewood, Rainhill, and St Helens."
          }
        },
      ]
    }
  };

  const pageSchema = serviceSchemas[location.pathname];
  if (pageSchema) schemas.push(pageSchema);

  return (
    <>
      {schemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
    </>
  );
}
