<template>
  <div class="bg-white">
    <header class="inset-x-0 top-0 z-50 border-gray-100">
      <nav class="mx-auto flex items-center justify-between p-6 lg:px-[70px]" aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto" :src="Logo" alt="" />
          </a>
        </div>
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="size-6" aria-hidden="true" />
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-sm/6 font-semibold text-gray-900">{{ item.name }}</a>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
            <button type="button" class="relative inline-flex items-center gap-x-1.5 rounded-md bg-[#1E40AF] px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-[#1B3A9F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
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
              <img class="h-8 w-auto" :src="Logo" alt="" />
            </a>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="size-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a v-for="item in navigation" :key="item.name" :href="item.href" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">{{ item.name }}</a>
              </div>
              <div class="py-6">
                 <button type="button" class="relative inline-flex items-center gap-x-1.5 rounded-md bg-[#1E40AF] px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-[#1B3A9F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                    Talk to an expert
                </button>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
    <main>
      <div class="relative isolate">
        <svg class="absolute inset-x-0 top-0 -z-10 h-256 w-full mask-[radial-gradient(32rem_32rem_at_center,white,transparent)] stroke-gray-200" aria-hidden="true">
          <defs>
            <pattern id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
            <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" stroke-width="0" />
          </svg>
          <rect width="100%" height="100%" stroke-width="0" fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
        </svg>
        <div class="absolute top-0 right-0 left-1/2 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48" aria-hidden="true">
          <div class="aspect-801/1036 w-200.25 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30" style="clip-path: polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)" />
        </div>
        <div class="overflow-hidden">
          <div class="mx-auto px-6 pt-36 pb-32 sm:pt-60 lg:px-[70px] lg:pt-10">
            <div class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <div class="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
                <h1 class="text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl">We’re experts in <span class="text-[#0FB2B1] font-bold">Medical Devices.</span></h1>
                <p class="mt-8 text-lg font-medium text-pretty text-gray-500 sm:max-w-md sm:text-xl/8 lg:max-w-none">We handle regulations. You focus on growth.</p>
                <div class="mt-10 flex items-center gap-x-6">
                  <a href="#" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
                  <a href="#" class="text-sm/6 font-semibold text-gray-900">Live demo <span aria-hidden="true">→</span></a>
                </div>
              </div>
              <!--right side-->
              <div class="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                <div class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-0 xl:pt-80">
                  <div class="relative">
                    <img :src="Cesare" alt="" class="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                  </div>
                </div>
                <div class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                  <div class="relative">
                    <img :src="Cesare" alt="" class="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                  </div>
                  <div class="relative">
                    <img :src="Cesare" alt="" class="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                  </div>
                </div>
                <div class="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                  <div class="relative">
                    <img :src="Cesare" alt="" class="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                  </div>
                  <div class="relative">
                    <img :src="Cesare" alt="" class="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import Logo from '@/assets/images/4BetterDevicesLogo.png';
import Cesare from '@/assets/images/Cesare.jpg';

const navigation = [
  { name: 'Services', href: '#services' },
  { name: 'Resources', href: '#resources' },
  { name: 'Software', href: '#software' },
]

const mobileMenuOpen = ref(false)
</script>