'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { useTranslations } from 'next-intl';
import { metaPixelId } from '@/lib/meta-pixel';

const STORAGE_KEY = 'traviosoft_cookie_consent';

type Consent = 'accepted' | 'declined' | null;

function readStoredConsent(): Consent {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === 'accepted' || value === 'declined' ? value : null;
  } catch {
    return null;
  }
}

export function ConsentBanner() {
  const t = useTranslations('consent');
  const [consent, setConsent] = useState<Consent>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setConsent(readStoredConsent());
    setReady(true);
  }, []);

  if (!metaPixelId) return null;

  function choose(value: Exclude<Consent, null>) {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // Storage unavailable (private browsing, blocked cookies): the
      // choice just won't persist across visits, which is safe to ignore.
    }
    setConsent(value);
  }

  return (
    <>
      {consent === 'accepted' && (
        <>
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
              n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
              document,'script','https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${metaPixelId}');
              fbq('track', 'PageView');
            `}
          </Script>
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        </>
      )}

      {ready && consent === null && (
        <div style={{
          position: 'fixed', left: '1rem', right: '1rem', bottom: '1rem', zIndex: 60,
          maxWidth: '640px', margin: '0 auto',
          backgroundColor: 'var(--color-ink)', color: 'white',
          borderRadius: '10px', padding: '1.25rem 1.5rem',
          boxShadow: '0 12px 32px oklch(0 0 0 / 0.25)',
          display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem'
        }}>
          <p style={{ fontSize: '0.875rem', lineHeight: 1.6, margin: 0, flex: '1 1 320px' }}>
            {t('message')}
          </p>
          <div style={{ display: 'flex', gap: '0.625rem', flexShrink: 0 }}>
            <button onClick={() => choose('declined')} className="btn-ghost" style={{
              borderColor: 'oklch(1 0 0 / 0.3)', color: 'white', padding: '0.5rem 1rem', fontSize: '0.8125rem'
            }}>
              {t('decline')}
            </button>
            <button onClick={() => choose('accepted')} className="btn-primary" style={{
              padding: '0.5rem 1rem', fontSize: '0.8125rem'
            }}>
              {t('accept')}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
