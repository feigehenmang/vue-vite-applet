import { createApp } from 'vue'
import { createPinia } from 'pinia'
import elementPlugin from '@/plugins/element.js'
import '@/styles/index.scss'
import router from './router'
import App from './App.vue'

createApp(App).use(elementPlugin).use(createPinia()).use(router).mount('#app')
