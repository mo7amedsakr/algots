import { CompareFunction } from './compare';
export declare function isSorted<T>(arr: T[], compare?: CompareFunction<T>): boolean;
export declare function less<T>(a: T, b: T, compare?: CompareFunction<T>): boolean;
export declare function swap(arr: any[], i: number, j: number): void;
export declare const int: (n: number) => number;
export declare const shuffle: (arr: any[]) => void;
