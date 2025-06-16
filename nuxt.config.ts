// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss', '@nuxt/image'],
  app: {
    head: {
      titleTemplate: '%s - 4BetterDevices',
    },
  },
  build: {
    transpile: ['@vuepic/vue-datepicker'],
  },
  runtimeConfig: {
    safetyInformationUrl: '',
    softwaresNocoUrl: '',
    softwaresTypeNocoFieldUrl: '',
    softwaresCompanyNocoFieldUrl: '',
    public: {
      kratosUrl: '',
    },
  },
});
