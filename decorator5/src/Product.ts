import RangeValue from "./Range";
export default class Product {
    name: string;

    @RangeValue(1, 5000)
    accessor price: number;

    constructor(n: string, p: number) {
        this.name = n;
        this.price = p;
    }
}

let product: Product = new Product("A", -14);
console.log(product.name , product.price);