export declare class Graph {
    protected readonly V: number;
    protected E: number;
    protected _adj: number[][];
    constructor(V: number);
    v(): number;
    e(): number;
    adj(v: number): number[];
    addEdge(v: number, w: number): void;
    degree(v: number): number;
    protected validateVertex(v: number): void;
}
