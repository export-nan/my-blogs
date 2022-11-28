import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';

// https://vitejs.dev/config/
export default ({mode}) => defineConfig({
  build: {
    outDir: '../@www/webApp',
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
  },
  define: {
    'process.env': {...process.env, ...loadEnv(mode, process.cwd())},
  },
  server: {
    host: '127.0.0.1',
    port: loadEnv(mode, process.cwd()).VITE_PORT as unknown as number,
    strictPort: true, // 端口被占用直接退出
    https: false,
    open: true, // 在开发服务器启动时自动在浏览器中打开应用程序
    proxy: {
      // 选项写法
      '/api': {
        target: 'http://127.0.0.1:7001/api',
        changeOrigin: true,
        rewrite: pathURL => pathURL.replace(/^\/api/, ''),
      },
    },
    hmr: {
      overlay: false, // 屏蔽服务器报错
    },
  },
});
