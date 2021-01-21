import { isSorted } from '../../src/core';
import { mergeSort } from '../../src/sorting/mergeSort';
import { comparePerson, persons } from './testArray';

describe('merge sort', () => {
	test('is sorted', () => {
		const sorted = mergeSort(persons, comparePerson);
		expect(isSorted(sorted, comparePerson)).toBeTruthy();
	});

	test('values', () => {
		expect(mergeSort([3, 2, 1])).toEqual([1, 2, 3]);
	});
});
