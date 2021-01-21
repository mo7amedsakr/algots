"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultCompareFunction = void 0;
const defaultCompareFunction = (a, b) => {
    return a > b ? 1 : a < b ? -1 : 0;
};
exports.defaultCompareFunction = defaultCompareFunction;
