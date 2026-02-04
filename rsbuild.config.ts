import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    title: 'Sensedia - Lista de Usuários',
    favicon: './public/favicon.ico',
  },
  output: {
    assetPrefix: '/',
  },
  server: {
    port: 3000,
  },
});
