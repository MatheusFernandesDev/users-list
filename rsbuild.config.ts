import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    title: 'Lista de Usuários',
  },
  output: {
    assetPrefix: '/',
    distPath: {
      root: 'dist',
    },
  },
  server: {
    port: 3000,
  },
});