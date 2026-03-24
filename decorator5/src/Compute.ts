
export function memo(originalMethod:Function, ctx: ClassMethodDecoratorContext) {
    const cache = new Map(); 
    function replacement(this:any, ...args:any[]) {
        const key = JSON.stringify(args);
        if(!cache.has(key)) {
            cache.set(key, originalMethod.call(this, ...args));
        }
        console.log(cache);
        return cache.get(key);
    }
    return replacement;
}

export class Computation {
    @memo
    fibanocci(no: number) : number {
        if( no == 0 || no == 1) return 1;
        else {
            return this.fibanocci(no - 1) + this.fibanocci(no -2)
        }
    }
}

let comp: Computation = new Computation();
console.time("first");
    console.log(comp.fibanocci(40));
console.timeEnd("first");

console.time("second");
    console.log(comp.fibanocci(40)); // from Cache
console.timeEnd("second");