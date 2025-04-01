import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default ({ mode }) => {
  // Load all env variables starting with VITE_
  const env = loadEnv(mode, process.cwd(), '');

  return defineConfig({
    plugins: [react()],
    // Explicitly expose env variables to the client
    define: {
      'process.env': env,
      'import.meta.env': JSON.stringify(env)
    }
  });
};