"use strict";
// function (target: any, context: ClassAccessorDecoratorContext) 
Object.defineProperty(exports, "__esModule", { value: true });
// decorator factory
function RangeValue(min, max) {
    // return a decorator
    return function (target, context) {
        return {
            get() {
                return target.get.call(this);
            },
            set(newVal) {
                if (newVal < min || newVal > max) {
                    throw new Error(`Value ${newVal} is out of Range [${min}, ${max}]`);
                }
                target.set.call(this, newVal);
            }
        };
    };
}
exports.default = RangeValue;
