import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const config: NextConfig = {
  images: { remotePatterns: [] },
  async redirects() {
    // Old pages from the first site, kept so existing links and search results still land somewhere useful.
    return [
      { source: '/:locale(es|en|fr)/product', destination: '/:locale/sell', permanent: true },
      { source: '/:locale(es|en|fr)/how-it-works', destination: '/:locale/sell', permanent: true }
    ];
  }
};

export default withNextIntl(config);
