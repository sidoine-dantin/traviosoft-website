import type { Locale, SiteContent, Article } from './types';
import en from './en';
import es from './es';
import fr from './fr';

const all: Record<Locale, SiteContent> = { en, es, fr };

export function getContent(locale: string): SiteContent {
  return all[(locale as Locale)] ?? all.es;
}

export const locales: Locale[] = ['es', 'en', 'fr'];

/** Find an article by slug in one locale. */
export function findArticle(locale: string, kind: Article['kind'] | Article['kind'][], slug: string) {
  const kinds = Array.isArray(kind) ? kind : [kind];
  return getContent(locale).articles.find(a => a.slug === slug && kinds.includes(a.kind));
}

/** Locales that have a translation of this article, with their slug. */
export function articleAlternates(key: string): Partial<Record<Locale, string>> {
  const out: Partial<Record<Locale, string>> = {};
  for (const l of locales) {
    const a = all[l].articles.find(x => x.key === key);
    if (a) out[l] = a.slug;
  }
  return out;
}
