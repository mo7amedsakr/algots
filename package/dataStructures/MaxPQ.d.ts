import { PQ } from './PQ';
export declare class MaxPQ<T> extends PQ<T> {
    protected comparer(i: number, j: number): boolean;
}
