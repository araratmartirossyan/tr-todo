import axios, { AxiosPromise, AxiosRequestConfig } from 'axios'

const BASE_API_URL = import.meta.env.VITE_API_URL as string
const axiosInstance = axios.create()

axiosInstance.defaults.baseURL = `${BASE_API_URL}/api/v1/`

const axiosFn = <T = void>(config: AxiosRequestConfig) => {
  const request: AxiosPromise<T> = axiosInstance({
    ...config,
  })

  return request as any as Promise<T>
}

export default axiosFn
