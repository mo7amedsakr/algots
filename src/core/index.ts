import { CompareFunction, defaultCompareFunction } from './compare';

export function isSorted<T>(
	arr: T[],
	compare: CompareFunction<T> = defaultCompareFunction
): boolean {
	for (let i = 1; i < arr.length; i++) {
		if (less(arr[i], arr[i - 1], compare)) return false;
	}
	return true;
}

export function less<T>(
	a: T,
	b: T,
	compare: CompareFunction<T> = defaultCompareFunction
): boolean {
	return compare(a, b) < 0;
}

export function swap(arr: any[], i: number, j: number) {
	const temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

export const int = (n: number) => n | 0;

export const shuffle = (arr: any[]) => {
	for (let i = 0; i < arr.length; i++) {
		const r = int(Math.random() * (i + 1));
		swap(arr, r, i);
	}
};
