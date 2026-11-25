/**
 * Product-page topics that have a short looping video, per locale. A video replaces the topic's
 * still picture. Files: public/videos/<locale>/<topic id>.mp4 (720x720, H.264, no sound) and
 * <topic id>.webp (the last frame, shown before the video plays and when motion is reduced).
 * A locale is listed only once its videos are recorded in that language: the video shows the
 * app in the page's language, like the still pictures.
 */
export const TOPIC_VIDEOS: Record<string, readonly string[]> = {
  en: [
    'requests', 'catalogue', 'quotes', 'send', 'proposal', 'partners',
    'order', 'status', 'suppliers', 'itinerary', 'groups', 'calendar',
    'schedule', 'links', 'invoices', 'dashboard',
    'brands', 'languages', 'currencies', 'country', 'team', 'data', 'connections',
    'approve', 'rights',
  ],
  fr: [
    'requests', 'catalogue', 'quotes', 'send', 'proposal', 'partners',
    'order', 'status', 'suppliers', 'itinerary', 'groups', 'calendar',
    'schedule', 'links', 'invoices', 'dashboard',
    'brands', 'languages', 'currencies', 'country', 'team', 'data', 'connections',
    'approve', 'rights',
  ],
  es: [
    'requests', 'catalogue', 'quotes', 'send', 'proposal', 'partners',
    'order', 'status', 'suppliers', 'itinerary', 'groups', 'calendar',
    'schedule', 'links', 'invoices', 'dashboard',
    'brands', 'languages', 'currencies', 'country', 'team', 'data', 'connections',
    'approve', 'rights',
  ],
  it: [
    'requests', 'catalogue', 'quotes', 'send', 'proposal', 'partners',
    'order', 'status', 'suppliers', 'itinerary', 'groups', 'calendar',
    'schedule', 'links', 'invoices', 'dashboard',
    'brands', 'languages', 'currencies', 'country', 'team', 'data', 'connections',
    'approve', 'rights',
  ],
  pt: [
    'requests', 'catalogue', 'quotes', 'send', 'proposal', 'partners',
    'order', 'status', 'suppliers', 'itinerary', 'groups', 'calendar',
    'schedule', 'links', 'invoices', 'dashboard',
    'brands', 'languages', 'currencies', 'country', 'team', 'data', 'connections',
    'approve', 'rights',
  ],
};

export function topicVideo(locale: string, id: string): string | null {
  return TOPIC_VIDEOS[locale]?.includes(id) ? `/videos/${locale}/${id}` : null;
}
