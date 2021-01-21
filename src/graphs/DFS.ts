import { Graph } from './Graph';

export class DFS {
	private _marked: boolean[];
	private _count: number;

	constructor(G: Graph, s: number) {
		this._marked = new Array<boolean>(G.v()).fill(false);
		this._count = 0;
		this.validateVertex(s);
		this.dfs(G, s);
	}

	public marked(v: number) {
		this.validateVertex(v);
		return this._marked[v];
	}

	public count() {
		return this._count;
	}

	private dfs(G: Graph, v: number) {
		this._count++;
		this._marked[v] = true;
		for (const w of G.adj(v)) {
			if (!this._marked[w]) {
				this.dfs(G, w);
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
