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

```
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

```

TypeScript 5: no need for  "experimentalDecorators": true,  

aligns wiht ECMAScript State 3 proposal.

```
    function decoratorName(_: any, context:ClassDecoratorContext | ClassFieldDecoratorContext| ClassMethodDecoratorContext | ClassAccessorDecoratorContext) {}
```

Memoization is an optimization technique that speeds up programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again

===================

``` 
    @Component({
        template-url:..
        selector: <app-product>
    })
    public class Product {

    }

    React appraoch
    class Product extends Component {

    }

    Alternative: hooks

    Mobx
    @observable
    public class Cart {

        @action
        addToCart(...) {

        }
    }

```

Using JS in TS ->

https://github.com/DefinitelyTyped/DefinitelyTyped

npm i @types/underscore

============================

React:
* TanStack Router instead of react-router-dom
More than just a router.

Similar to NextJS

=========================

TanStack router for existing application:
npm i @tanstack/react-router


```
npm create vite@latest

> npx
> create-vite

│
◇  Project name:
│  tanstack-router
│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  TanStack Router ↗ https://tanstack.com/router
┌  Let's configure your TanStack application
│
◇  Select toolchain
│  None
│
◇  Would you like to include demo/example pages?
│  No

```

tasks.route.tsx is same as creating
"tasks/route.tsx"

===========

TanStack Query: Pending...

=====

React : Atomic Design
Atoms: Basic building blocks of matter, such as button. input, image.
Reusable components. Most of the time we use ready to use libraries like
Adobe Web Components, React-bootstrap, KendoUI, PrimeReact, MUI

Molecules: Grouping atoms together, like FORM component , Card

Organisms: combining molecules: Like Navbar.

Templates

Page

```
    src
        components
            atoms
            molecules
            templates
        pages
```
============================

Using Functional Components of React:
* hooks : to provide class capabilities to a functional components
like state, life-cycle methods
Available from React 16.8 version onwards
General hooks:
1) useState
is a hook to introduce state varaible in functional component
```
App.tsx
export default function App() {
    let [name, setName] = useState<string>("");
    let [age, setAge] = useState<number>(18);

}

export default class App extends Component {
    state = {
        name: string = "",
        age: number = 18
    }

    setName(name) {
        this.setState({
            name
        })
    }

    setAge(age) {
        this.setState({
            age
        })
    }
}
```
2) useEffect
is for side-effects, like making API calls

```
    useEffect(() => {
        // code here gets called only once when first time 
        // component is loaded
        // write code to make API calls and pull the data
        // called after first render
    },[])

    Example:
    function App() {
        let [users, setUsers] = useState<User[]>([]);

        useEffect(() => {
            fetch("https://api.com/users")
            .then(response => response.json())
            .then(data => setUsers(data));
        }, [])
        
        return <div>
            <h1>Hello Users </h1>
            {
                users.map(user => <div key={user.id}> {user.name} </div>)
            }
        </div>
    }


     useEffect(() => {
        // code here gets called whenever name or age changes
       
    },[name, age])


     useEffect(() => {
            // do subscription, aPI call
          
            return () => {
                // unmount code
                // code here will execute before component is destroyed
                // unsubscribe
                }
        }, [])
        
```
3) useReducer
    to be used instead of useState:
    if mutation is conditional
    if mutation depends on previous state

    userReducer uses reducer function.
    reducer function takes(old_state, action) => return new state
    Action Object has type of action and payload [ simple JSON]

    dispatch({type:'ADD_TO_CART', payload: ...})

4) useCallback
5) useContext
6) useRef


========

Day 3:
```
npm create vite@latest ecomApp

> npx
> create-vite ecomApp

│
◇  Package name:
│  ecomapp
│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  TypeScript
│
◇  Install with npm and start now?
│  Yes

npm i react-router-dom axios bootstrap react-bootstrap 

```
bootstrap CSS Framework 
react-bootstrap -> for ready to use react components [atoms and molecules]
axios instead of fetch for making API calls
react-router-dom instead of TanStack Router [file based -routes]

as={Link} --> instead of href for client-side routing
href --> server side routing
==================

npm install
npm run dev

===========

React Context:
React Context is an API that allows you to share data and state across your entire component tree without passing props down manually at every level, a problem known as "prop drilling".



CartList , increment, checkout for your task...

========

Context [ prefer only for avoiding props-drill, to a certain extent can be used for state managment in smaller application] 
Context: is a part of react library

