<template>
  <div class="min-h-screen flex flex-col bg-gray-900 text-white">
    <header class="fixed w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <NuxtLink to="/" class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-cyan-400">J4MAX BUILDERS</NuxtLink>
        <nav class="hidden md:flex space-x-8">
          <NuxtLink to="#about" class="hover:text-primary-400 transition">About</NuxtLink>
          <NuxtLink to="#services" class="hover:text-primary-400 transition">Services</NuxtLink>
          <NuxtLink to="#projects" class="hover:text-primary-400 transition">Projects</NuxtLink>
          <NuxtLink to="#contact" class="hover:text-primary-400 transition">Contact</NuxtLink>
        </nav>
        <UButton to="#contact" color="primary" variant="solid" class="hidden md:inline-flex">Get a Quote</UButton>
        <!-- Mobile Menu Button (Placeholder) -->
        <button class="md:hidden text-white">
          <UIcon name="i-heroicons-bars-3" class="w-6 h-6" />
        </button>
      </div>
    </header>

    <main class="flex-grow pt-20">
      <slot />
    </main>

    <footer class="bg-gray-950 border-t border-gray-800 py-12">
      <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-xl font-bold mb-4 text-primary-500">J4MAX BUILDERS INC.</h3>
          <p class="text-gray-400 mb-4">
            Providing innovative and sustainable engineering solutions with excellence and integrity.
          </p>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4">Contact Us</h3>
          <ul class="space-y-2 text-gray-400">
            <li class="flex items-start">
              <UIcon name="i-heroicons-map-pin" class="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
              <span>Block 5-A Lot 16 4th Street Stage 2, Macaria Village 1, Brgy. Canlalay, Biñan City, Laguna</span>
            </li>
            <li class="flex items-center">
              <UIcon name="i-heroicons-phone" class="w-5 h-5 mr-2" />
              <span>(02) 8363-1450 / +63917-5430021</span>
            </li>
            <li class="flex items-center">
              <UIcon name="i-heroicons-envelope" class="w-5 h-5 mr-2" />
              <span>j4maxbuildersinc@gmail.com</span>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2 text-gray-400">
            <li><NuxtLink to="#about" class="hover:text-primary-400">About Us</NuxtLink></li>
            <li><NuxtLink to="#services" class="hover:text-primary-400">Our Services</NuxtLink></li>
            <li><NuxtLink to="#projects" class="hover:text-primary-400">Projects</NuxtLink></li>
          </ul>
        </div>
      </div>
      <div class="container mx-auto px-4 mt-8 pt-8 border-t border-gray-900 text-center text-gray-500 text-sm">
        &copy; {{ new Date().getFullYear() }} J4MAX Builders Inc. All rights reserved.
      </div>
    </footer>
  </div>
</template>

<script setup>
// Layout logic if needed
</script>
