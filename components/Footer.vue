<template>
  <footer class="bg-white">
    <div class="mx-auto px-6 pt-16 pb-8 sm:pt-24 lg:px-[70px] lg:pt-16">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="space-y-8">
          <img class="h-9" :src="Logo" alt="Company name" />

          <p class="text-sm/6 text-balance text-gray-600">
            Your innovation deserves a smooth path to market.<br/>
            We manage regulatory and market entry challenges<br/>
            for medical devices worldwide.
          </p>
          <div class="flex gap-x-6">
            <a
              v-for="item in navigation.social"
              :key="item.name"
              :href="item.href"
              class="text-gray-600 hover:text-gray-800"
              target="_blank"
              rel="noopener"
            >
              <span class="sr-only">{{ item.name }}</span>
              <component :is="item.icon" class="size-6" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm/6 font-semibold text-gray-900">Services</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.services" :key="item.name">
                  <a :href="item.href" class="text-sm/6 text-gray-600 hover:text-gray-900">{{ item.name }}</a>
                </li>
              </ul>
            </div>
            <div class="mt-10 md:mt-0">
              <h3 class="text-sm/6 font-semibold text-gray-900">Resources</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.resources" :key="item.name">
                  <a :href="item.href" class="text-sm/6 text-gray-600 hover:text-gray-900">{{ item.name }}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="md:grid md:grid-cols-1">

            <div class="mt-10 md:mt-0">
              <h3 class="text-sm/6 font-semibold text-gray-900">Contact us</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.contactus" :key="item.name">
                  <a :href="item.href" class="text-sm/6 text-gray-600 hover:text-gray-900">{{ item.name }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
        <div class="flex gap-x-6 md:order-2">
          <a class="text-sm/6 text-gray-600 hover:text-gray-900">Terms & conditions</a>
          <a class="text-sm/6 text-gray-600 hover:text-gray-900">Privacy policy</a>
        </div>
        <p class="text-sm/6 text-gray-600">
          Copyright &copy; 2025 All Rights Reserved by 4betterdevices.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { defineComponent, h } from 'vue'
import Logo from '@/assets/images/4BetterDevicesLogo.png'

const navigation = {
  services: [
    { name: 'Clinical strategy & clinical evaluation', href: '#' },
    { name: 'Market access EU & US & International', href: '#' },
    { name: 'Real world evidence and studies', href: '#' },
    { name: 'Post market surveillance and follow up', href: '#' },
    { name: 'Risk management', href: '#' },
    { name: 'Biocompatibility', href: '#' },
  ],
  resources: [
    { name: 'Automated Review', href: '#' },
    { name: 'Regulatory Search Engine', href: '#' },
    { name: 'Guidances & Newsletter', href: '#' },
  ],
  aboutus: [
    { name: 'Cesare Magri', href: '#' },
    { name: 'Our Experts', href: '#' },
    { name: 'Our Company', href: '#' },
  ],
  contactus: [
    { name: 'info@4betterdevices.com', href: '#' },
    { name: 'Glogauer Str. 7 53117 Bonn, Germany', href: '#' },
  ],
  social: [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/4betterdevices', // replace with your actual LinkedIn URL
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              d:
                'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11.75 19h-2.5v-8.5h2.5v8.5zm-1.25-9.75c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm13 9.75h-2.5v-4.25c0-1.014-.021-2.316-1.413-2.316-1.413 0-1.629 1.103-1.629 2.244v4.328h-2.5v-8.5h2.4v1.163h.034c.335-.634 1.153-1.303 2.372-1.303 2.535 0 3.002 1.669 3.002 3.836v4.804z',
            }),
          ]),
      }),
    },
  ],
}
</script>