vs Redux [state management in larger application, to avoid re-rendering]
extra dependency
Easy to debug compared to Context, Time-travel debugging
Redux can be developed as a seperate libary and used along with any front-end technologies like Angular, React, Svelete, vanilla Js
Best Solution for Micro-Frontend.

================================

more hooks:
1) useDeffered:
useDeferredValue is a React Hook that lets you defer updating a part of the UI.

Priororitize User events over rendering. Made possible using React Fiber Architecture.

```
    function App() {
        return <div>
            <h1>Hello World</h1>
            <section>
                <button>Click</button>
            </section>

        </div>
    }

```
"allowJs": true,

2) Form Handling:
Upto React 18 we had two ways:
1) Controlled Components:
At any point of time React has the state of DOM element [ in this input]
    ```
        const [query, setQuery] = React.useState("");
        <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type something..." />
    ```

    Prefer this if you need immediate feedback
    Cons: Too many Events, and re-rendering

2) Uncontrolled Components:

 DOM elements holds the values and not React
    ```
        function App() {
            let emailRef = useRef();
            let ageRef = useRef();

            function doSubmit() {
                let user = {
                    email: emailRef.current.value,
                    age: ageRef.current.value
                }
            }
            return <>
                    Email : <input type="text" ref={emailRef}/> <br />
                    Age: <input type="number" ref={ageRef} /> <br />
                    <button type="button" onClick={doSubmit}> Submit</button>
            </>
        }

    ```

New ways of Form Handling in React 18 and 19:
1) useActionState
useActionState is a React Hook that lets you update state with side effects using Actions.
const [state, dispatchAction, isPending] = useActionState(reducerAction, initialState, permalink?);

2) useFormStatus
useFormStatus is a Hook that gives you status information of the last form submission.
This should be used/called from a component rendered within form. Get status from parent form

3) useOptimistic is a React Hook that lets you optimistically update the UI.
Update the UI before backend operation completes like Network request.

===============


Day 4:

Recap:
```
    TypeScript
    React using TypeScript
    TanStack Router: File Based Router [ keeping in sync with future applications like NextJS]
    EcomApp: react-router-dom [instead of TanStack Router] - BrowserRouter, Routes, Route, Link for client side routing instead of using href, MUI / react-bootstrap, adobe web spectrum web components

React Hooks:
1) useState
2) useEffect: 
    2.1) componentDidMount -- gets called after first render, most likely place for API calls
    useEffect(() => {}, [])
    2.2) componentDidUpdate -- gets called when state or props change
    useEffect(() => {}, [dep1, dep2, ...])
3) useReducer - if state mutation is complex, conditionally mutate a state, mutation depends on previous state
    uses a reducer function: (state, action) => newState [note newState is done on a clone]
4) useRef : create a reference and attack it to a DOM element / component
    let nameRef = useRef(null);
    let cardRed = useRef(null);
    <input type="text" ref={nameRef} />

    <Card ref={cardRef}>

    </Card>
5) useContext: Context - central placeholder of data used to prevent props-drill
useContext acts like a Consumer
simplified code:
<CartContext.Consumer>
    {
        value => {
            return <div>
                {value.quantity}
            </div>
        }
    }
</CartContext.Consumer>

let {quantity} = useContext(CartContext);
6) useActionState
    isPending
7) useFormStatus: pending
    Child Component gets the pending status from the enclosing <form> of Parent
8) useOptimistic: update UI optimistically before data is persisted on Server 
    In case if Server action fails, useOptimistic will revert back to previous state
9) useDefferedValue: Making use of React 18 concurrency architecture [ fiber based]
    Make User interaction always responsive
```

===========

10) useCallback: to memoize a function
```
    function App() {
        let [name, setName] = useState("");
        let [age, setAge] = useState(18);
        // memorize the function definition
        let modify = useCallback(() =>  {
            ..
        },[age]);
        return <Child name={name} modifyRef={modify} />
    }

    Child.tsx
    function Child({age, modifyRef}) {
        return <>
            Age = {age} <br/>
            <button onClick={modifyRef}>Modify</button>
        </>
    }
    export default memo(Child);
```

11) useTransition : instead of useDefferedValue
useTransition is a React Hook that lets you render a part of the UI in the background.
More control to decide what has to be low-priority computation

```
    function App() {
        const[isPending, startTranstion] = useTranstion();
        const [search, setSearch] = useState();
        function handleSearch(txt) {
            setSearch(txt);
            // any other activities
            startTransition(() => {
                // any expenisive code
                // like pulling from Backend
            })
        }
    return <div>
        {search} 
    </div>
```

