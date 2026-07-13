import { useEffect } from "react";

const DEVELOPER = {
  name: "Oyenuga Joshua",
  alternateName: "Sharpman",
  url: "https://sharpman.netlify.app",
  email: "buildwithsharpman@gmail.com",
  jobTitle: "Full Stack Web Developer",
  location: "Ikorodu, Lagos, Nigeria",
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

function setMeta(nameOrAttr, content, attr = "name") {
  if (!content) return;
  let el = document.querySelector(`meta[${attr}="${nameOrAttr}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, nameOrAttr);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setJSONLD(id, data) {
  let el = document.querySelector(`script[data-seo-id="${id}"]`);
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.setAttribute("data-seo-id", id);
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export default function SEOHead({
  title,
  description,
  canonical,
  image,
  type = "website",
  jsonLD,
}) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | ${BRAND.name}`
      : `NovaTask — Smart Todo App by ${BRAND.name}`;

    document.title = fullTitle;

    setMeta("title", fullTitle);
    setMeta("description", description);
    setMeta("author", DEVELOPER.name);
    setMeta("creator", BRAND.name);
    setMeta("publisher", BRAND.name);

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = canonical;
    }

    setMeta("og:title", fullTitle, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", type, "property");
    setMeta("og:site_name", `${BRAND.name} Portfolio`, "property");
    if (canonical) setMeta("og:url", canonical, "property");
    if (image) setMeta("og:image", image, "property");

    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);
    setMeta("twitter:creator", "@sharpman_dev");
    setMeta("twitter:site", "@sharpman_dev");
    if (image) setMeta("twitter:image", image);

    if (jsonLD) {
      setJSONLD("page-jsonld", jsonLD);
    }

    return () => {
      const dynamic = document.querySelector('script[data-seo-id="page-jsonld"]');
      if (dynamic) dynamic.remove();
    };
  }, [title, description, canonical, image, type, jsonLD]);

  return null;
}

export { DEVELOPER, BRAND };
