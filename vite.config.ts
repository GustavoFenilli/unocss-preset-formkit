import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import unocss from 'unocss/vite'
import presetUno from '@unocss/preset-uno'
import presetFormKit from './src/index';

export default defineConfig({
  plugins: [vue(), unocss({
    presets: [
      presetUno(),
      presetFormKit()
    ]
  })],
  build: {
    lib: {
      entry: require('path').resolve(__dirname, 'src/index.ts'),
      name: 'unocss-preset-formkit',
      fileName: (format) => `index.${format}.js`
    }
  }
})
