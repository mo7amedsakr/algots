import { LinkedList } from '../../src/dataStructures/LinkedList';

describe('linked list', () => {
	test('empty', () => {
		const list = new LinkedList<number>();
		expect(list.isEmpty()).toBeTruthy();
		expect(() => list.shift()).toThrowError('Linked list underflow');
	});

	test('push', () => {
		const n = 100000;
		const list = new LinkedList<number>();
		for (let i = 0; i < n; i++) {
			list.push(i);
		}
		expect(list.size()).toEqual(n);
	});

	test('unshift', () => {
		const n = 100000;
		const list = new LinkedList<number>();
		for (let i = 0; i < n; i++) {
			list.push(i);
		}
		expect(list.size()).toEqual(n);
	});

	test('to array', () => {
		const arr = [];
		const n = 100000;
		const list = new LinkedList<number>();
		for (let i = 0; i < n; i++) {
			arr.push(i);
			list.push(i);
		}
		expect(list.toArray()).toEqual(arr);
	});

	test('reverse', () => {
		const arr = [];
		const n = 100000;
		const list = new LinkedList<number>();
		for (let i = 0; i < n; i++) {
			arr.push(i);
			list.push(i);
		}
		list.reverse();
		arr.reverse();
		expect(list.toArray()).toEqual(arr);
	});

	test('iterator', () => {
		const n = 10;
		const list = new LinkedList<number>();
		for (let i = 0; i < n; i++) {
			list.push(i);
		}

		let i = 0;
		for (const n of list) {
			expect(n).toEqual(i);
			i++;
		}
	});
});
