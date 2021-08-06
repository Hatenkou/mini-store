import { $autHhost, $host } from './index';

export const regisctration = async (email, password) => {
   const response = await $host.post('/', { email, password, role: 'ADMIN' })
   return response
}
export const login = async (email, password) => {
   const response = await $host.post('api/auth/login', { email, password })
   return response
}
export const check = async () => {
   const response = await $host.post('api/auth/registration',)
   return response
}
