<template>
  <section id="services" class="py-20 bg-gray-950">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-white">Our <span class="text-primary-500">Services</span></h2>
        <p class="text-gray-400">
          We provide comprehensive engineering and construction solutions tailored to your needs.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="service in services" :key="service.name" 
             class="group bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-primary-500/50 transition duration-300 hover:bg-gray-800">
          <div class="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-500/20 transition duration-300">
            <UIcon :name="service.icon" class="w-6 h-6 text-primary-500" />
          </div>
          <h3 class="text-xl font-semibold text-white mb-2">{{ service.name }}</h3>
          <p class="text-gray-400 text-sm">
            Professional {{ service.name.toLowerCase() }} services ensuring quality and compliance with industry standards.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  { name: 'Design and Build', icon: 'i-heroicons-pencil-square' },
  { name: 'Mechanical Works', icon: 'i-heroicons-cog-6-tooth' },
  { name: 'Electrical Works', icon: 'i-heroicons-bolt' },
  { name: 'Plumbing and Sanitary', icon: 'i-heroicons-drop' },
  { name: 'Ventilation System', icon: 'i-heroicons-arrows-right-left' },
  { name: 'Fire Protection System', icon: 'i-heroicons-fire' },
  { name: 'Gas Line', icon: 'i-heroicons-fire' }, // Reusing fire icon or finding a better one
  { name: 'Medical Gas', icon: 'i-heroicons-beaker' },
  { name: 'Airconditioning Supply', icon: 'i-heroicons-snowflake' }
]
</script>
