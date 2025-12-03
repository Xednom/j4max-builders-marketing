<template>
  <section id="about" class="py-20 bg-gray-900">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl md:text-4xl font-bold mb-6 text-white">About <span class="text-primary-500">J4MAX</span></h2>
          <p class="text-gray-300 mb-4 leading-relaxed">
            Founded in December 2019 as J4MAX Engineering Services, we evolved into a corporation in August 2024, now known as <strong>J4MAX Builders Inc.</strong>
          </p>
          <p class="text-gray-300 mb-6 leading-relaxed">
            We are dedicated to providing comprehensive solutions tailored to the needs of the construction and industrial sectors. Our team of experienced engineers focuses on delivering high-quality products at competitive prices, complemented by exceptional technical support.
          </p>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <UIcon name="i-heroicons-trophy" class="w-8 h-8 text-primary-500 mb-3" />
              <h3 class="text-xl font-semibold text-white mb-2">Our Mission</h3>
              <p class="text-sm text-gray-400">
                To become the most reliable company by providing outstanding services, creating employment, and delivering innovative products of excellent craftsmanship.
              </p>
            </div>
            <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <UIcon name="i-heroicons-eye" class="w-8 h-8 text-primary-500 mb-3" />
              <h3 class="text-xl font-semibold text-white mb-2">Our Vision</h3>
              <p class="text-sm text-gray-400">
                To provide innovative and sustainable engineering solutions with excellence and integrity, serving communities and honoring God in all our endeavors.
              </p>
            </div>
          </div>
        </div>
        
        <div class="relative">
          <div class="absolute -inset-4 bg-primary-500/20 rounded-xl blur-xl"></div>
          <div class="relative bg-gray-800 p-8 rounded-xl border border-gray-700">
            <h3 class="text-2xl font-bold text-white mb-6">Our Core Values</h3>
            <ul class="space-y-4">
              <li v-for="value in values" :key="value.title" class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="w-6 h-6 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <strong class="text-white block">{{ value.title }}</strong>
                  <span class="text-gray-400 text-sm">{{ value.description }}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const values = [
  { title: 'Integrity', description: 'Upholding the highest standards of honesty and ethics.' },
  { title: 'Customer Focus', description: 'Striving to exceed expectations and build lasting relationships.' },
  { title: 'Innovation', description: 'Encouraging creativity and continuous improvement.' },
  { title: 'Excellence', description: 'Committed to delivering the best results with quality and efficiency.' },
  { title: 'Teamwork', description: 'Collaboration and mutual respect are the foundations of our success.' },
  { title: 'Accountability', description: 'Taking ownership of our actions and results.' },
  { title: 'Sustainability', description: 'Operating responsibly and reducing environmental impact.' }
]
</script>
