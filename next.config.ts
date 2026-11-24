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
  /*
   * Every page is built once into plain HTML files and served as static assets. No code runs
   * when someone opens a page, so pages can never hit the Workers CPU limit (error 1102).
   * The small Worker in worker/index.ts only answers what has no file: the language choice at
   * "/", addresses without a language, and the 404 page. Redirects live in public/_redirects.
   */
  output: 'export',
  images: { remotePatterns: [], unoptimized: true },
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
  }
};

export default config;
