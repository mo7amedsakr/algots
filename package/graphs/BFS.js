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
    exports.BFS = void 0;
    class BFS {
        constructor(G, s) {
            this._marked = new Array(G.v()).fill(false);
            this.validateVertex(s);
            this._edgeTo = new Array(G.v());
            this._distTo = new Array(G.v()).fill(Number.POSITIVE_INFINITY);
            this.bfs(G, s);
        }
        marked(v) {
            this.validateVertex(v);
            return this._marked[v];
        }
        distTo(v) {
            this.validateVertex(v);
            return this._distTo[v];
        }
        pathTo(v) {
            this.validateVertex(v);
            if (!this._marked[v])
                return null;
            const path = [];
            let x;
            for (x = v; this._distTo[x] !== 0; x = this._edgeTo[x]) {
                path.push(x);
            }
            path.push(x);
            return path;
        }
        bfs(G, s) {
            const q = [s];
            this._distTo[s] = 0;
            this._marked[s] = true;
            while (q.length > 0) {
                const v = q.shift();
                for (const w of G.adj(v)) {
                    if (!this._marked[w]) {
                        this._marked[w] = true;
                        this._edgeTo[w] = v;
                        this._distTo[w] = this._distTo[v] + 1;
                        q.push(w);
                    }
                }
            }
        }
        validateVertex(v) {
            const V = this._marked.length;
            if (v < 0 || v >= V) {
                throw new Error(`Vertex ${v} is not between 0 and ${V - 1}`);
            }
        }
    }
    exports.BFS = BFS;
});
