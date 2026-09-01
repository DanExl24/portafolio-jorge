<template>
  <div class="inline-flex items-center justify-center shrink-0" :class="containerClass">
    <!-- Academia Neiva -->
    <div v-if="projectId === 'academia-neiva'" class="w-full h-full rounded-xl bg-gradient-to-br from-[#4F46E5] via-[#4338CA] to-[#3B82F6] p-2 flex items-center justify-center shadow-md border border-[#6366F1]/40">
      <svg class="w-full h-full text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <!-- School / Academic Building Facade with Pediment and Columns -->
        <path d="M3 9.5L12 4l9 5.5v1H3v-1z" fill="rgba(255,255,255,0.2)"/>
        <path d="M4 10.5v8.5"/>
        <path d="M8 10.5v8.5"/>
        <path d="M12 10.5v4.5"/>
        <path d="M16 10.5v8.5"/>
        <path d="M20 10.5v8.5"/>
        <path d="M2 20h20"/>
        <circle cx="12" cy="7.5" r="1" fill="currentColor"/>
      </svg>
    </div>

    <!-- GEDASC (SENA / CTA Control de Acceso) -->
    <div v-else-if="projectId === 'gedasc'" class="w-full h-full rounded-xl bg-gradient-to-br from-[#008850] via-[#059669] to-[#065F46] p-2 flex items-center justify-center shadow-md border border-[#34D399]/40">
      <svg class="w-full h-full text-white" viewBox="0 0 24 24" fill="currentColor">
        <!-- SENA Official Vector Emblem Geometry -->
        <!-- Head -->
        <circle cx="12" cy="4" r="2.2" />
        <!-- Horizontal Arms Bar -->
        <rect x="3.5" y="7.8" width="17" height="1.8" rx="0.9" />
        <!-- Diagonal Torso / Legs Geometry -->
        <path d="M12 9.6L7.2 20h2.6l2.2-5 2.2 5h2.6L12 9.6z" />
        <circle cx="12" cy="12.5" r="0.9" fill="#008850" />
      </svg>
    </div>

    <!-- BIMEH (Unidad Militar / Gorra Militar) -->
    <div v-else-if="projectId === 'bimeh'" class="w-full h-full rounded-xl bg-gradient-to-br from-[#0284C7] via-[#0369A1] to-[#0B1E36] p-2 flex items-center justify-center shadow-md border border-[#38BDF8]/40">
      <svg class="w-full h-full text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
        <!-- Military Patrol Cap Crown -->
        <path d="M4 14.5c0-4 1.5-7.5 7-8 5 0 7.5 3 7.5 8" fill="rgba(255,255,255,0.18)" />
        <path d="M4.5 10.5C6 7 9 6.5 18 6.5" stroke="currentColor" stroke-dasharray="1 1" opacity="0.6" />
        <!-- Visor / Peak -->
        <path d="M3 15.5c0-.8.6-1.5 1.5-1.5h14c1.8 0 3.5.8 4 2.2-1.2.8-3.2 1.3-5.5 1.3H6c-2 0-3-.8-3-2z" fill="currentColor" stroke="currentColor" />
        <!-- Headband Base -->
        <path d="M4 14h14.5" />
        <!-- Military Star Insignia -->
        <polygon points="11,9.8 11.6,11.2 13,11.2 11.9,12 12.3,13.3 11,12.4 9.7,13.3 10.1,12 9,11.2 10.4,11.2" fill="#38BDF8" stroke="none" />
      </svg>
    </div>

    <!-- Pyautom (SENA Fichas / Fichas Rectangulares en Capas) -->
    <div v-else-if="projectId === 'pyautom'" class="w-full h-full rounded-xl bg-gradient-to-br from-[#059669] via-[#047857] to-[#0F2942] p-2 flex items-center justify-center shadow-md border border-[#34D399]/40">
      <svg class="w-full h-full text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
        <!-- Back Ficha Card -->
        <rect x="7" y="3" width="13" height="9" rx="1.8" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.4)" stroke-dasharray="1 1" />
        <!-- Middle Ficha Card -->
        <rect x="5" y="7" width="13" height="9" rx="1.8" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.7)" />
        <!-- Front Main Ficha Card -->
        <rect x="3" y="11" width="13" height="10" rx="1.8" fill="rgba(5,150,105,0.9)" stroke="#FFF" stroke-width="1.8" />
        <!-- Data lines on front card representing training records / fichas formativas -->
        <line x1="6" y1="14.5" x2="13" y2="14.5" stroke="#34D399" stroke-width="1.5" />
        <line x1="6" y1="17.5" x2="10.5" y2="17.5" stroke="#FFF" stroke-width="1.3" opacity="0.8" />
      </svg>
    </div>

    <!-- Juicios Evaluativos (SENA / Ingesta CSV/Excel & Trazabilidad Curricular) -->
    <div v-else-if="projectId === 'juicios-evaluativos' || projectId === 'juiciosevaluativos'" class="w-full h-full rounded-xl bg-gradient-to-br from-[#0D9488] via-[#059669] to-[#1E3A8A] p-2 flex items-center justify-center shadow-md border border-[#2DD4BF]/40">
      <svg class="w-full h-full text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
        <!-- Assessment / Sheet Form Container -->
        <rect x="4" y="3" width="16" height="18" rx="2.5" fill="rgba(255,255,255,0.12)" stroke="currentColor" />
        <!-- Clip / Header on top -->
        <path d="M9 3h6v2.5a1 1 0 01-1 1h-4a1 1 0 01-1-1V3z" fill="currentColor" stroke="none" />
        <!-- Evaluation Checkmark & Metrics Bar Chart inside -->
        <path d="M7.5 10.5l2 2 4.5-4.5" stroke="#34D399" stroke-width="2" />
        <line x1="7.5" y1="16" x2="10" y2="16" stroke="#FFF" stroke-width="1.5" />
        <line x1="12" y1="16" x2="16.5" y2="16" stroke="#2DD4BF" stroke-width="1.5" />
        <circle cx="16" cy="10" r="1.2" fill="#FBBF24" stroke="none" />
      </svg>
    </div>

    <!-- Default Fallback -->
    <div v-else class="w-full h-full rounded-xl bg-bg-surface border border-brand/50 flex items-center justify-center text-accent-teal-light font-mono font-bold text-xs">
      &lt;/&gt;
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    projectId: string
    containerClass?: string
  }>(),
  {
    containerClass: 'w-10 h-10'
  }
)
</script>
