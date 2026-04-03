import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes.js'

const APP_TITLE = 'Amit kumar'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 70,
      }
    }
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
})

router.afterEach((to) => {
  const pageTitle = to.meta?.title
  document.title = pageTitle ? `${pageTitle} | ${APP_TITLE}` : APP_TITLE
})

export default router
