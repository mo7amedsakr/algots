(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../core/compare"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BinaryTree = void 0;
    const compare_1 = require("../core/compare");
    class Node {
        constructor(data, left, right) {
            this.data = data;
            this.left = left;
            this.right = right;
        }
    }
    class BinaryTree {
        constructor(compare = compare_1.defaultCompareFunction) {
            this.root = null;
            this.compare = compare;
        }
        getRoot() {
            return this.root;
        }
        isEmpty() {
            return this.root === null;
        }
        insert(data, tree = this.root) {
            if (this.isEmpty()) {
                this.root = new Node(data, null, null);
            }
            else if (tree === null) {
                tree = new Node(data, null, null);
            }
            else if (this.compare(data, tree.data) <= 0) {
                tree.left = this.insert(data, tree.left);
            }
            else {
                tree.right = this.insert(data, tree.right);
            }
            return tree;
        }
        search(data, tree = this.root) {
            if (tree === null)
                return false;
            else if (this.compare(tree.data, data) === 0)
                return true;
            else if (this.compare(data, tree.data) < 0)
                return this.search(data, tree.left);
            else
                return this.search(data, tree.right);
        }
        *leftIterator() {
            let node = this.root;
            while (node !== null) {
                yield node.data;
                node = node.left;
            }
        }
        *rightIterator() {
            let node = this.root;
            while (node !== null) {
                yield node.data;
                node = node.right;
            }
        }
        minValueNode() {
            if (this.isEmpty())
                throw new Error('Binary tree underflow');
            let data;
            for (const d of this.leftIterator()) {
                data = d;
            }
            return data;
        }
        maxValueNode() {
            if (this.isEmpty())
                throw new Error('Binary tree underflow');
            let data;
            for (const d of this.rightIterator()) {
                data = d;
            }
            return data;
        }
    }
    exports.BinaryTree = BinaryTree;
});
