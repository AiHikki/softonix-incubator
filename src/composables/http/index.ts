import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    apikey: import.meta.env.VITE_API_KEY
  }
})

instance.interceptors.request.use(
  config => {
    const { accessToken } = useAuthStore()

    if (accessToken) {
      config.headers.authorization = `Bearer ${accessToken}`
    }

    return config
  }
)

instance.interceptors.response.use(
  res => res.data,
  async error => {
    const { logout, refreshToken, setToken } = useAuthStore()
    const originalRequest = error.config

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      try {
        const res = await authService.refreshToken(refreshToken)
        setToken(res.access_token, res.refresh_token)
        instance.defaults.headers.authorization = `Bearer ${res.access_token}`
        return instance(originalRequest)
      } catch (refreshError) {
        logout()
        return Promise.reject(refreshError)
      }
    }

    return Promise.reject(error)
  }
)

export const useHttp = instance
