import { BinaryTree } from '../../src/dataStructures/BinaryTree';

describe('binary tree', () => {
	test('should create binary tree and create a root for it', () => {
		const tree = new BinaryTree<number>();
		tree.insert(20);
		expect(tree.search(20)).toBeTruthy();
	});

	test('should create binary tree and insert elements in right positions', () => {
		const tree = new BinaryTree<number>();
		tree.insert(20);
		tree.insert(40);
		tree.insert(17);
		tree.insert(66);
		tree.insert(17);
		tree.insert(16);

		let temproot = tree.getRoot();
		while (temproot?.left) {
			temproot = temproot.left;
		}

		expect(temproot?.data).toEqual(16);
	});

	test('should create binary tree with persons', () => {
		class Person {
			constructor(public age: number) {}
		}
		const comparePerson = (a: Person, b: Person) => {
			return a.age < b.age ? -1 : a.age > b.age ? 1 : 0;
		};
		const tree = new BinaryTree<Person>(comparePerson);
		tree.insert(new Person(15));
		tree.insert(new Person(88));
		tree.insert(new Person(8));
		tree.insert(new Person(6));
		tree.insert(new Person(69));

		let temproot = tree.getRoot()!;
		while (temproot.left) {
			temproot = temproot.left;
		}

		expect(temproot.data.age).toEqual(6);
	});

	test('should return the min element in the binary tree', () => {
		const tree = new BinaryTree<number>();
		tree.insert(20);
		tree.insert(40);
		tree.insert(17);
		tree.insert(66);
		tree.insert(17);
		tree.insert(16);

		expect(tree.minValueNode()).toEqual(16);
	});

	test('should return the max element in the binary tree', () => {
		const tree = new BinaryTree<number>();
		tree.insert(20);
		tree.insert(40);
		tree.insert(17);
		tree.insert(66);
		tree.insert(17);
		tree.insert(16);

		expect(tree.maxValueNode()).toEqual(66);
	});
});
