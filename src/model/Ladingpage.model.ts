export interface ProductType {
    id: number
    title: string
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[]
}

export interface ProductType2 {
    id: number
    Product_Name: string,
    Product_Code: string,
    Product_Group_Code: string,
    Product_Description: string,
    Product_Detail: string,
    Product_Price: number,
    Product_Images: string,
}

export interface CartType {
    id?: number
    Cart_Name?: string,
    Cart_Code?: string,
    Cart_Address?: string,
    Cart_Note?: string,
    Cart_PhoneNumber?: string,
    Cart_MethodPay?: string
}