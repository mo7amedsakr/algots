import { CompareFunction } from '../core/compare';
export declare abstract class PQ<T> {
    protected pq: T[];
    protected n: number;
    protected compare: CompareFunction<T>;
    constructor(initCapacity?: number, compare?: CompareFunction<T>, arr?: T[]);
    isEmpty(): boolean;
    size(): number;
    insert(x: T): void;
    delete(): T;
    peek(): T;
    [Symbol.iterator](): Generator<T, void, unknown>;
    protected swim(k: number): void;
    protected sink(k: number): void;
    protected abstract comparer(i: number, j: number): boolean;
    private swap;
}
