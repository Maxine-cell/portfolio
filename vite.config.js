import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // برای تنظیم alias (اختیاری)

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // همان پورت پیش‌فرض CRA برای راحتی کار
    open: true, // به محض اجرا، مرورگر را باز کن
  },
  build: {
    outDir: 'build', // پوشه خروجی را مانند CRA روی build قرار بده
  },
  resolve: {
    alias: {
      // این قسمت اختیاری است، اگر در پروژه از '@' به عنوان میانبر برای پوشه src استفاده کرده‌اید
      '@': path.resolve(__dirname, './src'),
    },
  },
});