// ─── IRAQ TV i18n Package ─────────────────────────────────────────────────────
// Localization dictionaries and utilities for Arabic/English support

export { ar } from './locales/ar';
export { en } from './locales/en';
export type { Locale } from './locales/ar';

export type SupportedLocale = 'ar' | 'en';

export const DEFAULT_LOCALE: SupportedLocale = 'ar';
export const SUPPORTED_LOCALES: SupportedLocale[] = ['ar', 'en'];
export const RTL_LOCALES: SupportedLocale[] = ['ar'];

/**
 * Returns true if the given locale is RTL.
 */
export function isRtl(locale: SupportedLocale): boolean {
  return RTL_LOCALES.includes(locale);
}

/**
 * Returns the HTML dir attribute value for a given locale.
 */
export function getDir(locale: SupportedLocale): 'rtl' | 'ltr' {
  return isRtl(locale) ? 'rtl' : 'ltr';
}

/**
 * Returns the locale-appropriate font family hint.
 */
export function getFontHint(locale: SupportedLocale): string {
  return locale === 'ar' ? 'font-arabic' : 'font-sans';
}
