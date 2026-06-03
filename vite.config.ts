// // @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// // or the app will break with duplicate plugins:
// //   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
// //     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
// //     error logger plugins, and sandbox detection (port/host/strictPort).
// // You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
// import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// export default defineConfig({
//   tanstackStart: {
//     // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
//     // nitro/vite builds from this
//     server: { entry: "server" },
//   },
//   preview: {
//     allowedHosts: ["gym-website-nltx.onrender.com"],
//   },
// });



// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.

import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // TanStack Start configuration – tells Nitro where the server entry lives.
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },

  // Vite‑specific overrides (required for host‑allowance on Render).
  vite: {
    // Allow Vite preview (used by `npm start` → `npm run preview`) to accept requests
    // from the public Render domain.
    preview: {
      allowedHosts: ["gym-website-nltx.onrender.com"],
    },

    // Ensure the dev/preview server binds to 0.0.0.0 so external hosts are reachable.
    server: {
      host: true,          // listen on all network interfaces
      // Optional: you can also set a custom port if needed, e.g. port: 3000
    },
  },
});
