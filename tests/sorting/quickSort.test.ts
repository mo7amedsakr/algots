import { isSorted } from '../../src/core';
import { quickSort } from '../../src/sorting/quickSort';
import { comparePerson, persons } from './testArray';

describe('quick sort', () => {
	test('is sorted', () => {
		const sorted = quickSort(persons, comparePerson);
		expect(isSorted(sorted, comparePerson)).toBeTruthy();
	});

	test('values', () => {
		expect(quickSort([3, 2, 1])).toEqual([1, 2, 3]);
	});
});
