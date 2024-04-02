// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: "Nyronium Network",
      link: [{ rel: 'icon', type: 'image/ico', href: 'data:image/svg+xml,%3Csvg viewBox=\'0 0 24 24\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\' class=\'size-12\'%3E%3Cpath fill-rule=\'evenodd\' clip-rule=\'evenodd\' d=\'M11 8L3 16H11L11 8ZM13 16L21 8L13 8V16Z\' fill=\'white\'/%3E%3C/svg%3E' }],
      meta: [{ name: "referrer", content: "no-referrer" }]
    },
  }
})
