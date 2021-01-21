import { isSorted } from '../../src/core';
import { heapSort } from '../../src/sorting/heapSort';
import { comparePerson, persons } from './testArray';

describe('heap sort', () => {
	test('is sorted', () => {
		const sorted = heapSort(persons, comparePerson);
		expect(isSorted(sorted, comparePerson)).toBeTruthy();
	});

	test('values', () => {
		expect(heapSort([3, 2, 1])).toEqual([1, 2, 3]);
	});
});
