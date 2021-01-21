import { CompareFunction, defaultCompareFunction } from '../core/compare';
import { isSorted } from '../core';
import { less } from '../core';
import { swap } from '../core';

export function heapSort<T>(
	arr: T[],
	compare: CompareFunction<T> = defaultCompareFunction
): T[] {
	const _arr = [...arr];
	if (isSorted(_arr, compare)) return _arr;
	sort(_arr, compare, _arr.length);
	return _arr;
}

function sort(arr: any[], compare: CompareFunction, n: number) {
	for (let k = Math.floor(n / 2); k >= 1; k--) {
		sink(arr, compare, k, n);
	}
	let k = n;
	while (k > 1) {
		swap(arr, 0, k - 1);
		k--;
		sink(arr, compare, 1, k);
	}
}

function sink(arr: any[], compare: CompareFunction, k: number, n: number) {
	while (2 * k <= n) {
		let j = 2 * k;
		if (j < n && less(arr[j - 1], arr[j], compare)) j++;
		if (!less(arr[k - 1], arr[j - 1], compare)) break;
		swap(arr, k - 1, j - 1);
		k = j;
	}
}
