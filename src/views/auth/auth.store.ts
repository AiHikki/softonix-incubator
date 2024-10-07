import { routeNames, router } from '@/router'

export const useAuthStore = defineStore('authStore', () => {
  // const accessToken = ref(localStorage.getItem('si-token'))

  // function setToken (token: string) {
  //   accessToken.value = token
  //   localStorage.setItem('si-token', token)
  // }

  const authTokens = ref<IAuthTokens>(JSON.parse(localStorage.getItem('authTokens')) || {
    accessToken: null,
    refreshToken: null,
    expiresAt: null
  })

  function setTokens (tokenObject: IAuthTokens) {
    authTokens.value = tokenObject
    localStorage.setItem('authTokens', JSON.stringify(tokenObject)) // Store as JSON string
  }

  function register (payload: ILoginRequest) {
    return authService.register(payload)
      .then((res) => {
        setTokens({
          accessToken: res.access_token,
          refreshToken: res.refresh_token,
          expiresAt: res.expires_at
        })
      })
  }

  function login (payload: ILoginRequest) {
    return authService.login(payload)
      .then((res) => {
        setTokens({
          accessToken: res.access_token,
          refreshToken: res.refresh_token,
          expiresAt: res.expires_at
        })
      })
  }

  function logout () {
    localStorage.removeItem('authTokens')
    authTokens.value = { accessToken: null, refreshToken: null, expiresAt: null }
    window.location.href = router.resolve(routeNames.login).href
  }

  return {
    // accessToken,
    setTokens,
    authTokens,
    login,
    logout,
    register
  }
})
