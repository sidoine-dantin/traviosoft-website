import type { ScrapIcon as Kind } from '@/content/types';

/** Plain line icons drawn for the site, so no third-party logo is shown. */
const PATHS: Record<Kind, React.ReactNode> = {
  sheet: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M3 15h18M9 3v18M15 3v18" /></>,
  doc: <><path d="M6 2h9l5 5v15H6z" /><path d="M14 2v6h6M9 13h8M9 17h8" /></>,
  chat: <path d="M4 5h16v11H9l-5 4z" />,
  bank: <><path d="M3 10l9-6 9 6M5 10v8M10 10v8M14 10v8M19 10v8M3 21h18" /></>,
  book: <><path d="M5 3h12a2 2 0 0 1 2 2v16H7a2 2 0 0 1-2-2z" /><path d="M5 19a2 2 0 0 1 2-2h12" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
  phone: <path d="M5 3h4l2 5-3 2a12 12 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2z" />,
  note: <><path d="M4 4h16v11l-5 5H4z" /><path d="M15 20v-5h5" /></>,
  pdf: <><path d="M6 2h9l5 5v15H6z" /><path d="M14 2v6h6" /><rect x="8" y="12" width="9" height="5" rx="1" /></>,
  calc: <><rect x="5" y="2" width="14" height="20" rx="2" /><path d="M8 6h8M8 11h2M14 11h2M8 15h2M14 15h2M8 19h2M14 19h2" /></>
};

export function ScrapIcon({ k }: { k: Kind }) {
  return (
    <svg className="scrap-icon" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {PATHS[k]}
    </svg>
  );
}
