import { PQ } from './PQ';

export class MinPQ<T> extends PQ<T> {
	protected comparer(i: number, j: number): boolean {
		return this.compare(this.pq[i], this.pq[j]) > 0;
	}
}
