
import axiosClient, { axiosClientTest } from "../axiosClient"


export const productApi = {

    getListProduct: () => {
        const url = `/products`
        
        return axiosClientTest.get(url)
    },
    
  
}