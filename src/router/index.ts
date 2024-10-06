import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

export * from './route-names'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  // const { accessToken, logout } = useAuthStore()
  const { authTokens, logout } = useAuthStore()

  if (!authTokens.accessToken && to.meta.isProtected) {
    next(false)
    return logout()
  }

  next()
})
