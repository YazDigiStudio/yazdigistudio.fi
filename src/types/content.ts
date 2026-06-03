/**
 * Content Types
 *
 * TypeScript types for JSON content structure.
 */

export type UIContent = {
  hero: {
    headline: string
    subheadline: string
    ctaPrimary: string
    ctaSecondary: string
  }
  navigation: {
    services: string
    about: string
    contact: string
  }
}
