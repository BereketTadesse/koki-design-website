export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FashionDesigner",
    name: "Ethiopian Designer",
    description:
      "Ethiopian fashion designer specializing in traditional and contemporary clothing, blending heritage with modern style",
    url: "https://ethiopiandesigner.com",
    image: "https://ethiopiandesigner.com/ethiopian-traditional-dress-with-modern-twist.jpg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Addis Ababa",
      addressCountry: "Ethiopia",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+251-911-234-567",
      contactType: "Customer Service",
      email: "info@ethiopiandesigner.com",
      availableLanguage: ["English", "Amharic"],
    },
    sameAs: ["https://www.facebook.com/ethiopiandesigner", "https://www.instagram.com/ethiopiandesigner"],
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "ETB",
      availability: "https://schema.org/InStock",
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}
