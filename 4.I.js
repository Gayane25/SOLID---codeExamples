//Interface segregation principle

class Animal {
  constructor(name) {
    this.name = name;
  }
}

const swimmer = {
  swim() {
    console.log(`${this.name} can swim`);
  },
};
const walker = {
  walk() {
    console.log(`${this.name} can walk`);
  },
};
const flier = {
  fly() {
    console.log(`${this.name} can fly`);
  },
};
class Dog extends Animal {}
class Eagle extends Animal {}
class Whale extends Animal {}
Object.assign(Dog.prototype, swimmer, walker);
Object.assign(Eagle.prototype, flier, walker);
Object.assign(Whale.prototype, swimmer);

const dog = new Dog('Rex');
console.log(dog.walk());
console.log(dog.swim());
const eagle = new Eagle('eaglik');
console.log(eagle.walk());
console.log(eagle.fly());
const whale = new Whale('whale');
console.log(whale.swim());
