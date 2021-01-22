(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.defaultCompareFunction = void 0;
    const defaultCompareFunction = (a, b) => {
        return a > b ? 1 : a < b ? -1 : 0;
    };
    exports.defaultCompareFunction = defaultCompareFunction;
});
