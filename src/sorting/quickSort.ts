import { CompareFunction, defaultCompareFunction } from '../core/compare';
import { isSorted, shuffle } from '../core';
import { less } from '../core';
import { swap } from '../core';

export function quickSort<T>(
	arr: T[],
	compare: CompareFunction<T> = defaultCompareFunction
): T[] {
	const _arr = [...arr];
	if (isSorted(_arr, compare)) return _arr;
	shuffle(_arr);
	sort(_arr, compare, 0, _arr.length - 1);
	return _arr;
}

function partition(
	arr: any[],
	compare: CompareFunction,
	lo: number,
	hi: number
) {
	let i = lo,
		j = hi + 1;
	const v = arr[lo];

	while (true) {
		while (less(arr[++i], v, compare)) if (i === hi) break;
		while (less(v, arr[--j], compare)) if (j === lo) break;
		if (i >= j) break;
		swap(arr, i, j);
	}
	swap(arr, lo, j);

	return j;
}

function sort(arr: any[], compare: CompareFunction, lo: number, hi: number) {
	if (hi <= lo) return;
	const j = partition(arr, compare, lo, hi);
	sort(arr, compare, lo, j - 1);
	sort(arr, compare, j + 1, hi);
}