12) forwardRef: is deprecated in React 19, instead pass "ref" as a prop 

In React 19, forwardRef is no longer necessary. Pass ref as a prop instead. forwardRef will be deprecated in a future release

13) useImperativeHandle is a React Hook that lets you customize the handle exposed as a ref.

14) useLayoutEffect() can be used instead of useEffect() in case of scenario where we need to access such as reading DOM layout or measuring elements, before the browser repaints the screen

Called after actual DOM render.

```
function Tooltip({ children }) {
  const ref = useRef();
  const [position, setPosition] = useState(0);

  useLayoutEffect(() => {
    // Measure DOM element synchronously
    const { height } = ref.current.getBoundingClientRect();
    setPosition(height);
  }, []);

  return  <div ref={ref} style={{ top: -position }}>{children}</div>;
}
```

Pending : Server Side Component hooks

Note: Hooks can be used only within functional components or other hooks, also can't be used inside a conditional statements. Always at the top level.

use API: instead of useEffect() 
use is a React API that lets you read the value of a resource like a Promise or context.
can be used inside conditional statement, loops..

npm i react-error-boundary

========

TanStack Query --> react query

Powerful data-fetching library, features like fetching, caching, synchronizing, parallel queries, lining of query, infinite queries.

=================

```
npm create vite@latest tanstack-example

> npx
> create-vite tanstack-example

│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  TypeScript

Add TanStack dependencies
tanstack-example> npm i @tanstack/react-query @tanstack/react-query-devtools

```

Running a Query after first Query is done.
Parallel Queuries. [useQueries]
Infinite Queuries: useInfiniteQuery, InfiniteData
Try with intersection observer.

=======
Day 5: 

```
    useCallback(), use() API instead of useEffect, useTransition() to customize which part of code has to be low-priority [ setTransition]
    TanStack Query: fetching, lodaing data after first API call is done, parallel, caching, invalidate, InfiniteData
```

Redux : Predicatable State Managment

React Context: meant to avoid props-drill, just like a central placeholder for data, and nth level consumer and directly access it without passing props thro intermediary component.
Context can be used for State managment is small to medium size applicaitions where we less state to maange.

```
Core Differences
1) Context API	
Type	Built-in React feature	External library
Minimal setup
Simple, low-frequency updates 
Performance	Can cause unnecessary re-renders for all consumers when the context value changes	

2) Redux
Requires initial setup and more boilerplate
Complex, high-frequency updates (e.g., e-commerce cart, data fetching)
Optimizes re-renders so only components using the changed state update.
Debugging using React DevTools	Powerful "time-travel debugging" with the Redux DevTools extension, tracing all state changes over time.
Extensive middleware ecosystem for side effects (e.g., API calls, logging)
* Can be built as seperate libary by the team who has no clue of UI, later that libary can be integrated with any UI library or framework like React, Vue, Svelete, Angular, Vanilla JS
* Can be used as Global Store for MicroFront End application [ remote]
```

Facebook team initailly was using MVC pattern for state managment [ View updates the model, one model updates another model. Whenever Model changes view gets a notification]
Flux Architecture: supports uni-directional data flow, state in store can only be modified by dispatching an action. Store was made as Event Emitter

```
    class CartStore extends EventEmitter {
        ...
        addToCart(cartItem) {
            ///
            event.emit("CART_ITEM_ADDED");
        }
    }

```

Redux, Mobx started using this base and build on top it.

https://www.youtube.com/watch?v=8pDqJVdNa44&t=4458s

=================================

Legacy Redux vs RTK.

```
{
    "profile": {
        avatar: 'banu.png',
        displayName: 'Banu Prakash'
    },
    cart: {
        cartItems: [...],
        qty: 3,
        total: 4335242
    },
    ..

}

connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

// state is from redux store
function mapStateToProps(state) {
    return {
        pic: state.profile.avatar,
        products: state.cart.cartItems
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addCart: prod => dispatch({type:'ADD_TO_CART', payload: prod}),
        clearCart: () => dispatch({type: 'CLEAR_CART}),
        changePic: pic => dispatcH({type:'CHANGE_PIC', payload: pic})
    }
}

```

Redux Example:
```
npm create vite@latest

> npx
> create-vite

│
◇  Project name:
│  redux-example
│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  JavaScript

 redux-example % npm i redux react-redux
 
```