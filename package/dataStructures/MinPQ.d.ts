import { PQ } from './PQ';
export declare class MinPQ<T> extends PQ<T> {
    protected comparer(i: number, j: number): boolean;
}
