/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'

const detectBaseUrl = (): string => {
  return  'https://lyrics-lab-api.onrender.com/api'
}

export const axiosInstance = axios.create({
  baseURL: detectBaseUrl(),
  withCredentials: true,
})

export async function login(email: string, password: string) {
  try {
    const response = await axiosInstance.post('auth/login', {
      email,
      password,
    })
    const data = response.data
    return data
  } catch (error: any) {
    throw new Error(error || 'Erro na requisição.')
  }
}


export async function verifySession() {
  await axiosInstance.get('/auth/verify-session')
  return true
}

export async function register(name: string, email: string, password: string) {
  try {
    await axiosInstance.post('/auth/register', { name, email, password })
  } catch (error: any) {
    throw new Error(error || 'Erro na requisição.')
  }
}
