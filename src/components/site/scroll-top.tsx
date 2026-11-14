'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Every new page opens at its top. Next only scrolls to the new page's first element,
 * which lands a few hundred pixels down when the previous page was near its top.
 * Back and forward keep the browser's own scroll position; links to an anchor keep theirs.
 */
export function ScrollTop() {
  const pathname = usePathname();
  const first = useRef(true);
  const fromHistory = useRef(false);

  useEffect(() => {
    const onPop = () => { fromHistory.current = true; };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  useEffect(() => {
    if (first.current) { first.current = false; return; }
    if (fromHistory.current) { fromHistory.current = false; return; }
    if (window.location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}
