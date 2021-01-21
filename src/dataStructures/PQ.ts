import { int } from '../core';
import { CompareFunction, defaultCompareFunction } from '../core/compare';

export abstract class PQ<T> {
	protected pq: T[];
	protected n: number;
	protected compare: CompareFunction<T>;

	constructor(
		initCapacity: number = 1,
		compare: CompareFunction<T> = defaultCompareFunction,
		arr?: T[]
	) {
		this.compare = compare;

		if (arr) {
			this.n = arr.length;
			this.pq = new Array<T>(this.n + 1);
			for (let i = 0; i < this.n; i++) {
				this.pq[i + 1] = arr[i];
			}
			for (let k = int(this.n / 2); k >= 1; k--) {
				this.sink(k);
			}
		} else {
			this.pq = new Array<T>(initCapacity + 1);
			this.n = 0;
		}
	}

	public isEmpty() {
		return this.n === 0;
	}

	public size() {
		return this.n;
	}

	public insert(x: T) {
		this.pq[++this.n] = x;
		this.swim(this.n);
	}

	public delete() {
		if (this.isEmpty()) throw new Error('Priority queue underflow');
		const element = this.pq[1];
		this.swap(1, this.n--);
		this.sink(1);
		delete this.pq[this.n + 1];
		return element;
	}

	public peek() {
		if (this.isEmpty()) throw new Error('Priority queue underflow');
		return this.pq[1];
	}

	public *[Symbol.iterator]() {
		while (!this.isEmpty()) {
			yield this.delete();
		}
	}

	protected swim(k: number) {
		while (k > 1 && this.comparer(int(k / 2), k)) {
			this.swap(k, int(k / 2));
			k = int(k / 2);
		}
	}

	protected sink(k: number) {
		while (2 * k <= this.n) {
			let j = 2 * k;
			if (j < this.n && this.comparer(j, j + 1)) j++;
			if (!this.comparer(k, j)) break;
			this.swap(k, j);
			k = j;
		}
	}

	protected abstract comparer(i: number, j: number): boolean;

	private swap(i: number, j: number) {
		const temp = this.pq[i];
		this.pq[i] = this.pq[j];
		this.pq[j] = temp;
	}
}
