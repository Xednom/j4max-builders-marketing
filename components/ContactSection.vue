<template>
  <section id="contact" class="py-20 bg-gray-900">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 class="text-3xl md:text-4xl font-bold mb-6 text-white">Get in <span class="text-primary-500">Touch</span></h2>
          <p class="text-gray-300 mb-8">
            Ready to start your project? Contact us today for a consultation or quote.
          </p>
          
          <div class="space-y-6">
            <div class="flex items-start">
              <div class="bg-gray-800 p-3 rounded-lg mr-4">
                <UIcon name="i-heroicons-map-pin" class="w-6 h-6 text-primary-500" />
              </div>
              <div>
                <h4 class="text-white font-semibold">Visit Us</h4>
                <p class="text-gray-400">Block 5-A Lot 16 4th Street Stage 2,<br>Macaria Village 1, Brgy. Canlalay,<br>Biñan City, Laguna, Philippines</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="bg-gray-800 p-3 rounded-lg mr-4">
                <UIcon name="i-heroicons-phone" class="w-6 h-6 text-primary-500" />
              </div>
              <div>
                <h4 class="text-white font-semibold">Call Us</h4>
                <p class="text-gray-400">(02) 8363-1450</p>
                <p class="text-gray-400">+63 917-543-0021</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="bg-gray-800 p-3 rounded-lg mr-4">
                <UIcon name="i-heroicons-envelope" class="w-6 h-6 text-primary-500" />
              </div>
              <div>
                <h4 class="text-white font-semibold">Email Us</h4>
                <p class="text-gray-400">j4maxbuildersinc@gmail.com</p>
                <p class="text-gray-400">j4maxbuildersincorporated@outlook.com</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- <div class="bg-gray-800 p-8 rounded-xl border border-gray-700">
          <h3 class="text-2xl font-bold text-white mb-6">Send a Message</h3>
          <form class="space-y-4" @submit.prevent>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <UFormGroup label="Name" name="name">
                <UInput placeholder="Your Name" />
              </UFormGroup>
              <UFormGroup label="Email" name="email">
                <UInput placeholder="your@email.com" type="email" />
              </UFormGroup>
            </div>
            <UFormGroup label="Subject" name="subject">
              <UInput placeholder="Project Inquiry" />
            </UFormGroup>
            <UFormGroup label="Message" name="message">
              <UTextarea placeholder="Tell us about your project..." :rows="4" />
            </UFormGroup>
            <UButton type="submit" block color="primary" size="lg">Send Message</UButton>
          </form>
        </div> -->
      </div>
    </div>
  </section>
</template>
