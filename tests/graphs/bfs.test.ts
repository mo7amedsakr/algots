import { BFS } from '../../src/graphs/BFS';
import { Digraph } from '../../src/graphs/Digraph';
import { Graph } from '../../src/graphs/Graph';

describe('bfs', () => {
	test('graph bfs', () => {
		const G = new Graph(3);
		G.addEdge(0, 1);
		G.addEdge(0, 2);
		G.addEdge(2, 1);
		const bfs = new BFS(G, 0);

		expect(bfs.marked(1)).toBeTruthy();
		expect(bfs.distTo(1)).toEqual(1);
		expect(bfs.pathTo(1)).toEqual([1, 0]);
	});

	test('digraph bfs', () => {
		const G = new Digraph(3);
		G.addEdge(1, 0);
		G.addEdge(0, 2);
		G.addEdge(2, 1);
		const bfs = new BFS(G, 0);

		expect(bfs.marked(1)).toBeTruthy();
		expect(bfs.distTo(1)).toEqual(2);
		expect(bfs.pathTo(1)).toEqual([1, 2, 0]);
	});
});
