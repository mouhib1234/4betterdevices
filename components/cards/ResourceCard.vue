<template>
  <div class="folder-wrapper">
    <component
      :is="resource.link ? 'a' : NuxtLink"
      v-bind="linkProps"
      class="folder-card group block
             focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0fb2b1]
             transition-transform hover:-translate-y-1 hover:shadow-xl"
    >
      <div class="card-content bg-white shadow-lg p-6 flex flex-col min-h-70">
        <div class="flex items-start justify-between mb-4">
          <div class="flex-shrink-0 bg-white rounded-full p-2">
            <img
              :src="resource.logo"
              :alt="`${resource.title} logo`"
              class="w-auto h-14 object-contain"
            />
          </div>
        </div>
        <h2 class="text-[22px] font-bold text-gray-800 mb-2 group-hover:text-[#0fb2b1]
                   transition-colors duration-200">
          {{ resource.title }}
        </h2>

        <p class="text-gray-600 flex-1">
          {{ resource.description }}
        </p>
      </div>
    </component>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { NuxtLink } from '#components'
import type { Resource } from '@/composables/useResource'

const props = defineProps<{ resource: Resource }>()

const linkProps = computed(() =>
  props.resource.link
    ? { href: props.resource.link, target: '_blank', rel: 'noopener noreferrer' }
    : { to: `/resource/${props.resource.key}` }
)
</script>

<style scoped>
.folder-wrapper {
  position: relative;
  width: 100%;
  background: rgba(194, 240, 234, 0.6);
  padding: calc(16px + 8px) 16px 16px;
  clip-path: polygon(
    0%   0%,
    35%   0%,
    38%   16px,
    100%  16px,
    100%  100%,
    0%    100%,
    0%    16px
  );
}

.folder-card {
  position: relative;
  z-index: 1;
  width: 100%;
  text-decoration: none;
}

.card-content {
  background: white;
  border-radius: 0.5rem;
  box-shadow:
    0 10px 15px -3px rgba(0,0,0,0.1),
    0 4px 6px   -4px rgba(0,0,0,0.1);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  min-height: 17.5rem;
}
</style>
