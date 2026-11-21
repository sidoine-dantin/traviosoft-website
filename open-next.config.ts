import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

/**
 * Every page of the site is prerendered at build time. The worker serves those prerendered pages
 * from the static assets instead of rendering React again for each visit: rendering on every
 * request went over the Workers CPU limit (error 1102 on traviosoft.com).
 */
export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
  enableCacheInterception: true,
});
