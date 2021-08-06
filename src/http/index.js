import axios from "axios";
const $host = axios.create({
   baseURL: ''
})
const $autHhost = axios.create({
   baseURL: ''
})
const authInterceptor = config => {
   config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
   return config
}

$autHhost.interceptors.request.use(authInterceptor)

export {
   $host,
   $autHhost
}