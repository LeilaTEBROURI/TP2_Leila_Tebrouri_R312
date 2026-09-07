import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Le projet est entièrement statique : Netlify publie directement `dist`.
// `@astrojs/netlify` reste installé comme demandé par le sujet, mais son
// adaptateur SSR n'est pas activé afin de ne pas lancer Edge Functions en local.
export default defineConfig({
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});
