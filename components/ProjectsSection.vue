<template>
  <section id="projects" class="py-24 bg-gray-950 relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <div class="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center max-w-3xl mx-auto mb-20">
        <h2 class="text-4xl md:text-5xl font-extrabold mb-6 text-white tracking-tight">
          Featured <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-cyan-400">Projects</span>
        </h2>
        <p class="text-gray-400 text-lg leading-relaxed">
          A showcase of our commitment to excellence, innovation, and integrity in every project we undertake.
        </p>
      </div>

      <div class="mb-4 border-b border-gray-800">
        <ul class="flex flex-wrap -mb-px text-sm font-medium text-center justify-center" role="tablist">
          <li class="me-2" role="presentation">
            <button 
              class="inline-block p-4 border-b-2 rounded-t-lg transition-colors duration-300"
              :class="activeTab === 'ongoing' ? 'border-cyan-400 text-cyan-400' : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-300'"
              @click="activeTab = 'ongoing'"
              type="button" 
              role="tab" 
            >
              Ongoing Projects
            </button>
          </li>
          <li class="me-2" role="presentation">
            <button 
              class="inline-block p-4 border-b-2 rounded-t-lg transition-colors duration-300"
              :class="activeTab === 'finished' ? 'border-cyan-400 text-cyan-400' : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-300'"
              @click="activeTab = 'finished'"
              type="button" 
              role="tab" 
            >
              Finished Projects
            </button>
          </li>
        </ul>
      </div>

      <div id="default-tab-content">
        <div v-if="activeTab === 'ongoing'" class="p-4 rounded-lg" role="tabpanel">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            <ProjectCard 
              v-for="project in ongoingProjects" 
              :key="project.name" 
              :project="project" 
            />
          </div>
        </div>
        <div v-if="activeTab === 'finished'" class="p-4 rounded-lg" role="tabpanel">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            <ProjectCard 
              v-for="project in finishedProjects" 
              :key="project.name" 
              :project="project" 
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('ongoing')

const ongoingProjects = [
  { name: 'Infinity Square Mall - Quiapo Manila', type: 'Mechanical & Fire Protection', description: 'Mechanical piping, ducting works, and fire protection systems.' },
  { name: 'Teleperformance - Cebu', type: 'Mechanical Works', description: 'Replacement of Fire Protection Pipe Rise.' },
  { name: 'Telephilippines Inc - Vertis North', type: 'Maintenance', description: 'Preventive Maintenance for VAV, Fans, and Blowers.' },
  { name: 'Boehringer Ingelheim', type: 'Maintenance', description: 'Preventive Maintenance for FDAS and Airconditioning.' },
  { name: 'Safeway Philtech Inc', type: 'Maintenance', description: 'Preventive Maintenance.' },
  { name: 'AIG Philippines Insurance', type: 'Maintenance', description: 'Preventive Maintenance.' }
]

const finishedProjects = [
  { name: 'Bangko Sentral ng Pilipinas', type: 'HVAC & Plumbing', description: 'Supply and Installation of Air-conditioning Units and Plumbing.' },
  { name: 'McDonald\'s (Various Locations)', type: 'Mechanical Works', description: 'Mechanical works for Vega, San Vicente, Tagaytay, Checkpoint Calamba.' },
  { name: 'Nestle Warehouse - Tarlac', type: 'Cold Storage', description: 'Installation of Cold Room Piping and Thermostat.' },
  { name: 'Convergy\'s Philippines', type: 'HVAC', description: 'Installation of VRF Air-conditioning units.' },
  { name: 'Max Restaurant', type: 'Mechanical & Ventilation', description: 'Mechanical and Ventilation Works.' },
  { name: 'Yellow Cab Pizza Co.', type: 'Ventilation', description: 'Ventilation System.' },
  { name: 'Army Navy', type: 'Mechanical & Ventilation', description: 'Mechanical and Ventilation Works.' },
  { name: 'Clark Pampanga Airport', type: 'Fire Protection', description: 'Installation of Fire Jockey Pump and Chemical Fire Extinguisher.' },
  { name: '21 Asean Summit Villas', type: 'HVAC', description: 'Installation of 294 Airconditioning Units.' }
]
</script>
