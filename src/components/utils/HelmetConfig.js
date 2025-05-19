import React from "react";
import { Helmet } from "react-helmet";

export default function SEO({
  title,
  description,
  keywords,
  url,
  image,
  datePublished,
  breadcrumb = [],
  articleBody,
  siteName = "YourOrgName",
  twitterHandle = "@YourTwitterHandle",
  locale = "en_US",
  alternateLinks = [],
  faq = [], // array of { question, answer }
}) {
  const ldBase = {
    "@context": "https://schema.org",
    "@type": articleBody ? "Article" : "WebPage",
    headline: title,
    description,
    ...(image && { image }),
    publisher: {
      "@type": "Organization",
      name: siteName,
      logo: {
        "@type": "ImageObject",
        url: "https://your-domain.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    ...(articleBody && {
      datePublished,
      articleBody,
      author: { "@type": "Organization", name: siteName },
    }),
    ...(breadcrumb.length > 0 && {
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: breadcrumb.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          item: item.url,
        })),
      },
    }),
  };

  // If FAQ items are provided, nest them
  if (faq.length) {
    ldBase["@type"] = "FAQPage";
    ldBase.mainEntity = faq.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    }));
  }

  return (
    <Helmet>
      {/* Basic */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Alternate language / formats */}
      {alternateLinks.map(({ href, hreflang }) => (
        <link rel="alternate" href={href} hrefLang={hreflang} key={hreflang} />
      ))}

      {/* Open Graph */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      <meta property="og:type" content={articleBody ? "article" : "website"} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      {/* JSON-LD */}
      <script type="application/ld+json">{JSON.stringify(ldBase)}</script>
    </Helmet>
  );
}
