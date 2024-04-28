import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { configDefaults } from 'vitest/config';

export default defineConfig(({ command, mode }) => {
  // Check if the environment is set for testing.
  // run tests with:
  // npm test (for watch mode)
  // npm run test (just runs test and doesn't start watch)
  // OR:
  // VITEST_ENV=test npx vitest watch
  // OR: 
  // VITEST_ENV=test npx vitest run
  const isTesting = process.env.VITEST_ENV === 'test';

  return {
    plugins: [
      vue({
        // ignores vuetify components to satisfy WARNs in tests.
        // this may need to be removed at a later time to enable
        // testing of vuetify components.
        template: {
          compilerOptions: {
            // Apply custom element configuration only if in test environment
            isCustomElement: isTesting ? (tag) => tag.startsWith("v-") : undefined,
          },
        },
      }),
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
