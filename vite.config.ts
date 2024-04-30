import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { configDefaults } from 'vitest/config';

export default defineConfig(({ command, mode }) => {
  return {
    plugins: [vue(),
    ],
    base: "/",
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    test: {
      setupFiles: ['./tests/vitest-setup.ts'],
      globals: true,
      environment: 'happy-dom',
      exclude: [...configDefaults.exclude, 'e2e'],
    }
  };
});
