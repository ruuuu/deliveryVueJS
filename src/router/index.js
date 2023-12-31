import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView  from '../views/ProductView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView  // на странице localhost:5173/ отобразится компонент HomeView
    },
    {
      path: '/rest',
      component: ProductView  // на странице localhost:5173/rest отобразится компонент ProductView
    },
    
  ]
})

export default router
