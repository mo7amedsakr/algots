import { int } from '../core';
import { CompareFunction, defaultCompareFunction } from '../core/compare';

export function binarySearch(
	arr: any[],
	el: any,
	compare: CompareFunction = defaultCompareFunction
) {
	let start = 0;
	let end = arr.length;

	while (start <= end) {
		const mid = int((start + end) / 2);

		if (compare(arr[mid], el) === 0) return mid;
		else if (compare(el, arr[mid]) === -1) end = mid - 1;
		else start = mid + 1;
	}
	return -1;
}
