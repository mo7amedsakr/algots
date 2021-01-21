"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}
class LinkedList {
    constructor() {
        this.n = 0;
        this.head = null;
        this.tail = null;
    }
    isEmpty() {
        return this.head === null;
    }
    size() {
        return this.n;
    }
    unshift(data) {
        const newNode = new Node(data, this.head);
        if (this.isEmpty()) {
            this.tail = newNode;
        }
        this.head = newNode;
        this.n++;
    }
    push(data) {
        if (this.isEmpty()) {
            this.unshift(data);
        }
        else {
            const newNode = new Node(data, null);
            this.tail.next = newNode;
            this.tail = newNode;
            this.n++;
        }
    }
    shift() {
        if (this.isEmpty())
            throw new Error('Linked list underflow');
        const oldHead = this.head;
        this.head = this.head.next;
        this.n--;
        return oldHead.data;
    }
    toArray() {
        return [...this];
    }
    reverse() {
        this.tail = this.head;
        let current = this.head, prev = null, next = null;
        while (current !== null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }
    *[Symbol.iterator]() {
        let node = this.head;
        while (node !== null) {
            yield node.data;
            node = node.next;
        }
    }
}
exports.LinkedList = LinkedList;
