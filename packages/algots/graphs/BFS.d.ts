import { Graph } from './Graph';
export declare class BFS {
    private _marked;
    private _edgeTo;
    private _distTo;
    constructor(G: Graph, s: number);
    marked(v: number): boolean;
    distTo(v: number): number;
    pathTo(v: number): number[] | null;
    private bfs;
    private validateVertex;
}
