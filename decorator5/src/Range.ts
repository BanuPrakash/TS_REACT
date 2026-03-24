// function (target: any, context: ClassAccessorDecoratorContext) 

// decorator factory
export default function RangeValue(min: number, max: number) {
    // return a decorator
    return function(target: any, context: ClassAccessorDecoratorContext) {
        return {
            get() {
                return target.get.call(this);
            },
            set(newVal:number) {
                if(newVal < min || newVal > max) {
                 throw new Error(`Value ${newVal} is out of Range [${min}, ${max}]`)
              }
              target.set.call(this, newVal);
        }
    }
}
}