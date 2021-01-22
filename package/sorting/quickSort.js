(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../core/compare", "../core", "../core", "../core"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.quickSort = void 0;
    const compare_1 = require("../core/compare");
    const core_1 = require("../core");
    const core_2 = require("../core");
    const core_3 = require("../core");
    function quickSort(arr, compare = compare_1.defaultCompareFunction) {
        const _arr = [...arr];
        if (core_1.isSorted(_arr, compare))
            return _arr;
        core_1.shuffle(_arr);
        sort(_arr, compare, 0, _arr.length - 1);
        return _arr;
    }
    exports.quickSort = quickSort;
    function partition(arr, compare, lo, hi) {
        let i = lo, j = hi + 1;
        const v = arr[lo];
        while (true) {
            while (core_2.less(arr[++i], v, compare))
                if (i === hi)
                    break;
            while (core_2.less(v, arr[--j], compare))
                if (j === lo)
                    break;
            if (i >= j)
                break;
            core_3.swap(arr, i, j);
        }
        core_3.swap(arr, lo, j);
        return j;
    }
    function sort(arr, compare, lo, hi) {
        if (hi <= lo)
            return;
        const j = partition(arr, compare, lo, hi);
        sort(arr, compare, lo, j - 1);
        sort(arr, compare, j + 1, hi);
    }
});
