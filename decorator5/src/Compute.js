"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Computation = exports.memo = void 0;
function memo(originalMethod, ctx) {
    const cache = new Map();
    function replacement(...args) {
        const key = JSON.stringify(args);
        if (!cache.has(key)) {
            cache.set(key, originalMethod.call(this, ...args));
        }
        console.log(cache);
        return cache.get(key);
    }
    return replacement;
}
exports.memo = memo;
let Computation = (() => {
    var _a;
    let _instanceExtraInitializers = [];
    let _fibanocci_decorators;
    return _a = class Computation {
            fibanocci(no) {
                if (no == 0 || no == 1)
                    return 1;
                else {
                    return this.fibanocci(no - 1) + this.fibanocci(no - 2);
                }
            }
            constructor() {
                __runInitializers(this, _instanceExtraInitializers);
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _fibanocci_decorators = [memo];
            __esDecorate(_a, null, _fibanocci_decorators, { kind: "method", name: "fibanocci", static: false, private: false, access: { has: obj => "fibanocci" in obj, get: obj => obj.fibanocci }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();
exports.Computation = Computation;
let comp = new Computation();
console.time("first");
console.log(comp.fibanocci(40));
console.timeEnd("first");
console.time("second");
console.log(comp.fibanocci(40)); // from Cache
console.timeEnd("second");
