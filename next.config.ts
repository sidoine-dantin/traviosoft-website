import path from 'node:path';
import { NextConfig } from 'next';

/*
 * next-intl reads its request config through the `next-intl/config` alias.
 * We set that alias here instead of using `next-intl/plugin`: the plugin loads
 * @swc/core when the config is read, and its native binary refuses to start in
 * the Cloudflare build image (ERR_SWC_NATIVE_CACHE), which fails every build.
 */
const REQUEST_CONFIG = './src/i18n/request.ts';

const config: NextConfig = {
  images: { remotePatterns: [] },
  turbopack: {
    resolveAlias: { 'next-intl/config': REQUEST_CONFIG }
  },
  webpack(webpackConfig) {
    webpackConfig.resolve ??= {};
    webpackConfig.resolve.alias = {
      ...webpackConfig.resolve.alias,
      'next-intl/config': path.resolve(webpackConfig.context ?? process.cwd(), REQUEST_CONFIG)
    };
    return webpackConfig;
  },
  async redirects() {
    // Old pages from the first site, kept so existing links and search results still land somewhere useful.
    return [
      { source: '/:locale(es|en|fr)/product', destination: '/:locale/sell', permanent: true },
      { source: '/:locale(es|en|fr)/how-it-works', destination: '/:locale/sell', permanent: true },
      // The example trips pages were removed (2026-11-13).
      { source: '/:locale(es|en|fr)/example/:trip*', destination: '/:locale', permanent: false }
    ];
  }
};

export default config;
