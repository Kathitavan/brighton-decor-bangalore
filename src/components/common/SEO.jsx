// src/components/common/SEO.jsx
// Lightweight, zero-dependency dynamic SEO component for per-page metadata, OpenGraph, Twitter Cards, and JSON-LD schema
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DEFAULT_IMAGE = 'https://brightondecor.in/assets/imgs/main%20logo.png';
const BASE_URL = 'https://brightondecor.in';

export default function SEO({
  title,
  description,
  canonical,
  ogImage = DEFAULT_IMAGE,
  ogType = 'website',
  schema,
}) {
  const location = useLocation();
  const fullUrl = `${BASE_URL}${location.pathname}`;
  const canonicalUrl = canonical || fullUrl;
  const siteTitle = title
    ? `${title} | Brighton Decor — Bangalore`
    : 'Brighton Decor — Luxury Window Blinds, Dream Curtains & Drapery | Bangalore';

  useEffect(() => {
    document.title = siteTitle;

    const setMetaTag = (attrName, attrValue, content) => {
      if (!content) return;
      let el = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    if (description) {
      setMetaTag('name', 'description', description);
    }

    setMetaTag('property', 'og:title', siteTitle);
    if (description) setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:image', ogImage);

    setMetaTag('name', 'twitter:title', siteTitle);
    if (description) setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', ogImage);

    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', canonicalUrl);

    let schemaScript = document.getElementById('page-structured-data');
    if (schema) {
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.id = 'page-structured-data';
        schemaScript.type = 'application/ld+json';
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schema);
    } else if (schemaScript) {
      schemaScript.remove();
    }

    return () => {
      const s = document.getElementById('page-structured-data');
      if (s) s.remove();
    };
  }, [siteTitle, description, canonicalUrl, ogImage, ogType, schema]);

  return null;
}
