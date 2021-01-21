import { CompareFunction, defaultCompareFunction } from '../core/compare';

type NodeType<T> = Node<T> | null;

class Node<T> {
	constructor(
		public data: T,
		public left: NodeType<T>,
		public right: NodeType<T>
	) {}
}

export class BinaryTree<T> {
	private root: NodeType<T>;
	private compare: CompareFunction<T>;

	constructor(compare: CompareFunction<T> = defaultCompareFunction) {
		this.root = null;
		this.compare = compare;
	}

	public getRoot() {
		return this.root;
	}

	public isEmpty(): boolean {
		return this.root === null;
	}

	public insert(data: T, tree: NodeType<T> = this.root): Node<T> {
		if (this.isEmpty()) {
			this.root = new Node(data, null, null);
		} else if (tree === null) {
			tree = new Node(data, null, null);
		} else if (this.compare(data, tree.data) <= 0) {
			tree.left = this.insert(data, tree.left);
		} else {
			tree.right = this.insert(data, tree.right);
		}
		return tree!;
	}

	public search(data: T, tree: NodeType<T> = this.root): boolean {
		if (tree === null) return false;
		else if (this.compare(tree.data, data) === 0) return true;
		else if (this.compare(data, tree.data) < 0)
			return this.search(data, tree.left);
		else return this.search(data, tree.right);
	}

	public *leftIterator() {
		let node = this.root;
		while (node !== null) {
			yield node.data;
			node = node.left;
		}
	}

	public *rightIterator() {
		let node = this.root;
		while (node !== null) {
			yield node.data;
			node = node.right;
		}
	}

	public minValueNode() {
		if (this.isEmpty()) throw new Error('Binary tree underflow');
		let data: T;
		for (const d of this.leftIterator()) {
			data = d;
		}
		return data!;
	}

	public maxValueNode() {
		if (this.isEmpty()) throw new Error('Binary tree underflow');
		let data: T;
		for (const d of this.rightIterator()) {
			data = d;
		}
		return data!;
	}
}
