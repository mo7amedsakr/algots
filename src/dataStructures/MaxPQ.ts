import { PQ } from './PQ';

export class MaxPQ<T> extends PQ<T> {
	protected comparer(i: number, j: number): boolean {
		return this.compare(this.pq[i], this.pq[j]) < 0;
	}
}
