
type ProductType = {
    name: string,
    price : number,
    category: string
}

type Book = {
    title: string,
    price: number
}

// mapped type
type Immutable<T> = {
    readonly [P in keyof T]: T[P];
}

type Mutable<T> = {
    -readonly [P in keyof T]: T[P];
}

type OptionalType<T> = {
    [P in keyof T]?: T[P];
}

type ReadOnlyProductType = Immutable<ProductType>

let p: ReadOnlyProductType = {
    name: 'A',
    price: 100,
    category: 'C1'
}

type MutableProduct = Mutable<ReadOnlyProductType>

// p.name = "G";

let product1 : ProductType = {
    name: 'A',
    price: 2,
    category: 'X'
};

type OptProduct = OptionalType<ProductType>


function updateProduct(prd: OptProduct) {

}

updateProduct({"category": "GQA"});


