import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/pages/Login/Login.vue'), // 注意这里要带上 文件后缀.vue
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router

