import { Graph } from '../../src/graphs/Graph';

describe('graph', () => {
	test('create graph', () => {
		const G = new Graph(3);
		G.addEdge(0, 0);
		G.addEdge(0, 1);
		G.addEdge(0, 2);
		G.addEdge(1, 2);

		expect(G.v()).toEqual(3);
		expect(G.e()).toEqual(4);
		expect(() => G.addEdge(0, 3)).toThrowError(
			'Vertex 3 is not between 0 and 2'
		);
		expect(G.adj(0)).toEqual([0, 0, 1, 2]);
		expect(G.adj(1)).toEqual([0, 2]);
		expect(G.degree(0)).toEqual(4);
	});
});
