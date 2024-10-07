import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    apikey: import.meta.env.VITE_API_KEY
  }
})

function isTokenExpired (expiresAt: number) {
  const currentTime = Math.floor(Date.now() / 1000)
  return expiresAt && currentTime >= expiresAt - 60
}

instance.interceptors.request.use(
  config => {
    const { authTokens, setTokens, logout } = useAuthStore()
    const { accessToken, refreshToken, expiresAt } = authTokens

    // if (accessToken) {
    //   config.headers.authorization = `Bearer ${accessToken}`
    // } else if ((!accessToken || isTokenExpired(expiresAt)) && refreshToken) {
    //   authService.refreshToken(refreshToken).then(res => {
    //     config.headers.authorization = `Bearer ${res.access_token}`
    //     setTokens({
    //       accessToken: res.access_token,
    //       expiresAt: res.expires_at,
    //       refreshToken: res.refresh_token
    //     })
    //   })
    // } else {
    //   logout()
    // }

    // The code above isn't working properly, too many requests are sent. I couldn't understand how to refresh token properly)

    if (accessToken) {
      config.headers.authorization = `Bearer ${accessToken}`
    }

    return config
  }
)

instance.interceptors.response.use(
  res => res.data,
  error => {
    console.log(error)

    const { logout } = useAuthStore()
    if (error.response?.status === 401) {
      logout()
    }

    return Promise.reject(error)
  }
)

export const useHttp = instance
