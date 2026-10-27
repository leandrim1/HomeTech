import { business } from '@/data/business';
import { services } from '@/data/services';

/**
 * LocalBusiness schema built only from details the store confirmed.
 * No ratings, price range, founding date or review counts are asserted here.
 */
export function buildLocalBusinessSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${business.siteUrl}/#loja`,
    name: business.name,
    alternateName: business.shortName,
    description: business.legalDescription,
    url: business.siteUrl,
    telephone: business.phone.e164,
    image: `${business.siteUrl}/og-hometech.jpg`,
    logo: `${business.siteUrl}/images/hometech-logo.jpg`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${business.address.street}, ${business.address.complement}`,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    hasMap: business.links.googleMapsDirections,
    areaServed: {
      '@type': 'City',
      name: `${business.address.city} - ${business.address.state}`,
    },
    openingHoursSpecification: business.openingHours
      .filter((day) => day.opens !== null && day.closes !== null)
      .map((day) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: `https://schema.org/${day.schemaDay}`,
        opens: day.opens,
        closes: day.closes,
      })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Soluções HomeTech',
      itemListElement: services.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.summary,
          url: `${business.siteUrl}/servicos#${service.slug}`,
        },
      })),
    },
  };
}
