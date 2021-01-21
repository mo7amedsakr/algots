import { DFS } from '../../src/graphs/DFS';
import { Digraph } from '../../src/graphs/Digraph';
import { Graph } from '../../src/graphs/Graph';

describe('dfs', () => {
	test('graph dfs', () => {
		const G = new Graph(3);
		G.addEdge(0, 1);
		G.addEdge(0, 2);
		G.addEdge(2, 1);
		const dfs = new DFS(G, 0);

		expect(dfs.count()).toEqual(3);
		expect(dfs.marked(1)).toBeTruthy();
	});

	test('digraph dfs', () => {
		const G = new Digraph(3);
		G.addEdge(1, 0);
		G.addEdge(0, 2);
		G.addEdge(2, 1);
		const dfs = new DFS(G, 0);

		expect(dfs.count()).toEqual(3);
		expect(dfs.marked(1)).toBeTruthy();
	});
});
