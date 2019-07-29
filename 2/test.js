class Animal {
	constructor(name) {
		this.name = name;
	}
	sayHi() {
		return `My name is ${this.name}`
	}
}

class Cat extends Animal {
	constructor(name) {
		super(name);
		console.log('constructor', this.name);
	}
	sayHi() {
		return 'Cat' + super.sayHi();
	}
}

let c = new Cat('Tom');
console.log('end', c.sayHi());