"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaxPQ = void 0;
const PQ_1 = require("./PQ");
class MaxPQ extends PQ_1.PQ {
    comparer(i, j) {
        return this.compare(this.pq[i], this.pq[j]) < 0;
    }
}
exports.MaxPQ = MaxPQ;
