<template>
  <section class="py-16 bg-gray-950 border-y border-gray-800">
    <div class="container mx-auto px-4">
      <h3 class="text-2xl font-bold text-center text-white mb-10">Trusted by Industry Leaders</h3>
      
      <div class="flex flex-wrap justify-center gap-8 md:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
        <!-- Since we don't have logos, we'll use text representations styled to look like logos -->
        <div v-for="client in clients" :key="client" class="text-xl md:text-2xl font-bold text-gray-500 hover:text-white transition cursor-default">
          {{ client }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const clients = [
  'McDonald\'s',
  'Bangko Sentral ng Pilipinas',
  'Teleperformance',
  'Nestle',
  'AIG Philippines',
  'Boehringer Ingelheim',
  'Safeway Philtech',
  'Kobelco',
  'KDDI Philippines',
  'Army Navy',
  'Max\'s Restaurant',
  'Yellow Cab Pizza',
  'Convergy\'s',
  'Texas Roadhouse'
]
</script>
