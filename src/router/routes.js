import HomeView from '@/views/HomeView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

/**
 * Central route table. Add lazy imports with `() => import('...')` for code-splitting when routes grow.
 */
export const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'Home' },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundView,
    meta: { title: 'Page not found' },
  },
]
