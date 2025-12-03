<template>
  <section class="relative h-screen flex items-center justify-center overflow-hidden">
    <!-- Background Gradient/Image -->
    <div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black z-0"></div>
    <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 z-0"></div>
    
    <div class="container mx-auto px-4 relative z-10 text-center">
      <UBadge color="primary" variant="subtle" class="mb-4 px-3 py-1 text-sm rounded-full">
        Engineering Excellence
      </UBadge>
      <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white">
        Building the <span class="text-primary-500">Future</span> <br />
        With Integrity
      </h1>
      <p class="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
        Innovative and sustainable engineering solutions. We deliver high-quality products and exceptional technical support for construction and industrial sectors.
      </p>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <UButton to="#services" size="xl" color="primary" variant="solid">Our Services</UButton>
        <UButton to="#projects" size="xl" color="white" variant="ghost">View Projects</UButton>
      </div>
    </div>
  </section>
</template>
