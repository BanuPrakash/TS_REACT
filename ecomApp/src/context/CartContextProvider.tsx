import { createContext, useReducer, type ReactNode } from "react"
import type CartItem from "../models/CartItem";
import cartReducer, { type CartStateType } from "../reducers/cartReducer";
import type Product from "../models/Product";

type ContextType = {
    items: CartItem[],
    quantity: number,
    total : number,
    addCart: (product:Product) => void,
    checkout: () => void
}
export const CartContext = createContext<ContextType>({
    items: [],
    quantity: 0,
    total: 0,
    addCart:  (product:Product) => {},
     checkout: () => {}
});


const initialState: CartStateType = {
    items: [],
    quantity: 0,
    total: 0
}

type Props = {
    children: ReactNode
}
export default function CartContextProvider({children}: Props) {

  let [state, dispatch] = useReducer(cartReducer, initialState);

  function addCart(product: Product) {
     dispatch({type:'ADD_TO_CART', payload: {...product}})
  }

  function checkout() {
     dispatch({type:'CLEAR_CART'})
  }

  return (
    <CartContext.Provider value={{...state, addCart, checkout}}>
            {children}
    </CartContext.Provider>
  )
}
