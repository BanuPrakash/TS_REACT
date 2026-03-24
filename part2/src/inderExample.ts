function doTask() {
    return {
        "name": "Roger",
        "age" : 31,
        "place": "India"
    }
}

function add(x: number, y: number ) {
    return x + y;
}

// I need to know the return type of a function

type ReturnTypeOf<T> = T extends (...args: any[]) => infer R ? R : never

type DoTaskResult = ReturnTypeOf<typeof doTask>;

let result: DoTaskResult = doTask();
console.log(result.name + ", " + result.age);

type FetchResultType = ReturnTypeOf<typeof fetch>

let fetchResult: FetchResultType = fetch("");


//**************** 

type Props = {
    name:string, 
    price: number
}

// Extract argument type
function addProduct(props: Props, category: string) {

}

type FirstArgType<T> = T extends (arg1: infer U, ...args: any[]) => any ? U : never

type FirstArgAddProduct = FirstArgType<typeof addProduct>

let arg1: FirstArgAddProduct = {
    name: "A",
    price: 22
}

type MyParam<T> = T extends(...args: infer P) => any ? P : never;

type Params = MyParam<typeof addProduct>

let props:Props = {name: "P1", price: 444};
let addProductParams: Params = [ props,"C"];

// ==========

type ExtractWord<S>  = S extends `${infer W} ${infer R}` ? W : S; 

type W = ExtractWord<"Have a Nice Day!!!">