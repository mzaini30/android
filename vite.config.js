import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import legacy from "@vitejs/plugin-legacy";
import { chunk } from '@liuli-util/vite-plugin-chunk-node-modules';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), legacy(), chunk()],
});
