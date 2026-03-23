function unknownFunction(arg: unknown) {
    if(typeof arg === "string") {
        console.log(arg);
    } else if(typeof arg === "function") {
        arg();
    }
}

unknownFunction("hello");
unknownFunction(console.log);