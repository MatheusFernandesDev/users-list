import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    template: './public/index.html',
    favicon: './public/favicon.ico',
  },
  source: {
    entry: {
      index: './src/index.tsx'
    },
  },
});