import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { configDefaults } from 'vitest/config';

export default defineConfig(({ command, mode }) => {
  return {
    plugins: [vue()],
    /*plugins: [vue({
      template: {
        compilerOptions: {
          // i am ignorning my custom '<container>' tag
          isCustomElement: (tag) => ['v-main', 'v-item', 'v-app', 'v-footer', 'v-layout', 'v-icon', 'v-list', 'v-navigation-drawer', 'v-list-item'].includes(tag)
        }
      }
    })],*/
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
