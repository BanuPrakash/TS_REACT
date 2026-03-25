import type Product from "./Product";

export default interface CartItem extends Product {
    qty: number,
    amount: number // price * qty + tax - discount
}