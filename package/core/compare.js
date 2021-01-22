"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultCompareFunction = void 0;
exports.defaultCompareFunction = (a, b) => {
    return a > b ? 1 : a < b ? -1 : 0;
};
