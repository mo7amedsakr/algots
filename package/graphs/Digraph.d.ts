import { Graph } from './Graph';
export declare class Digraph extends Graph {
    private _indegree;
    constructor(V: number);
    addEdge(v: number, w: number): void;
    indegree(v: number): number;
    reverse(): Digraph;
}
