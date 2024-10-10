import { routeNames, router } from '@/router'

export const useAuthStore = defineStore('authStore', () => {
  const accessToken = ref(localStorage.getItem('si-token'))
  const refreshToken = ref(localStorage.getItem('si-refresh-token'))

  function setToken (token: string, refresh: string) {
    accessToken.value = token
    refreshToken.value = refresh
    localStorage.setItem('si-token', token)
    localStorage.setItem('si-refresh-token', refresh)
  }

  function register (payload: ILoginRequest) {
    return authService.register(payload)
      .then((res) => {
        setToken(res.access_token, res.refresh_token)
      })
  }

  function login (payload: ILoginRequest) {
    return authService.login(payload)
      .then((res) => {
        setToken(res.access_token, res.refresh_token)
      })
  }

  function logout () {
    localStorage.clear()
    refreshToken.value = null
    accessToken.value = null
    window.location.href = router.resolve(routeNames.login).href
  }

  return {
    setToken,
    accessToken,
    refreshToken,
    login,
    logout,
    register
  }
})
