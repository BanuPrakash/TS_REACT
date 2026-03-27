import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type CartItem from "../../models/CartItem"
import type Product from "../../models/Product"

type CartState = {
    cartItems: CartItem[],
    quantity: number,
    total: number
}
const initialState:CartState = {
    cartItems : [],
    quantity: 0,
    total: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // state is clone passed and not direct reference
    addToCart : (state, action: PayloadAction<Product>) => {
            state.cartItems.push({...action.payload, qty: 1, amount: action.payload.price});
            state.quantity += 1;
            state.total += action.payload.price;
    },
    clearCart: (state) => {
        state.cartItems = [];
        state.total = 0;
        state.quantity = 0;
    },
    increment: (state, action: PayloadAction<number>) => {
        const item = state.cartItems.find(item => item.id === action.payload);
        if(item?.qty) {
            item.qty++;
            item.amount = item.qty * item.price
        }
        // state.total = state.cartItems.reduce( (i1, i2) => i1.amount + i2.amount));
    }
  },
})

export const cartReducer = cartSlice.reducer; // should be used to configure RootReducer
export const {addToCart, increment, clearCart} = cartSlice.actions // used by React Views