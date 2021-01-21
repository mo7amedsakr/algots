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
