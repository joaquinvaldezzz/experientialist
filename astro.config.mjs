import { defineConfig } from 'astro/config'

export default defineConfig({
  build: {
    format: 'file',
  },
  server: {
    host: true,
    port: 8080,
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: (info) => {
            let extension = info.name.split('.').at(1)

            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extension)) {
              extension = 'images'
            } else if (/css/i.test(extension)) {
              return 'assets/[hash][extname]'
            }

            return `assets/${extension}/[name][extname]`
          },
          chunkFileNames: 'assets/[hash].js',
          entryFileNames: 'assets/[hash].js',
        },
      },
    },
  },
})
