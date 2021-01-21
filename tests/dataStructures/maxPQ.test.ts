import { MaxPQ } from '../../src/dataStructures/MaxPQ';
import { getRandomInt } from '../utils/getRandomInt';

describe('minimum priority queue', () => {
	test('empty', () => {
		const maxPq = new MaxPQ<number>();
		expect(maxPq.isEmpty()).toBeTruthy();
		expect(maxPq.size()).toEqual(0);
		expect(() => maxPq.delete()).toThrowError('Priority queue underflow');
	});

	test('insert', () => {
		const n = 100000;
		const maxPq = new MaxPQ<number>(n);
		for (let i = 0; i < n; i++) {
			maxPq.insert(i);
		}
		expect(maxPq.size()).toEqual(n);
	});

	test('delete', () => {
		const n = 100000;
		const maxPq = new MaxPQ<number>(n);
		for (let i = 0; i < n - 1; i++) {
			maxPq.insert(getRandomInt(0, n - 10));
		}
		maxPq.insert(n);
		expect(maxPq.delete()).toEqual(n);
	});

	test('insert array', () => {
		const n = 100000;
		const arr = [];
		for (let i = 0; i < n; i++) {
			arr.push(i);
		}
		const maxPq = new MaxPQ<number>(undefined, undefined, arr);
		expect(maxPq.size()).toEqual(n);
	});

	test('iterator', () => {
		const arr = [5, 4, 3, 2, 1];
		const maxPq = new MaxPQ<number>();
		maxPq.insert(3);
		maxPq.insert(1);
		maxPq.insert(5);
		maxPq.insert(2);
		maxPq.insert(4);

		let i = 0;
		for (const n of maxPq) {
			expect(n).toEqual(arr[i]);
			i++;
		}
	});
});
