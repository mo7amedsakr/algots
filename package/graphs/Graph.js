(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Graph = void 0;
    class Graph {
        constructor(V) {
            if (V < 0)
                throw new Error('Number of vertices must be nonnegative');
            this.V = V;
            this.E = 0;
            this._adj = new Array(V);
            for (let i = 0; i < V; i++) {
                this._adj[i] = [];
            }
        }
        v() {
            return this.V;
        }
        e() {
            return this.E;
        }
        adj(v) {
            this.validateVertex(v);
            return this._adj[v];
        }
        addEdge(v, w) {
            this.validateVertex(v);
            this.validateVertex(w);
            this._adj[v].push(w);
            this._adj[w].push(v);
            this.E++;
        }
        degree(v) {
            this.validateVertex(v);
            return this._adj[v].length;
        }
        validateVertex(v) {
            if (v < 0 || v >= this.V) {
                throw new Error(`Vertex ${v} is not between 0 and ${this.V - 1}`);
            }
        }
    }
    exports.Graph = Graph;
});
