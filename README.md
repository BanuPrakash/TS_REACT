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



