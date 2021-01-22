(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./PQ"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MinPQ = void 0;
    const PQ_1 = require("./PQ");
    class MinPQ extends PQ_1.PQ {
        comparer(i, j) {
            return this.compare(this.pq[i], this.pq[j]) > 0;
        }
    }
    exports.MinPQ = MinPQ;
});
