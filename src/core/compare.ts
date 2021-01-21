type CompareReturnType = 0 | 1 | -1;

export type CompareFunction<T = any> = (a: T, b: T) => CompareReturnType;

export const defaultCompareFunction: CompareFunction = (a: any, b: any) => {
	return a > b ? 1 : a < b ? -1 : 0;
};
