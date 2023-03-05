import { createContext } from "react";

export interface CartContextValue {
    handleOpen: () => void
}

export const CartContext = createContext<CartContextValue>({
    handleOpen: () => {}
})