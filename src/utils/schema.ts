// Utility to generate structured data (JSON-LD)

export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "RRB Staff Nurse Exam Portal",
  "url": "https://rrbstaffnurse.in",
  "logo": "https://rrbstaffnurse.in/logo.png",
  "sameAs": [
    "https://facebook.com/rrbstaffnurse",
    "https://twitter.com/rrbstaffnurse"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "contact@rrbstaffnurse.in",
    "contactType": "customer support"
  }
});

export const generateWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "RRB Staff Nurse Exam Portal",
  "url": "https://rrbstaffnurse.in",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://rrbstaffnurse.in/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
});

export const generateBreadcrumbSchema = (items: { name: string; item: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://rrbstaffnurse.in${item.item}`
  }))
});

export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const generateArticleSchema = (
  title: string, 
  description: string, 
  datePublished: string, 
  authorName: string = "RRB Staff Nurse Team",
  image: string = "https://rrbstaffnurse.in/og-image.jpg"
) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": title,
  "description": description,
  "image": image,
  "author": {
    "@type": "Organization",
    "name": authorName
  },
  "publisher": {
    "@type": "Organization",
    "name": "RRB Staff Nurse Exam Portal",
    "logo": {
      "@type": "ImageObject",
      "url": "https://rrbstaffnurse.in/logo.png"
    }
  },
  "datePublished": datePublished,
  "dateModified": datePublished
});
