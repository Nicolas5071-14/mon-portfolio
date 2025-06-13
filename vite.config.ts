import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://nicolas5071-14.github.io/mon-portfolio',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
