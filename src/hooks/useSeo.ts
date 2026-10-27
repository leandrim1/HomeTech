import { useEffect } from 'react';
import { business } from '@/data/business';

export interface SeoOptions {
  /** Page-specific title; the brand suffix is appended automatically. */
  title: string;
  description: string;
  /** Path only, e.g. `/servicos`. Used to build the canonical URL. */
  path: string;
  /** Absolute or root-relative image for Open Graph / Twitter cards. */
  image?: string;
  /** Structured data injected for this route, if any. */
  jsonLd?: Record<string, unknown>;
  /** Keeps a route out of search results (used by the 404 page). */
  noIndex?: boolean;
}

const BRAND_SUFFIX = `${business.shortName} ${business.tagline} · ${business.address.city}/${business.address.state}`;
const JSON_LD_ID = 'hometech-structured-data';

function upsertMeta(selector: string, attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
}

/**
 * Keeps the document head in sync with the active route.
 *
 * Deliberately dependency-free: react-helmet would add runtime weight for what
 * amounts to a handful of attribute writes per navigation.
 */
export function useSeo({ title, description, path, image, jsonLd, noIndex }: SeoOptions): void {
  useEffect(() => {
    const fullTitle = title.includes(business.shortName) ? title : `${title} | ${BRAND_SUFFIX}`;
    const canonical = `${business.siteUrl}${path}`;
    const ogImage = image
      ? image.startsWith('http')
        ? image
        : `${business.siteUrl}${image}`
      : `${business.siteUrl}/og-hometech.jpg`;

    document.title = fullTitle;

    upsertMeta('meta[name="description"]', 'name', 'description', description);
    upsertLink('canonical', canonical);

    upsertMeta('meta[property="og:title"]', 'property', 'og:title', fullTitle);
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', description);
    upsertMeta('meta[property="og:url"]', 'property', 'og:url', canonical);
    upsertMeta('meta[property="og:image"]', 'property', 'og:image', ogImage);
    upsertMeta('meta[property="og:type"]', 'property', 'og:type', 'website');
    upsertMeta('meta[property="og:site_name"]', 'property', 'og:site_name', business.name);
    upsertMeta('meta[property="og:locale"]', 'property', 'og:locale', 'pt_BR');

    upsertMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', fullTitle);
    upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    upsertMeta('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage);
    upsertMeta(
      'meta[name="robots"]',
      'name',
      'robots',
      noIndex ? 'noindex, follow' : 'index, follow',
    );
  }, [title, description, path, image, noIndex]);

  useEffect(() => {
    if (!jsonLd) return undefined;

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = JSON_LD_ID;
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [jsonLd]);
}
