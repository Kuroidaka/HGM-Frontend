
import axios from "axios"
import { ProductType } from "~/model/Ladingpage.model"
import axiosClient, { axiosClientTest } from "../axiosClient"


export const productApi = {

    getListProduct: () => {
        const url = `/products`
        
        return axiosClientTest.get(url)
    },
    search: (data: ProductType | any) => {
        const url = ` http://localhost:4000/api/v1/product/search`
        
        return axios.post(url,data)
    },
  
}