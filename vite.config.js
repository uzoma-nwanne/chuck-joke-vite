import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'


const getCache = ({ name, pattern }) => ({
  urlPattern: pattern,
  handler: "CacheFirst",
  options: {
    cacheName: name,
    expiration: {
      maxEntries: 500,
      maxAgeSeconds: 60 * 60 * 24 * 365 * 2 // 2 years
    },
    cacheableResponse: {
      statuses: [200]
    }
  }
});


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [VitePWA({
    workbox: {
      runtimeCaching: [
        getCache({ 
          pattern: /^https:\/\/s3.amazonaws.com\/my-library-cover-uploads/, 
          name: "local-images1" 
        }),
        getCache({ 
          pattern: /^https:\/\/my-library-cover-uploads.s3.amazonaws.com/, 
          name: "local-images2" 
        })
      ]
    }
  }),react()]
})
