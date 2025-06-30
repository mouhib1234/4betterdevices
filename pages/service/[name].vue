<template>
  <div v-if="!notFound">
    <div>
      <banner :service="service!" />
    </div>
    <div class="max-w-6xl mx-auto bg-white rounded-lg overflow-hidden">
     <section class="px-6 py-12 lg:py-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">About This Service</h2>
        <p class="text-lg leading-relaxed text-gray-700">
          {{ service?.description }}
        </p>
      </section>
      <section class="px-6 py-10">
        <div class="space-y-10">
          <div
            v-for="(card, i) in cards"
            :key="i"
            class="flex flex-col lg:flex-row items-start bg-white rounded-lg hover:shadow-lg transition"
            :class="{ 'lg:flex-row-reverse': i % 2 === 1 }"
          >
            <img
              :src="card.img"
              :alt="card.alt"
              class="w-full lg:w-1/2 h-auto object-cover rounded-md mb-4 lg:mb-0 bg-gray-800"
            />
            <div class="w-full lg:w-1/2 lg:px-6">
              <h2 class="text-2xl font-semibold text-gray-900 mb-2">{{ card.title }}</h2>
              <p class="text-gray-600 leading-relaxed">{{ card.text }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>

  <div v-else class="p-4 text-center">
    <h2 class="text-2xl font-semibold text-gray-800 mb-2">Service not found</h2>
    <p class="text-gray-600">
      We couldn’t find a service called “<strong>{{ nameParam }}</strong>”.
    </p>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useService } from '~/composables/useService'
import { reactive } from 'vue'
import Banner from '@/components/banners/servicebanner.vue'

definePageMeta({
  layout: 'servicelayout',
});

const route = useRoute()
const nameParam = String(route.params.name)
const { service, notFound } = useService(nameParam)

const cards = reactive([
  {
    img: 'https://medenvoyglobal.com/wp-content/uploads/2025/04/Compliance-Done-Remotely-Without-Disrupting-Your-Supply-Chain-1.png',
    alt: 'Compliance',
    title: 'Compliance Done Remotely Without Disrupting Your Supply Chain',
    text:
      'We perform many tasks to ensure your ongoing compliance with the EU, UK, Swiss, and India regulations without the need to take title or take physical possession of your devices. Our compliance checks are done electronically and efficiently. By reviewing and confirming compliance after you have already shipped your devices, it is not necessary for you to hold up shipments or alter the way you ship today.'
  },
  {
    img: 'https://medenvoyglobal.com/wp-content/uploads/2025/04/Streamline-Operations-with-a-Proven-Process.png',
    alt: 'Streamline Operations',
    title: 'Streamline Operations with a Proven Process',
    text:
      'Our compliance checks are done electronically and efficiently. By reviewing and confirming compliance after you have already shipped your devices, it is not necessary for you to hold up shipments or alter the way you ship today.'
  },
  {
    img: 'https://medenvoyglobal.com/wp-content/uploads/2025/04/Maintain-Flexibility-and-Commercial-Control-1.png',
    alt: 'Maintain Flexibility',
    title: 'Maintain Flexibility and Commercial Control',
    text:
      'As an “Independent” Regulatory Importer, MedEnvoy is solely focused on executing importer obligations and ensuring compliance. There is no need to take physical possession of your devices, so you won’t need to change the way you do business to meet the many regulatory requirements.'
  }
])
</script>

<style scoped>
a:focus {
  outline: 2px solid #00bcd4;
  outline-offset: 2px;
}
</style>
