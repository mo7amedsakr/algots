type NodeType<T> = Node<T> | null;

class Node<T> {
	constructor(public data: T, public next: NodeType<T>) {}
}

export class LinkedList<T> {
	private n: number;
	private head: NodeType<T>;
	private tail: NodeType<T>;

	constructor() {
		this.n = 0;
		this.head = null;
		this.tail = null;
	}

	public isEmpty() {
		return this.head === null;
	}

	public size() {
		return this.n;
	}

	public unshift(data: T) {
		const newNode = new Node(data, this.head);
		if (this.isEmpty()) {
			this.tail = newNode;
		}
		this.head = newNode;
		this.n++;
	}

	public push(data: T) {
		if (this.isEmpty()) {
			this.unshift(data);
		} else {
			const newNode = new Node(data, null);
			this.tail!.next = newNode;
			this.tail = newNode;
			this.n++;
		}
	}

	public shift() {
		if (this.isEmpty()) throw new Error('Linked list underflow');
		const oldHead = this.head;
		this.head = this.head!.next;
		this.n--;
		return oldHead!.data;
	}

	public toArray() {
		return [...this];
	}

	public reverse() {
		this.tail = this.head;
		let current: NodeType<T> = this.head,
			prev: NodeType<T> = null,
			next: NodeType<T> = null;

		while (current !== null) {
			next = current.next;
			current.next = prev;
			prev = current;
			current = next;
		}

		this.head = prev;
	}

	public *[Symbol.iterator]() {
		let node = this.head;
		while (node !== null) {
			yield node.data;
			node = node.next;
		}
	}
}
