// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/ui', '@nuxt/image', '@nuxtjs/sitemap'],
  site: {
    url: 'https://www.j4max.builders',
  },
  app: {
    head: {
      title: 'J4MAX Builders Inc.',
      titleTemplate: '%s | Engineering Excellence',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'J4MAX Builders Inc. provides innovative and sustainable engineering solutions with excellence and integrity. Specializing in HVAC, Mechanical, Fire Protection, and more.' },
        { name: 'format-detection', content: 'telephone=no' },
        // Open Graph
        { property: 'og:site_name', content: 'J4MAX Builders Inc.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'J4MAX Builders Inc. - Engineering Excellence' },
        { property: 'og:description', content: 'Innovative and sustainable engineering solutions. We deliver high-quality products and exceptional technical support.' },
        { property: 'og:locale', content: 'en_PH' },
        // Location
        { name: 'geo.region', content: 'PH' },
        { name: 'geo.placename', content: 'Philippines' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'J4MAX Builders Inc. - Engineering Excellence' },
        { name: 'twitter:description', content: 'Innovative and sustainable engineering solutions. We deliver high-quality products and exceptional technical support.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      htmlAttrs: {
        lang: 'en'
      }
    }
  },
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {},
    },
  }
})