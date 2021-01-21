import { Graph } from './Graph';

export class Digraph extends Graph {
	private _indegree: number[];

	constructor(V: number) {
		super(V);
		this._indegree = new Array<number>(V).fill(0);
	}

	public addEdge(v: number, w: number) {
		this.validateVertex(v);
		this.validateVertex(w);
		this._adj[v].push(w);
		this.E++;
		this._indegree[w]++;
	}

	public indegree(v: number) {
		this.validateVertex(v);
		return this._indegree[v];
	}

	public reverse() {
		const _reverse = new Digraph(this.V);
		for (let v = 0; v < this.V; v++) {
			for (const w of this._adj[v]) {
				_reverse.addEdge(w, v);
			}
		}
		return _reverse;
	}
}
