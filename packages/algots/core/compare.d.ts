declare type CompareReturnType = 0 | 1 | -1;
export declare type CompareFunction<T = any> = (a: T, b: T) => CompareReturnType;
export declare const defaultCompareFunction: CompareFunction;
export {};
