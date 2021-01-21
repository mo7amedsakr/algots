export class Graph {
	protected readonly V: number;
	protected E: number;
	protected _adj: number[][];

	constructor(V: number) {
		if (V < 0) throw new Error('Number of vertices must be nonnegative');
		this.V = V;
		this.E = 0;
		this._adj = new Array<number[]>(V);
		for (let i = 0; i < V; i++) {
			this._adj[i] = [];
		}
	}

	public v() {
		return this.V;
	}

	public e() {
		return this.E;
	}

	public adj(v: number) {
		this.validateVertex(v);
		return this._adj[v];
	}

	public addEdge(v: number, w: number) {
		this.validateVertex(v);
		this.validateVertex(w);
		this._adj[v].push(w);
		this._adj[w].push(v);
		this.E++;
	}

	public degree(v: number) {
		this.validateVertex(v);
		return this._adj[v].length;
	}

	protected validateVertex(v: number) {
		if (v < 0 || v >= this.V) {
			throw new Error(`Vertex ${v} is not between 0 and ${this.V - 1}`);
		}
	}
}
