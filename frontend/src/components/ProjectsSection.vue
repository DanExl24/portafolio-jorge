<template>
  <section id="proyectos" class="py-20 bg-bg-main relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-6 border-b border-brand/25">
        <div>
          <span class="text-xs font-mono font-medium text-accent-teal-light uppercase tracking-wider block mb-2">
            // Portafolio Seleccionado
          </span>
          <h2 class="text-3xl sm:text-4xl font-display font-bold text-content-main">
            Proyectos Destacados
          </h2>
        </div>
        <p class="text-sm text-content-muted max-w-md">
          Sistemas web desarrollados con foco en arquitectura sólida, automatizaciones de procesos y tipado robusto.
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        <ProjectCard 
          v-for="(project, index) in projects" 
          :key="project.id" 
          :project="project"
          :class="[
            index === projects.length - 1 && projects.length % 2 !== 0 
              ? 'md:col-span-2' 
              : ''
          ]"
          @open-detail="handleOpenDetail"
        />
      </div>

    </div>

    <!-- Architecture Modal -->
    <ProjectModal 
      :is-open="isModalOpen" 
      :project="selectedProject" 
      @close="handleCloseModal" 
    />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { PROJECTS_DATA } from '../data/portfolioData'
import type { ProjectDetail } from '../types/portfolio'
import ProjectCard from './ProjectCard.vue'
import ProjectModal from './ProjectModal.vue'

const projects = PROJECTS_DATA
const isModalOpen = ref(false)
const selectedProject = ref<ProjectDetail | null>(null)

const handleOpenDetail = (project: ProjectDetail) => {
  selectedProject.value = project
  isModalOpen.value = true
}

const handleCloseModal = () => {
  isModalOpen.value = false
  selectedProject.value = null
}
</script>
