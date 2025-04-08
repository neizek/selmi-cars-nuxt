// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 compatibilityDate: '2024-11-01',
 devtools: { enabled: true },
 modules: ['nuxt-quasar-ui', 'nuxt-auth-utils', '@nuxtjs/i18n'],
 i18n: {
	defaultLocale: 'lv',
    locales: [
      { code: 'lv', name: 'Latviešu', file: 'lv.json' },
      { code: 'ru', name: 'Русский', file: 'ru.json' }
    ]
 },
	quasar: {
		config: {
			brand: {
				primary: '#008ccf',
				secondary: '#32cd32'
			},
		}
	}
})