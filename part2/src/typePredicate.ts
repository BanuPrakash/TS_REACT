
// function isString(data: unknown) : boolean {
//     return typeof data === 'string';
// }

// function convert(data: unknown) {
//     if(isString(data)) {
//         // here data is still unknown type
//         let content = data as string; // typeassertion, typecasting
//         return content.toUpperCase();
//     }
// }

// Type Predicate function
// returns string if condition evaluates to true
function isString(data: unknown) : data is string {
    return typeof data === 'string';
}

function convert(data: unknown) {
    if(isString(data)) {
        return data.toUpperCase();
    }
}

console.log(convert("hello world!!!"));