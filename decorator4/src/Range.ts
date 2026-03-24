// function (target: any, propertyKey:string) 

// decorator factory
export default function RangeValue(min: number, max: number) {
    // return a decorator
    return function(target: any, propertyKey: string) {
        let value: number;
        const getter = function() {
            return value;
        }

        const setter = function(newVal:number) {
            if(newVal < min || newVal > max) {
                throw new Error(`Value ${newVal} is out of Range [${min}, ${max}]`)
            }
            value = newVal;
        }

        // price = 100;
        // x = price;
        Object.defineProperty(target, propertyKey, {get: getter, set: setter})
    }
}