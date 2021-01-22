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
    exports.heapSort = void 0;
    const compare_1 = require("../core/compare");
    const core_1 = require("../core");
    const core_2 = require("../core");
    const core_3 = require("../core");
    function heapSort(arr, compare = compare_1.defaultCompareFunction) {
        const _arr = [...arr];
        if (core_1.isSorted(_arr, compare))
            return _arr;
        sort(_arr, compare, _arr.length);
        return _arr;
    }
    exports.heapSort = heapSort;
    function sort(arr, compare, n) {
        for (let k = Math.floor(n / 2); k >= 1; k--) {
            sink(arr, compare, k, n);
        }
        let k = n;
        while (k > 1) {
            core_3.swap(arr, 0, k - 1);
            k--;
            sink(arr, compare, 1, k);
        }
    }
    function sink(arr, compare, k, n) {
        while (2 * k <= n) {
            let j = 2 * k;
            if (j < n && core_2.less(arr[j - 1], arr[j], compare))
                j++;
            if (!core_2.less(arr[k - 1], arr[j - 1], compare))
                break;
            core_3.swap(arr, k - 1, j - 1);
            k = j;
        }
    }
});
