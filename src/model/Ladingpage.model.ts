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
    Product_Images_Arr: string[],
    Product_Number: number,

}

export interface CartType {
    id?: number,
    Cart_Code?: string,
    Cart_Name?: string,
    Cart_PhoneNumber?: string,
    Cart_Email?: string,
    Cart_Note?: string,
    Customer_Code?: string,
    Cart_MethodPay? :string,
    Cart_Amount?: number,
    Product_List?: CartDetailType[],
    CartDetails? :CartDetailType[],
    Status?: string,
}

export interface CartDetailType {
    id?: number,
    Cart_Detail_Product?: string,
    Cart_Detail_Amount?: string,
    Cart_Detail_Price?: string,
    Cart_Detail_Quantity?: number | null,

}