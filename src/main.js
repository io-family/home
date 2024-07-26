/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

// locale files
import en_ca from '@/assets/i18n/en-ca.json'
import zh_cn from '@/assets/i18n/zh-cn.json'

const app = createApp(App)
const i18n = createI18n({
    legacy: false,
    locale: navigator.language.toLowerCase(),
    fallbackLocale: 'en-ca',
    messages: {
        'en-ca': en_ca,
        'zh-cn': zh_cn
    }
})

registerPlugins(app)
app.use(i18n)
app.mount('#app')
