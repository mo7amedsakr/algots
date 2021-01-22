import { Graph } from './Graph';
export declare class DFS {
    private _marked;
    private _count;
    constructor(G: Graph, s: number);
    marked(v: number): boolean;
    count(): number;
    private dfs;
    private validateVertex;
}
