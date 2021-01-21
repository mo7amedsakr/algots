import { Digraph } from '../../src/graphs/Digraph';

describe('digraph', () => {
	test('create digraph', () => {
		const G = new Digraph(3);
		G.addEdge(0, 0);
		G.addEdge(0, 1);
		G.addEdge(1, 2);
		G.addEdge(2, 0);

		expect(G.adj(0)).toEqual([0, 1]);
		expect(G.degree(0)).toEqual(2);
		expect(G.indegree(0)).toEqual(2);
	});
});
