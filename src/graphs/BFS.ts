import { Graph } from './Graph';

export class BFS {
	private _marked: boolean[];
	private _edgeTo: number[];
	private _distTo: number[];

	constructor(G: Graph, s: number) {
		this._marked = new Array<boolean>(G.v()).fill(false);
		this.validateVertex(s);
		this._edgeTo = new Array<number>(G.v());
		this._distTo = new Array<number>(G.v()).fill(Number.POSITIVE_INFINITY);
		this.bfs(G, s);
	}

	public marked(v: number) {
		this.validateVertex(v);
		return this._marked[v];
	}

	public distTo(v: number) {
		this.validateVertex(v);
		return this._distTo[v];
	}

	public pathTo(v: number) {
		this.validateVertex(v);
		if (!this._marked[v]) return null;

		const path: number[] = [];
		let x: number;
		for (x = v; this._distTo[x] !== 0; x = this._edgeTo[x]) {
			path.push(x);
		}
		path.push(x);
		return path;
	}

	private bfs(G: Graph, s: number) {
		const q = [s];
		this._distTo[s] = 0;
		this._marked[s] = true;

		while (q.length > 0) {
			const v = q.shift()!;
			for (const w of G.adj(v)) {
				if (!this._marked[w]) {
					this._marked[w] = true;
					this._edgeTo[w] = v;
					this._distTo[w] = this._distTo[v] + 1;
					q.push(w);
				}
			}
		}
	}

	private validateVertex(v: number) {
		const V = this._marked.length;
		if (v < 0 || v >= V) {
			throw new Error(`Vertex ${v} is not between 0 and ${V - 1}`);
		}
	}
}
