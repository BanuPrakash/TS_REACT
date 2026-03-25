import type CartItem from "../models/CartItem";
import type Product from "../models/Product";

type Action = {type: 'ADD_TO_CART', payload: Product} | 
                {type: 'CLEAR_CART'} |
                {type: 'INCREMENT', payload: number}

export interface CartStateType {
    items: CartItem[],
    quantity: number,
    total: number
}
export default function cartReducer(state: CartStateType, action : Action) {
    switch(action.type) {
        case 'ADD_TO_CART':
            const product = {...action.payload}
            let item :CartItem = {...product, qty: 1, amount: product.price}
            // return new object
            // no usage of state.items.push(item)
            return {
                items: [...state.items, item],
                quantity : state.quantity + 1,
                total: state.total + item.amount
            }
        case 'INCREMENT':
            return state;
        case 'CLEAR_CART': 
            // make API to place Order on server
            return {
                items: [],
                quantity: 0,
                total: 0
            }
        default:
            return state;
    }
}