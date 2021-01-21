import { binarySearch } from '../../src/searching/binarySearch';

describe('binary search', () => {
	test('should return the index for the number in the array', () => {
		const arr = [1, 5, 6, 9, 11];
		const el = binarySearch(arr, 9);
		expect(el).toEqual(3);
	});

	test('should return the index for the object in the array', () => {
		class Person {
			constructor(public age: number) {}
		}

		const arr = [new Person(50), new Person(55), new Person(70)];
		const el = binarySearch(arr, new Person(55), (a: Person, b: Person) => {
			return a.age < b.age ? -1 : a.age > b.age ? 1 : 0;
		});
		expect(el).toEqual(1);
	});

	test('should return -1 because the array isnot sorted', () => {
		const arr = [3, 2, 1];
		const el = binarySearch(arr, 1);
		expect(el).toEqual(-1);
	});
});
