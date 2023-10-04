class Key {
  constructor(private signature: number) {}

  getSignature() {
    return this.signature;
  }
}

class Person {
  constructor(private key: {}) {
   
  }

  getKey() {
    return this.key;
  }
}

class House {
  constructor(public door: boolean, public key: {}) {}

  comeIn() {}

  openDoor() {}
}

class MyHouse extends House {
  constructor(public door: boolean, public key: {}) {
    super(door, key);
  }
}

const key = new Key(Math.random());

console.log(key)

const house = new MyHouse(key);
const person = new Person(key);
console.log(person)

house.openDoor(person.getKey());

house.comeIn(person);

export {};
