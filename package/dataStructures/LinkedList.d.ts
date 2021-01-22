export declare class LinkedList<T> {
    private n;
    private head;
    private tail;
    constructor();
    isEmpty(): boolean;
    size(): number;
    unshift(data: T): void;
    push(data: T): void;
    shift(): T;
    toArray(): T[];
    reverse(): void;
    [Symbol.iterator](): Generator<T, void, unknown>;
}
