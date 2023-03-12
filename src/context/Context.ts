import { createContext } from "react";
import { ProductType } from "~/model/Product.model";

export interface CartContextValue {
    handleOpen: () => void
}

export interface ProductContextValue {
    productList: ProductType[]
}

export const CartContext = createContext<CartContextValue>({
    handleOpen: () => {}
})

export const ProductContext = createContext<ProductContextValue>({
    productList: []
})