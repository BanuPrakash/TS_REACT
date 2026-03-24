# Mastering React using TypeScript

```
Banu Prakash C
Full Stack Architect, Corporate Trainer
Co-founder & CTO: Lucida Technologies Pvt Ltd.,
Email: banuprakashc@yahoo.co.in
banuprakash.cr@gmail.com
https://www.linkedin.com/in/banu-prakash-50416019/

https://github.com/BanuPrakash/TS_REACT

Softwares Required:
NodeJS latest LTS
Chrome Web Browser
Visual Studio Code
```
PART 1: TypeScript

PART 2: React using TS, using Hooks, context, TanStack Query, React 18 and 19 new features and hooks, Server Components and Server actions using NextJS. React and OpenAI. 

PART 3: State Management using Redux ToolKit

Need Basic Working knowldege of React.

=========

TypeScript: JavaScript with Syntax for types.
Strongly Typed, statically typed language

JavaScript is loosely typed and dynamically typed language.
let name = "Raj";  // infers to string
name = 52; // valid in JS , infers to a number

TypeScript becomes JavaScript via the delete key.

TypeScript code is converted into JS, which can run on any Browser, NodeJS, Deno, Bun, ..

Prefer TS for better development, code quality, better tooling.

======================

Part 1:
npm install typescript -g
-- provides "tsc" compiler
-- provides type system [type declaration]

Product.ts [type def] -- tsc Product.ts -- Product.js [without typesystem]

```
Create Node Project:
 npm init --y
Install Typescript:
npm install typescript

Gives: lib.d.ts

/// <reference lib="es5" />
/// <reference lib="dom" />
/// <reference lib="webworker.importscripts" />
/// <reference lib="scripthost" />

```

Controlling how tsc should behave using tsconfig.json

tsc --init 
"noEmitOnError": true, --> No JS file if ts issues exist in file.

 "module": "commonjs",   suggestion to tsc to generate code to use commonjs instead of ESM, AMD, UMD, SystemJS

 CommonJS Module system uses "module.exports" to export a member and "require" to import a member.
 ESM: uses "exports" and "import"

 Note: By default NodeJS understands CommonJS module system
   "rootDir": "./src", 
  "outDir": "./build/js", 
   "include": ["./src/**/*.ts"] -- compile only files presnt in "src" and it's sub-folders
=====
"lib": []: Default it includes "es5" and "dom" libraries
 "lib": ["ES2023.Array", "dom"],

Controlling Globals:
 "types": ["jquery", "jest"]

npm i jquery jest
```
    $ is a global member of jQuery,
    it, describe, .. are global members of jest

  
    $("div")

    it("test add Product, () => {

    });
```

"noUncheckedIndexedAccess": true, ==> Pending

=========================

1) Basic Types: string, number and boolean
2) function type
3) undefined, null [ specifially used to reference an object or callbacks]

```
const fs = require('fs');
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err === null) throw err;
  console.log(data);
});

```

4) unknown type and any type
unknown: enforces typechecking before using it.

let data:any = doTask(); // could be any JS function, could return JSON / string/ errorcode

=======

* We have more information about the type that TS can't know about.

TypeAssertion aka TypeCasting
TypePredicate

==========

5) type Type: for custom types, like struct of C
To Provide shape of Object

```
    type Product = {
        id: number,
        name: string,
        price?: number
    }

    function addProduct(product: Product) {
        //
    }
    addProduct({"id": 52, "name": "Wacom", "price": 5460.11});

    addProduct({"id": 52, "name": "Wacom" }); // VALID
    
* Type Intersection [&] like Specialization
type Mobile = Product & {
    connectivity: string
}

let m: Mobile = {"id": 52, "name": "MotoG", "price": 5460.11, "connectivity": "5G"}

* Union Type [ | ]

type Address  = string | string[];
const myAddress: Address = "MG Road";
const officeAddress = ["Lavelle Road", "Church street"];


Note: prefer adding type definitions in a seperate file "types.d.ts"
export type Product = {
        id: number,
        name: string,
        price?: number
}

Usage:
import {Product} from './types'

 "skipLibCheck": true   
```

=============

Recursive types in TypeScript are type definitions that reference themselves, allowing for the modeling of complex, nested, or hierarchical data structures like linked lists, trees, and JSON objects

