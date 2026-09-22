'use client';

import { useEffect } from 'react';
import { trackLead } from '@/lib/meta-pixel';

/** Fires once per page load: reaching /demo is the intent signal available without deeper instrumentation. */
export function DemoLeadPixel() {
  useEffect(() => {
    trackLead();
  }, []);

  return null;
}
