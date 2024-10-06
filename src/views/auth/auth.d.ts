interface ILoginRequest {
  email: string
  password: string
}

interface IAuthTokens {
  accessToken: string
  refreshToken: string
  expiresAt: number
}
