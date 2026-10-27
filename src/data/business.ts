/**
 * Single source of truth for every commercial detail shown on the site.
 *
 * Change a phone number, an address, an opening hour or a social link here and
 * it updates the header, footer, contact page, structured data and every
 * WhatsApp link at once — no component edits needed.
 */

export interface OpeningHour {
  /** Day label shown to visitors. */
  label: string;
  /** Short schema.org day token, used by the LocalBusiness structured data. */
  schemaDay: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
  /** 24h opening time, `null` when the store is closed that day. */
  opens: string | null;
  /** 24h closing time, `null` when the store is closed that day. */
  closes: string | null;
  /** Human readable range, e.g. "08h30 às 18h". */
  display: string;
}

/**
 * WhatsApp number in international format, digits only (country + area + line).
 *
 * ⚠️ PENDENTE DE CONFIRMAÇÃO COM A LOJA.
 * A HomeTech forneceu apenas o telefone fixo (34) 3821-0910. Este valor usa os
 * dígitos desse telefone como ponto de partida para que todos os botões do site
 * já funcionem, mas o número de WhatsApp precisa ser confirmado pela empresa
 * antes de publicar em produção. Trocar apenas esta constante atualiza o botão
 * flutuante, o cabeçalho, o rodapé, os cards e todas as páginas.
 */
export const WHATSAPP_NUMBER = '553438210910';

/**
 * Número de avaliações exibido na seção de depoimentos.
 * O material enviado pela loja indicava 12 avaliações no Google — esse total
 * muda com o tempo, então fica isolado aqui para edição rápida.
 */
export const GOOGLE_REVIEW_COUNT = 12;

export const business = {
  name: 'HomeTech Soluções Avançadas',
  shortName: 'HomeTech',
  tagline: 'Soluções Avançadas',
  legalDescription:
    'Loja de soluções tecnológicas avançadas em Patos de Minas: assistência técnica em smartphones, celulares e acessórios, informática, segurança residencial, automação e soluções rurais.',

  phone: {
    display: '(34) 3821-0910',
    /** E.164, used by `tel:` links and structured data. */
    e164: '+553438210910',
  },

  whatsapp: {
    number: WHATSAPP_NUMBER,
    display: '(34) 3821-0910',
    /** Flagged so reviewers know this still needs the store's confirmation. */
    confirmed: false,
  },

  address: {
    street: 'R. Maj. Gote, 1170',
    complement: 'Loja 1',
    district: 'Centro',
    city: 'Patos de Minas',
    state: 'MG',
    stateName: 'Minas Gerais',
    postalCode: '38700-001',
    country: 'BR',
    /** One-line version for compact places such as the footer. */
    short: 'R. Maj. Gote, 1170, loja 1 — Centro, Patos de Minas/MG',
    full: 'R. Maj. Gote, 1170, loja 1, Centro, Patos de Minas – MG, CEP 38700-001',
  },

  /**
   * Approximate coordinates of the Centro district of Patos de Minas, used only
   * to centre the map frame. The embed itself resolves the real address by text,
   * so the pin stays correct even if these are off by a block.
   */
  geo: {
    latitude: -18.5790,
    longitude: -46.5180,
  },

  openingHours: [
    { label: 'Segunda-feira', schemaDay: 'Monday', opens: '08:30', closes: '18:00', display: '08h30 às 18h' },
    { label: 'Terça-feira', schemaDay: 'Tuesday', opens: '08:30', closes: '18:00', display: '08h30 às 18h' },
    { label: 'Quarta-feira', schemaDay: 'Wednesday', opens: '08:30', closes: '18:00', display: '08h30 às 18h' },
    { label: 'Quinta-feira', schemaDay: 'Thursday', opens: '08:30', closes: '18:00', display: '08h30 às 18h' },
    { label: 'Sexta-feira', schemaDay: 'Friday', opens: '08:30', closes: '18:00', display: '08h30 às 18h' },
    { label: 'Sábado', schemaDay: 'Saturday', opens: '09:00', closes: '13:00', display: '09h às 13h' },
    { label: 'Domingo', schemaDay: 'Sunday', opens: null, closes: null, display: 'Fechado' },
  ] satisfies OpeningHour[],

  links: {
    googleMapsDirections:
      'https://www.google.com/maps/search/?api=1&query=' +
      encodeURIComponent('HomeTech Soluções Avançadas, R. Maj. Gote, 1170, Centro, Patos de Minas - MG, 38700-001'),
    /** Public embed URL — no Maps API key required. */
    googleMapsEmbed:
      'https://www.google.com/maps?q=' +
      encodeURIComponent('R. Maj. Gote, 1170, Centro, Patos de Minas - MG, 38700-001') +
      '&hl=pt-BR&z=16&output=embed',
    googleReviews: 'https://www.google.com/search?q=HomeTech+Patos+de+Minas+avalia%C3%A7%C3%B5es',
  },

  /** Canonical production origin — update after the first Vercel deploy. */
  siteUrl: 'https://hometechsolucoes.vercel.app',
} as const;

/** Compact "Seg a Sex · 08h30–18h" style summary used in tight spaces. */
export const hoursSummary = 'Seg a Sex, 08h30 às 18h · Sáb, 09h às 13h';
