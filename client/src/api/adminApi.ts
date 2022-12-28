import axiosClient from "./axiosClient"

export interface resgiterApi{
    User_Account_Name: string,
    User_Account_Password: string,
    // User_Account_Email: string,
    User_Account_Permission: string
}   

export const adminApi = {

    register: (data: resgiterApi) => {
        const url = '/user/register'

        console.log(data);
        
        return axiosClient.post(url, data)
    }

}