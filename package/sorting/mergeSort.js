"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeSort = void 0;
const compare_1 = require("../core/compare");
const core_1 = require("../core");
const core_2 = require("../core");
function mergeSort(arr, compare = compare_1.defaultCompareFunction) {
    const _arr = [...arr];
    if (core_1.isSorted(_arr, compare))
        return _arr;
    const n = _arr.length;
    const aux = new Array(n);
    sort(_arr, aux, compare, 0, n - 1);
    return _arr;
}
exports.mergeSort = mergeSort;
function sort(arr, aux, compare, lo, hi) {
    if (hi <= lo)
        return;
    const mid = Math.floor(lo + (hi - lo) / 2);
    sort(arr, aux, compare, lo, mid);
    sort(arr, aux, compare, mid + 1, hi);
    merge(arr, aux, compare, lo, mid, hi);
}
function merge(arr, aux, compare, lo, mid, hi) {
    for (let k = lo; k <= hi; k++) {
        aux[k] = arr[k];
    }
    let i = lo, j = mid + 1;
    for (let k = lo; k <= hi; k++) {
        if (i > mid)
            arr[k] = aux[j++];
        else if (j > hi)
            arr[k] = aux[i++];
        else if (core_2.less(aux[j], aux[i], compare))
            arr[k] = aux[j++];
        else
            arr[k] = aux[i++];
    }
}
