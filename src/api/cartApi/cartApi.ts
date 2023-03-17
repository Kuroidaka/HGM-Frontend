
import axios from "axios"
import { CartType, ProductType } from "~/model/Ladingpage.model"
import axiosClient, { axiosClientTest } from "../axiosClient"



export const CartApi = {
    create: (data: CartType) => {
        const url = '/Cart/create'

        return axiosClient.post<CartType>(url, data)
    },
    getListProduct: () => {
        const url = `/products`
        
        return axiosClientTest.get(url)
    },
    search: (data: ProductType | any) => {
        const url = ` http://localhost:4000/api/v1/cart/search`
        
        return axios.post(url,data)
    },
  
}