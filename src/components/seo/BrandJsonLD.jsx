const DEVELOPER = {
  name: "Oyenuga Joshua",
  alternateName: "Sharpman",
  url: "https://sharpman.netlify.app",
  email: "buildwithsharpman@gmail.com",
  jobTitle: "Full Stack Web Developer",
  sameAs: [
    "https://sharpman.netlify.app",
    "https://github.com/Jeffsharpman",
    "https://www.linkedin.com/in/oyenuga-joshua-058434417",
    "https://x.com/sharpman_dev",
    "https://www.instagram.com/sharpman_dev",
    "https://youtube.com/@sharpman_dev",
  ],
};

const BRAND = {
  name: "Sharpman",
  url: "https://sharpman.netlify.app",
};

export default function BrandJsonLD() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: DEVELOPER.name,
    alternateName: DEVELOPER.alternateName,
    jobTitle: DEVELOPER.jobTitle,
    url: DEVELOPER.url,
    email: DEVELOPER.email,
    sameAs: DEVELOPER.sameAs,
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BRAND.name,
    url: BRAND.url,
    founder: {
      "@type": "Person",
      name: DEVELOPER.name,
    },
    sameAs: DEVELOPER.sameAs,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
    </>
  );
}
