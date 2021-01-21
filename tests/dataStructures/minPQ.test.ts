import { MinPQ } from '../../src/dataStructures/MinPQ';
import { getRandomInt } from '../utils/getRandomInt';

describe('minimum priority queue', () => {
	test('empty', () => {
		const minPq = new MinPQ<number>();
		expect(minPq.isEmpty()).toBeTruthy();
		expect(minPq.size()).toEqual(0);
		expect(() => minPq.delete()).toThrowError('Priority queue underflow');
	});

	test('insert', () => {
		const n = 100000;
		const minPq = new MinPQ<number>(n);
		for (let i = 0; i < n; i++) {
			minPq.insert(i);
		}
		expect(minPq.size()).toEqual(n);
	});

	test('delete', () => {
		const n = 100000;
		const minPq = new MinPQ<number>(n);
		for (let i = 1; i < n; i++) {
			minPq.insert(getRandomInt(10, n));
		}
		minPq.insert(0);
		expect(minPq.delete()).toEqual(0);
	});

	test('insert array', () => {
		const n = 100000;
		const arr = [];
		for (let i = 0; i < n; i++) {
			arr.push(i);
		}
		const minPq = new MinPQ<number>(undefined, undefined, arr);
		expect(minPq.size()).toEqual(n);
	});

	test('iterator', () => {
		const arr = [1, 2, 3, 4, 5];
		const minPq = new MinPQ<number>();
		minPq.insert(3);
		minPq.insert(1);
		minPq.insert(5);
		minPq.insert(2);
		minPq.insert(4);

		let i = 0;
		for (const n of minPq) {
			expect(n).toEqual(arr[i]);
			i++;
		}
	});
});
