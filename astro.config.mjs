import { defineConfig } from "astro/config";
import compress from "astro-compress";
import robotsTxt from "astro-robots-txt";
import vercel from '@astrojs/vercel/edge';

// https://astro.build/config
export default defineConfig({
  site: 'https://uncopyright.thuanowa.com',
  integrations: [compress(), robotsTxt()],
  output: "server",
  adapter: vercel(),
});
