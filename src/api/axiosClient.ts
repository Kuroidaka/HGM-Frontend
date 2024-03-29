import axios, { AxiosResponse } from "axios";

// api test


export const axiosClientTest = axios.create({
    baseURL: 'https://dummyjson.com',
})

axiosClientTest.interceptors.request.use(async config => {
    return config;
  },
  error => {
    Promise.reject(error)
})

axiosClientTest.interceptors.response.use((res:AxiosResponse<any, any>) => {
    if( res && res.data ){
        return res.data
    }

    return res
}, error => {
    
    // throw error
    console.log(error.response.data);
    
    return error.response.data
})

// api

const axiosClient = axios.create({
    baseURL: 'http://localhost:4000/api/v1',
    headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
})

axiosClient.interceptors.request.use(async config => {
    return config;
  },
  error => {
    Promise.reject(error)
})

axiosClient.interceptors.response.use((res:AxiosResponse<any, any>) => {
    if( res && res.data ){
        return res
    }

    return res
}, error => {
    
    // throw error
    console.log(error.response.data);
    
    return error.response.data
})

export default axiosClient