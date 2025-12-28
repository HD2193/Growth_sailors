import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path, { dirname } from 'path';
import { VitePWA } from 'vite-plugin-pwa';
import { fileURLToPath } from 'url';

// Define __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
    plugins: [
      react(),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
        manifest: {
          name: 'GrowthSailors',
          short_name: 'GrowthSailors',
          description: 'GrowthSailors Progressive Web App',
          theme_color: '#ffffff',
          background_color: '#ffffff',
          display: 'standalone',
          icons: [
            {
              src: '/pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: '/pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
            },
            {
              src: '/pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable',
            },
          ],
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg,webp}'],
          maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5MB limit
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'google-fonts-cache',
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
          ],
        },
      }),
    ],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {
        'vaul@1.1.2': 'vaul',
        'sonner@2.0.3': 'sonner',
        'recharts@2.15.2': 'recharts',
        'react-resizable-panels@2.1.7': 'react-resizable-panels',
        'react-hook-form@7.55.0': 'react-hook-form',
        'react-day-picker@8.10.1': 'react-day-picker',
        'next-themes@0.4.6': 'next-themes',
        'lucide-react@0.487.0': 'lucide-react',
        'input-otp@1.4.2': 'input-otp',
        'figma:asset/fa02469e486eb1662aeda120f8b67fa72a27284c.png': path.resolve(__dirname, './src/assets/fa02469e486eb1662aeda120f8b67fa72a27284c.png'),
        'figma:asset/f4a111ed0c18b661845ed72c92322fec8ebb6002.png': path.resolve(__dirname, './src/assets/f4a111ed0c18b661845ed72c92322fec8ebb6002.png'),
        'figma:asset/e29111c94e62ab57f0518447107ce4f00804c21e.png': path.resolve(__dirname, './src/assets/e29111c94e62ab57f0518447107ce4f00804c21e.png'),
        'figma:asset/d6fb9b882959519863a4c0bb3e5de69c4733f049.png': path.resolve(__dirname, './src/assets/d6fb9b882959519863a4c0bb3e5de69c4733f049.png'),
        'figma:asset/d232a2733b289f6b47e2f8ebecccd50a584cb55b.png': path.resolve(__dirname, './src/assets/d232a2733b289f6b47e2f8ebecccd50a584cb55b.png'),
        'figma:asset/bfe5f6d8e1b0ca76a36133f1b081fe0eac474adf.png': path.resolve(__dirname, './src/assets/bfe5f6d8e1b0ca76a36133f1b081fe0eac474adf.png'),
        'figma:asset/bb83c6aab066fceb185a7b25a635a881e5605984.png': path.resolve(__dirname, './src/assets/bb83c6aab066fceb185a7b25a635a881e5605984.png'),
        'figma:asset/91c988d258943eaa56ab704f268f92280a3c0cd0.png': path.resolve(__dirname, './src/assets/91c988d258943eaa56ab704f268f92280a3c0cd0.png'),
        'figma:asset/90c7836d9737eadb2c1a161949b92c21b1ffdc1f.png': path.resolve(__dirname, './src/assets/90c7836d9737eadb2c1a161949b92c21b1ffdc1f.png'),
        'figma:asset/8690bc71a95c0ccd8492edb342cf34ea353a4028.png': path.resolve(__dirname, './src/assets/8690bc71a95c0ccd8492edb342cf34ea353a4028.png'),
        'figma:asset/792e14a5fa5b43a831b2bb9b4ea460a360a27c5d.png': path.resolve(__dirname, './src/assets/792e14a5fa5b43a831b2bb9b4ea460a360a27c5d.png'),
        'figma:asset/7559226180f39bea3acb86cf238a51cf99514f84.png': path.resolve(__dirname, './src/assets/7559226180f39bea3acb86cf238a51cf99514f84.png'),
        'figma:asset/7143e4419e3bb1d554f9340d9708c1d16e1438c7.png': path.resolve(__dirname, './src/assets/7143e4419e3bb1d554f9340d9708c1d16e1438c7.png'),
        'figma:asset/6a2a3659e0ff78dfe885c1f1231ef63bdf3b38ec.png': path.resolve(__dirname, './src/assets/6a2a3659e0ff78dfe885c1f1231ef63bdf3b38ec.png'),
        'figma:asset/5a29753ccb27b95ea99248f55dc48ef9c5c8880f.png': path.resolve(__dirname, './src/assets/5a29753ccb27b95ea99248f55dc48ef9c5c8880f.png'),
        'figma:asset/52073a4dbc87f6a7e93fa6244589a629f0262253.png': path.resolve(__dirname, './src/assets/52073a4dbc87f6a7e93fa6244589a629f0262253.png'),
        'figma:asset/40eed9a7763449213a472342221c909800c63e9b.png': path.resolve(__dirname, './src/assets/40eed9a7763449213a472342221c909800c63e9b.png'),
        'figma:asset/3e032e044e7a3e6e2c5a09bfe1051512fb30402a.png': path.resolve(__dirname, './src/assets/3e032e044e7a3e6e2c5a09bfe1051512fb30402a.png'),
        'figma:asset/391d4fd8453e4723fb92f1e8b28302358bc6af0f.png': path.resolve(__dirname, './src/assets/391d4fd8453e4723fb92f1e8b28302358bc6af0f.png'),
        'figma:asset/36890f5e0117ee92c16b4da508eb6a869226b407.png': path.resolve(__dirname, './src/assets/36890f5e0117ee92c16b4da508eb6a869226b407.png'),
        'figma:asset/221e78b67b6af7a968c919083e537e0c2aa870b6.png': path.resolve(__dirname, './src/assets/221e78b67b6af7a968c919083e537e0c2aa870b6.png'),
        'figma:asset/21fa3562f1ba9928fd8a08c8c141b380330a45ce.png': path.resolve(__dirname, './src/assets/21fa3562f1ba9928fd8a08c8c141b380330a45ce.png'),
        'figma:asset/21d11839b1e4a8c1fe49fb90f284b4fad3f9e469.png': path.resolve(__dirname, './src/assets/21d11839b1e4a8c1fe49fb90f284b4fad3f9e469.png'),
        'figma:asset/1bfb0088055418283315f1456e686eddd68f331d.png': path.resolve(__dirname, './src/assets/1bfb0088055418283315f1456e686eddd68f331d.png'),
        'figma:asset/11f5d6637c178006ceb8581a505290ed23932cb6.png': path.resolve(__dirname, './src/assets/11f5d6637c178006ceb8581a505290ed23932cb6.png'),
        'figma:asset/0c2de3a9835264afbaf0f9f772cc637c5a3a981d.png': path.resolve(__dirname, './src/assets/0c2de3a9835264afbaf0f9f772cc637c5a3a981d.png'),
        'embla-carousel-react@8.6.0': 'embla-carousel-react',
        'cmdk@1.1.1': 'cmdk',
        'class-variance-authority@0.7.1': 'class-variance-authority',
        '@radix-ui/react-tooltip@1.1.8': '@radix-ui/react-tooltip',
        '@radix-ui/react-toggle@1.1.2': '@radix-ui/react-toggle',
        '@radix-ui/react-toggle-group@1.1.2': '@radix-ui/react-toggle-group',
        '@radix-ui/react-tabs@1.1.3': '@radix-ui/react-tabs',
        '@radix-ui/react-switch@1.1.3': '@radix-ui/react-switch',
        '@radix-ui/react-slot@1.1.2': '@radix-ui/react-slot',
        '@radix-ui/react-slider@1.2.3': '@radix-ui/react-slider',
        '@radix-ui/react-separator@1.1.2': '@radix-ui/react-separator',
        '@radix-ui/react-select@2.1.6': '@radix-ui/react-select',
        '@radix-ui/react-scroll-area@1.2.3': '@radix-ui/react-scroll-area',
        '@radix-ui/react-radio-group@1.2.3': '@radix-ui/react-radio-group',
        '@radix-ui/react-progress@1.1.2': '@radix-ui/react-progress',
        '@radix-ui/react-popover@1.1.6': '@radix-ui/react-popover',
        '@radix-ui/react-navigation-menu@1.2.5': '@radix-ui/react-navigation-menu',
        '@radix-ui/react-menubar@1.1.6': '@radix-ui/react-menubar',
        '@radix-ui/react-label@2.1.2': '@radix-ui/react-label',
        '@radix-ui/react-hover-card@1.1.6': '@radix-ui/react-hover-card',
        '@radix-ui/react-dropdown-menu@2.1.6': '@radix-ui/react-dropdown-menu',
        '@radix-ui/react-dialog@1.1.6': '@radix-ui/react-dialog',
        '@radix-ui/react-context-menu@2.2.6': '@radix-ui/react-context-menu',
        '@radix-ui/react-collapsible@1.1.3': '@radix-ui/react-collapsible',
        '@radix-ui/react-checkbox@1.1.4': '@radix-ui/react-checkbox',
        '@radix-ui/react-avatar@1.1.3': '@radix-ui/react-avatar',
        '@radix-ui/react-aspect-ratio@1.1.2': '@radix-ui/react-aspect-ratio',
        '@radix-ui/react-alert-dialog@1.1.6': '@radix-ui/react-alert-dialog',
        '@radix-ui/react-accordion@1.2.3': '@radix-ui/react-accordion',
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      target: 'esnext',
      outDir: 'build',
    },
    server: {
      port: 3000,
      open: true,
    },
  });