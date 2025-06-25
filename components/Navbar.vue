<template>
  <header
    :class="[
      'inset-x-0 top-0 z-50 lg:px-[70px] fixed p-4 transition-colors duration-300 ease-in-out',
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    ]"
  >
    <nav class="mx-auto flex items-center p-0" aria-label="Global">
      <div class="flex">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img
            class="h-8 w-auto"
            :src="isScrolled ? LogoScrolled : LogoDefault"
            alt="Company Logo"
          />
        </a>
      </div>

      <div class="flex lg:hidden ml-auto">
        <button
          type="button"
          :class="[
            '-m-2.5 inline-flex items-center justify-center rounded-md p-2.5',
            isScrolled ? 'text-gray-700' : 'text-white'
          ]"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="size-6" aria-hidden="true" />
        </button>
      </div>

      <div class="hidden lg:flex lg:items-center lg:ml-auto lg:gap-x-12">
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          :class="[
            'text-md font-semibold transition-colors duration-300',
            isScrolled ? 'text-gray-800' : 'text-white'
          ]"
        >
          {{ item.name }}
        </a>

        <a
          type="button"
          href="#contact"
          class="
            relative inline-flex items-center justify-center
            px-5 py-2 text-base font-semibold leading-7 font-sans
            bg-[#0fb2b1] text-white rounded-full
            border border-transparent
            shadow-[0_4px_15px_rgba(15,178,177,0.5)]
            ring-1 ring-[#0FB2B1] ring-opacity-50
            transition-all duration-300 transform
            hover:shadow-[0_6px_20px_rgba(15,178,177,0.7)]
            hover:ring-opacity-100
            hover:-translate-y-0.5
            active:translate-y-0.5
            focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#0fb2b1] focus:ring-offset-secondary
          "
        >
          Talk to an expert
      </a>
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
                :key="item.name"
                :href="item.href"
                class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
              >
                {{ item.name }}
              </a>
            </div>
            <div class="py-6">
              <button
                type="button"
                class="
                  relative inline-flex items-center justify-center
                  w-full px-5 py-2 text-base font-normal leading-7 font-sans
                  bg-[#0FB2B1] text-white rounded-full
                  border border-transparent
                  shadow-[0_4px_15px_rgba(15,178,177,0.5)]
                  ring-1 ring-[#0FB2B1] ring-opacity-50
                  transition-all duration-300 transform
                  hover:shadow-[0_6px_20px_rgba(15,178,177,0.7)]
                  hover:ring-opacity-100
                  hover:-translate-y-0.5
                  active:translate-y-0.5
                  focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#0FB2B1] focus:ring-offset-secondary
                "
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

import LogoDefault from '@/assets/images/4BetterDevicesWhiteLogo.png'
import LogoScrolled from '@/assets/images/4BetterDevicesLogo.png'

const navigation = [
  { name: 'Resources', href: '#resources' },
  { name: 'Services', href: '#services' },
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
