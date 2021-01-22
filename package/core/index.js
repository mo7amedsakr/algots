"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shuffle = exports.int = exports.swap = exports.less = exports.isSorted = void 0;
const compare_1 = require("./compare");
function isSorted(arr, compare = compare_1.defaultCompareFunction) {
    for (let i = 1; i < arr.length; i++) {
        if (less(arr[i], arr[i - 1], compare))
            return false;
    }
    return true;
}
exports.isSorted = isSorted;
function less(a, b, compare = compare_1.defaultCompareFunction) {
    return compare(a, b) < 0;
}
exports.less = less;
function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
exports.swap = swap;
exports.int = (n) => n | 0;
exports.shuffle = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        const r = exports.int(Math.random() * (i + 1));
        swap(arr, r, i);
    }
};
