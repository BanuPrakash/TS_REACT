"use strict";
// function (target: any, propertyKey:string) 
Object.defineProperty(exports, "__esModule", { value: true });
// decorator factory
function RangeValue(min, max) {
    // return a decorator
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            if (newVal < min || newVal > max) {
                throw new Error(`Value ${newVal} is out of Range [${min}, ${max}]`);
            }
            value = newVal;
        };
        // price = 100;
        // x = price;
        Object.defineProperty(target, propertyKey, { get: getter, set: setter });
    };
}
exports.default = RangeValue;
