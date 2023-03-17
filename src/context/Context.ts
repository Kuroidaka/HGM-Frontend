import { createContext } from "react";
import { ProductType, ProductType2 } from "~/model/Ladingpage.model";

export interface CartContextValue {
    handleOpen: () => void,
    productList: ProductType2[],
    handleAddProduct: (data: ProductType2 | undefined) => void,

}

export interface ProductContextValue {
    productList: ProductType2[]
}

export const CartContext = createContext<CartContextValue>({
    handleOpen: () => {},
    handleAddProduct: () => {},
    productList: [],
})

export const ProductContext = createContext<ProductContextValue>({
    productList: []
})