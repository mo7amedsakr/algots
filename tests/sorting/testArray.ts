import { getRandomInt } from '../utils/getRandomInt';

class Person {
	constructor(public age: number) {}
}

const persons: Person[] = [];

for (let i = 0; i < 100000; i++) {
	persons.push(new Person(getRandomInt(0, 100000)));
}

const comparePerson = (a: Person, b: Person) => {
	return a.age < b.age ? -1 : a.age > b.age ? 1 : 0;
};

export { persons, comparePerson };
