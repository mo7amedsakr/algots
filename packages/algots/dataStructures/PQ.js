"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PQ = void 0;
const core_1 = require("../core");
const compare_1 = require("../core/compare");
class PQ {
    constructor(initCapacity = 1, compare = compare_1.defaultCompareFunction, arr) {
        this.compare = compare;
        if (arr) {
            this.n = arr.length;
            this.pq = new Array(this.n + 1);
            for (let i = 0; i < this.n; i++) {
                this.pq[i + 1] = arr[i];
            }
            for (let k = core_1.int(this.n / 2); k >= 1; k--) {
                this.sink(k);
            }
        }
        else {
            this.pq = new Array(initCapacity + 1);
            this.n = 0;
        }
    }
    isEmpty() {
        return this.n === 0;
    }
    size() {
        return this.n;
    }
    insert(x) {
        this.pq[++this.n] = x;
        this.swim(this.n);
    }
    delete() {
        if (this.isEmpty())
            throw new Error('Priority queue underflow');
        const element = this.pq[1];
        this.swap(1, this.n--);
        this.sink(1);
        delete this.pq[this.n + 1];
        return element;
    }
    peek() {
        if (this.isEmpty())
            throw new Error('Priority queue underflow');
        return this.pq[1];
    }
    *[Symbol.iterator]() {
        while (!this.isEmpty()) {
            yield this.delete();
        }
    }
    swim(k) {
        while (k > 1 && this.comparer(core_1.int(k / 2), k)) {
            this.swap(k, core_1.int(k / 2));
            k = core_1.int(k / 2);
        }
    }
    sink(k) {
        while (2 * k <= this.n) {
            let j = 2 * k;
            if (j < this.n && this.comparer(j, j + 1))
                j++;
            if (!this.comparer(k, j))
                break;
            this.swap(k, j);
            k = j;
        }
    }
    swap(i, j) {
        const temp = this.pq[i];
        this.pq[i] = this.pq[j];
        this.pq[j] = temp;
    }
}
exports.PQ = PQ;
