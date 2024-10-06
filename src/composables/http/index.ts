import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    apikey: import.meta.env.VITE_API_KEY
  }
})

let isRefreshing = false
let failedQueue = []

const processQueue = (error, token = null) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error)
    } else {
      prom.resolve(token)
    }
  })

  failedQueue = []
}

function isTokenExpired (expiresAt: number) {
  const currentTime = Math.floor(Date.now() / 1000)
  return expiresAt && currentTime >= expiresAt - 60 // 60 seconds buffer before expiry
}

instance.interceptors.request.use(
  async (config) => {
    const { authTokens, setTokens, logout } = useAuthStore()
    const { accessToken, refreshToken, expiresAt } = authTokens

    if (accessToken) {
      // Check if the token is close to expiring
      if (isTokenExpired(expiresAt)) {
        if (!isRefreshing) {
          isRefreshing = true
          try {
            const res = await authService.refreshToken(refreshToken)
            setTokens({
              accessToken: res.access_token,
              refreshToken: res.refresh_token,
              expiresAt: res.expires_at
            })

            // Retry failed requests with the new token
            processQueue(null, res.access_token)
          } catch (error) {
            processQueue(error, null)
            logout()
          } finally {
            isRefreshing = false
          }
        }

        // If the token is refreshing, return a promise that resolves when it's done
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject })
        })
      }
    }

    config.headers.authorization = `Bearer ${accessToken}`
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
