import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
import utilsPlugin from '@/plugins/utils'
import '@/styles/reset.scss'
import { createPinia } from 'pinia'

createApp(App).use(createPinia()).use(utilsPlugin).use(router).mount('#app')
