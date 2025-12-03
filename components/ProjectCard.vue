<template>
  <article 
    class="group relative flex flex-col h-full bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden hover:border-primary-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/10"
  >
    <!-- Card Glow Effect -->
    <div class="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    
    <!-- Image/Icon Area -->
    <div class="relative h-48 bg-gray-900 border-b border-gray-800 flex items-center justify-center group-hover:bg-gray-800/80 transition-colors duration-300">
      <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
      <UIcon name="i-heroicons-building-office-2" class="w-16 h-16 text-gray-700 group-hover:text-primary-500 transition-colors duration-300 transform group-hover:scale-110" />
      
      <!-- Status Badge -->
      <div class="absolute top-4 right-4">
        <span class="px-3 py-1 text-xs font-medium rounded-full border border-gray-700 bg-gray-900/80 text-gray-300 backdrop-blur-sm">
          {{ project.type }}
        </span>
      </div>
    </div>

    <!-- Content -->
    <div class="p-8 flex flex-col flex-grow relative">
      <h3 class="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
        {{ project.name }}
      </h3>
      <p class="text-gray-400 text-sm leading-relaxed flex-grow">
        {{ project.description }}
      </p>
      
      <!-- Action/Link (Visual only for now) -->
      <div class="mt-6 flex items-center text-primary-500 text-sm font-semibold opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
        <span>View Details</span>
        <UIcon name="i-heroicons-arrow-right" class="w-4 h-4 ml-2" />
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>
