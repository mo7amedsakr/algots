import { CompareFunction, defaultCompareFunction } from '../core/compare';
import { isSorted } from '../core';
import { less } from '../core';

export function mergeSort<T>(
	arr: T[],
	compare: CompareFunction<T> = defaultCompareFunction
): T[] {
	const _arr = [...arr];
	if (isSorted(_arr, compare)) return _arr;
	const n = _arr.length;
	const aux = new Array<T>(n);
	sort(_arr, aux, compare, 0, n - 1);
	return _arr;
}

function sort(
	arr: any[],
	aux: any[],
	compare: CompareFunction,
	lo: number,
	hi: number
) {
	if (hi <= lo) return;
	const mid = Math.floor(lo + (hi - lo) / 2);
	sort(arr, aux, compare, lo, mid);
	sort(arr, aux, compare, mid + 1, hi);
	merge(arr, aux, compare, lo, mid, hi);
}

function merge(
	arr: any[],
	aux: any[],
	compare: CompareFunction,
	lo: number,
	mid: number,
	hi: number
) {
	for (let k = lo; k <= hi; k++) {
		aux[k] = arr[k];
	}

	let i = lo,
		j = mid + 1;

	for (let k = lo; k <= hi; k++) {
		if (i > mid) arr[k] = aux[j++];
		else if (j > hi) arr[k] = aux[i++];
		else if (less(aux[j], aux[i], compare)) arr[k] = aux[j++];
		else arr[k] = aux[i++];
	}
}
