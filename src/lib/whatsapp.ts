import { business } from '@/data/business';

export const DEFAULT_WHATSAPP_MESSAGE =
  'Olá! Vim pelo site da HomeTech e gostaria de falar com um especialista.';

/**
 * Builds a wa.me link with a pre-filled message.
 *
 * The destination number lives in `src/data/business.ts` (`WHATSAPP_NUMBER`)
 * and still needs confirmation from the store before going live.
 */
export function whatsappUrl(message: string = DEFAULT_WHATSAPP_MESSAGE): string {
  return `https://wa.me/${business.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

/** `tel:` link for the store's landline. */
export const telUrl = `tel:${business.phone.e164}`;
