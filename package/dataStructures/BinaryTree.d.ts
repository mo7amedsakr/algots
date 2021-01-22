import { CompareFunction } from '../core/compare';
declare type NodeType<T> = Node<T> | null;
declare class Node<T> {
    data: T;
    left: NodeType<T>;
    right: NodeType<T>;
    constructor(data: T, left: NodeType<T>, right: NodeType<T>);
}
export declare class BinaryTree<T> {
    private root;
    private compare;
    constructor(compare?: CompareFunction<T>);
    getRoot(): NodeType<T>;
    isEmpty(): boolean;
    insert(data: T, tree?: NodeType<T>): Node<T>;
    search(data: T, tree?: NodeType<T>): boolean;
    leftIterator(): Generator<T, void, unknown>;
    rightIterator(): Generator<T, void, unknown>;
    minValueNode(): NonNullable<T>;
    maxValueNode(): NonNullable<T>;
}
export {};
