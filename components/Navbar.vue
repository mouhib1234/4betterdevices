<template>
  <header
    :class="[
      'inset-x-0 top-0 z-50 lg:px-[100px] fixed p-4 transition-colors duration-300 ease-in-out',
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    ]"
  >
    <nav class="mx-auto flex items-center justify-between" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img
            class="h-8 w-auto"
            :src="isScrolled ? LogoScrolled : LogoDefault"
            alt="Company Logo"
          />
        </a>
      </div>

      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="size-6" aria-hidden="true" />
        </button>
      </div>

      <div class="hidden lg:flex lg:gap-x-12">
        <a
          v-for="item in navigation"
          :key="item?.name"
          :href="item?.href"
          :class="[
            'text-md transition-colors duration-300',
            isScrolled ? 'text-gray-800' : 'text-white'
          ]"
        >
          {{ item.name }}
        </a>
      </div>

      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <button
          type="button"
          class="inline-flex items-center justify-center px-5 py-2 font-sans bg-[#0FB2B1] text-base font-normal leading-7 transition-all duration-200 rounded-full text-white border-primary focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary hover:bg-white hover:text-black"
        >
          Talk to an expert
        </button>
      </div>
    </nav>

    <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-50" />
      <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img
              class="h-8 w-auto"
              :src="isScrolled ? LogoScrolled : LogoDefault"
              alt="Company Logo"
            />
          </a>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="size-6" aria-hidden="true" />
          </button>
        </div>

        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <a
                v-for="item in navigation"
                :key="item?.name"
                :href="item?.href"
                class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
              >
                {{ item?.name }}
              </a>
            </div>
            <div class="py-6">
              <button
                type="button"
                class="inline-flex items-center justify-center w-full px-5 py-2 font-sans bg-[#1B3A9F] text-base font-normal leading-7 transition-all duration-200 border-2 rounded-full text-white border-primary focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary hover:bg-white hover:text-black"
              >
                Talk to an expert
              </button>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

import LogoDefault from '@/assets/images/4BetterDevicesWhiteLogo.png';
import LogoScrolled from '@/assets/images/4BetterDevicesLogo.png'

const navigation = [
  { name: 'Services', href: '#services' },
  { name: 'Resources', href: '#resources' },
  { name: 'Testimonials', href: '#testimonials' },
]

const mobileMenuOpen = ref(false)
const isScrolled = ref(false)

function handleScroll() {
  isScrolled.value = window.scrollY > 0
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
