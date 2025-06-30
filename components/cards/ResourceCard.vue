<template>
  <component
    :is="resource.link ? 'a' : NuxtLink"
    v-bind="linkProps"
    :style="watermarkStyle"
    class="folder-card group block
           transition-transform hover:-translate-y-1 "
  >
    <img
      v-if="resource.logo"
      :src="resource.logo"
      alt=""
      aria-hidden="true"
      class="folder-card__watermark"
    />

    <div class="card-content p-6 flex flex-col">
      <div class="flex items-start justify-between mb-4">
        <div class="flex-shrink-0 rounded-full p-2e">
          <img
            :src="resource.logo"
            :alt="`${resource.title} logo`"
            class="w-auto h-14 object-contain"
          />
        </div>
      </div>
      <h2
        class="text-[20px] font-bold text-gray-800 mb-2
               group-hover:text-[#0fb2b1] transition-colors duration-200"
      >
        {{ resource.title }}
      </h2>
      <p class="text-gray-600 flex-1">
        {{ resource.description }}
      </p>
    </div>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { NuxtLink } from '#components'
import type { Resource } from '@/composables/useResource'

const props = defineProps<{
  resource: Resource
  watermarkWidth?: string
  watermarkHeight?: string
}>()

const linkProps = computed(() =>
  props.resource.link
    ? { href: props.resource.link, target: '_blank', rel: 'noopener noreferrer' }
    : { to: `/resource/${props.resource.key}` }
)

const watermarkStyle = computed(() => ({
  '--watermark-width': props.watermarkWidth ?? '75%',
  '--watermark-height': props.watermarkHeight ?? 'auto',
}))
</script>

<style scoped>
.folder-card {
  position: relative;
  display: block;
  overflow: hidden;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow:
    0 10px 15px rgba(0, 0, 0, 0.15),
    0 4px 6px  rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  background-color: #91dcdb;
}

.folder-card:hover {
  transform: translateY(-4px);
  box-shadow:
    0 20px 25px rgba(0, 0, 0, 0.2),
    0 10px 10px rgba(0, 0, 0, 0.1);
}

.folder-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: white;
  border-radius: 1rem;
  clip-path: polygon(
    0%   0%,
    35%  0%,
    38%  16px,
    100% 16px,
    100% 100%,
    0%   100%,
    0%   16px
  );
  z-index: 0;
}

.folder-card__watermark {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: var(--watermark-width);
  height: var(--watermark-height);
  object-fit: contain;
  opacity: 0.1;
  pointer-events: none;
  z-index: 1;
}

.card-content {
  position: relative;
  z-index: 2;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  min-height: 17.5rem;
}
</style>
