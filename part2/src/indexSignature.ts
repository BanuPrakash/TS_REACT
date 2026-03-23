// type Product = {
//     name: string,
//     price : number
// }

// const product:Product = {
//     name : 'iPhone',
//     price: 98000.00
// }

// console.log(product['price']); // works

// let key = 'name';
// console.log(product[key]); // error

type Product = {
    name: string,
    price : number,
    readonly [key: string]:  string | number | string[] | boolean // index signature
}

const product:Product = {
    name : 'iPhone',
    price: 98000.00
}

console.log(product['price']); // works

 let key = 'name';
console.log(product[key]); // error

// product['category'] = 'mobile'; not allowed with readonly key

for(const key in product) {
    console.log(product[key]);
}

// keyof instead of index Signature

type User = {
    name: string,
    age: number
}

let user:User = {
    "name" : "smith",
    "age": 31
}

for(const key in user) {
    // console.log(user[key]); -- used with index signature
    console.log(user[key as keyof typeof user]);
}