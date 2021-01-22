"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Digraph = void 0;
const Graph_1 = require("./Graph");
class Digraph extends Graph_1.Graph {
    constructor(V) {
        super(V);
        this._indegree = new Array(V).fill(0);
    }
    addEdge(v, w) {
        this.validateVertex(v);
        this.validateVertex(w);
        this._adj[v].push(w);
        this.E++;
        this._indegree[w]++;
    }
    indegree(v) {
        this.validateVertex(v);
        return this._indegree[v];
    }
    reverse() {
        const _reverse = new Digraph(this.V);
        for (let v = 0; v < this.V; v++) {
            for (const w of this._adj[v]) {
                _reverse.addEdge(w, v);
            }
        }
        return _reverse;
    }
}
exports.Digraph = Digraph;
