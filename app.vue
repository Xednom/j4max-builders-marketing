<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ConstructionBusiness',
        name: 'J4MAX Builders Inc.',
        url: 'https://www.j4max.builders',
        description: 'Providing innovative and sustainable engineering solutions with excellence and integrity.',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Block 5-A Lot 16 4th Street Stage 2, Macaria Village 1, Brgy. Canlalay',
          addressLocality: 'Biñan City',
          addressRegion: 'Laguna',
          addressCountry: 'PH'
        },
        telephone: '+63-2-8363-1450',
        email: 'j4maxbuildersinc@gmail.com',
        openingHours: 'Mo-Fr 08:00-17:00',
        priceRange: '$$'
      })
    }
  ]
})
</script>
