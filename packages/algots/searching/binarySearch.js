"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binarySearch = void 0;
const core_1 = require("../core");
const compare_1 = require("../core/compare");
function binarySearch(arr, el, compare = compare_1.defaultCompareFunction) {
    let start = 0;
    let end = arr.length;
    while (start <= end) {
        const mid = core_1.int((start + end) / 2);
        if (compare(arr[mid], el) === 0)
            return mid;
        else if (compare(el, arr[mid]) === -1)
            end = mid - 1;
        else
            start = mid + 1;
    }
    return -1;
}
exports.binarySearch = binarySearch;
