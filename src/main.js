import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 批量引入element3
import elementPlugin from '@/plugins/element.js'
import utilPlugin from '@/plugins/utils.js'
import router from './router'
import App from './App.vue'
import '@/styles/reset.scss'

createApp(App).use(elementPlugin).use(utilPlugin).use(createPinia()).use(router).mount('#app')