```
type NestedArray = number[][][];
Prefer:
type NestedArray = number | NestedArray[];

const data: NestedArray = [1,[2,3],[4,5], [6,7]]];

type Json =

  | string
  | number
  | boolean
  | null
  | Json[] // Array of Json
  | { [key: string]: Json }; // Object with Json properties
<!-- 
Preffered
type RestrictedJson = {
    { [key: string]: Json }
} -->
const data: Json = "Hello";

const data: Json = {"name": "A", "age": 23};
const data: Json = [{"name": "A", "age": 23}, {"name": "B", "age": 42}]
```

======================

Template Literal types: 
Used to expand into many strings via unions
==========

Index Signatures and keyof:
```
type Type = {
    [key: key_type]: return_type
}
```

Alternatively use Record in TS

================================

Branded types in TypeScript are a pattern used to create distinct, semantically meaningful types from existing primitive types.

enhances type safety by preventing values of one branded type from being accidentally used where another is expected at compile time.

* Enhanced Type Safety:
* Clarity and Readability

```

type UserId = string & { __brand: 'UserID' };
type PostId = string & { __brand: 'PostID' };

function getPostById(id: PostId) { /* ... */ }

function getCommentsForPost(postId: PostId, authorId: UserId) { /* ... */ }

const myUserId = "user-123" as UserId;
const myPostId = "post-456" as PostId;

getCommentsForPost(myPostId, myUserId); // Works


```
Comeback to Mapped Types in Typescript

Generics:

```
    function filter<T>(elems: T[], predicateFn: (elem: T) => boolean) : T[] {
        ///
    }

    let numbers: number[] = [6,1,3,8,9,2,11,24];

    // T is a number
    let result = filter(numbers, (no) => no % 2 === 0);

    type Product = {id:number: title: string: category:string, price:number};
    
    let products: Product[] = [
        {"id": 41, "title": "A", "category": "mobile", price: 5424.22},
        {"id": 41, "title": "A", "category": "mobile", price: 5424.22},
        {"id": 41, "title": "A", "category": "mobile", price: 5424.22},
        {"id": 41, "title": "A", "category": "mobile", price: 5424.22},
        {"id": 41, "title": "A", "category": "mobile", price: 5424.22},  
        {"id": 41, "title": "A", "category": "mobile", price: 5424.22},
    ]

    // T is treated as Product
    let mobiles = filter(products, p => p.category === 'mobile');


    function map<T, R>(elems: T[], transformFn: (elem: T) => R): R[] {
        ...
    }

    // T is Product
    // R is a string
    // R[] is array of names
    let names:string[] = map(products, p => p.name);

```


Mapped Types: generic Type which uses a Union of Property keys to iterate thro keys and create a type.

infer, class type, decorator, ...

=======================================

Recap:
TypeScript types:
1) basic types: string, number and boolean
2) enum
3) any vs unknown
4) The type : Shape of object, union, intersection
5) generics
6) MappedType: Iterate thro keys and create a new type like Immutable, Mutable, ReadOnly, ...
7) Template literal string `` -> `${ChessLetter}${ChessNumbers}` -- 64 types, CSS Box Model

Day 2:

Conditional Types using Generics

```
    type NonNull<T> = T extends null | undefined ? never : T;

    function addProduct(name: NonNull<string>) {

    }

    addProduct(null); // throws Error

    let newName: NonNull<string> = "Smith";
    addProduct(newName);
```

The infer keyword:
Used within conditional type to extract "infer" a type from another type.
Works with Conditional Type.

TS Utilites based on Mapped Type and infer:
1) Partial
2) Pick
3) Omit
4) NonNullable
5) ReturnType

===================

Type interface:
Prefer type over interface, but interface is specific to objects
```
    type Address = string; // valid
    interface Address = string; // invalid

    interface Product {
        name: string,
        price: number
    }

    interface Mobile extends Product {
        connectivity: string
    }

    let mobile: Mobile = {"name": "A", price: 134, connectivity: "5G"};

    Prefer interface for Realization relationship

    interface Renderer {
        render(): JSX
    }

    class DomRenderer implements Renderer {
        ...
        render():JSX {
            ...
        }
    }

    class TvRenderer implements Renderer {
        ...
        render(): JSX {

        }
    }
```

Decorators: Special kind of declaration that can be attached to a class, method, accessor and property.
use the form @expression, @expression will be called at runtime
-- MetaProgramming like Annotation of Java

TypeScript 4: "experimentalDecorators"
 "experimentalDecorators": true,  in tsconfig.json

class Decorator

function decorator(constructor: Function) {

}

Field Decorator:
function (target: any, propertyKey:string) {

}

@Min
price: number

Method Decorator:
function (target: any, methodName:string, descriptor?: PropertyDescriptor) {

}

TypeScript 5: no longer experimaentalDecorators

