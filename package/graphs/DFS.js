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
    exports.DFS = void 0;
    class DFS {
        constructor(G, s) {
            this._marked = new Array(G.v()).fill(false);
            this._count = 0;
            this.validateVertex(s);
            this.dfs(G, s);
        }
        marked(v) {
            this.validateVertex(v);
            return this._marked[v];
        }
        count() {
            return this._count;
        }
        dfs(G, v) {
            this._count++;
            this._marked[v] = true;
            for (const w of G.adj(v)) {
                if (!this._marked[w]) {
                    this.dfs(G, w);
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
    exports.DFS = DFS;
});
