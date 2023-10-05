class Key {
  constructor(private signature: number) {}

  public getSignature() {
    return this.signature;
  }
}

class Person {
  constructor(private key: {}) {
   
  }

  public getKey() {
    return this.key;
  }
}

abstract class House {
    public tenants: {}[]=[]
    public door: boolean;
  constructor( public key: {}) {}

  public comeIn(person: {}) {
    if (this.door) {
         this.tenants.push(person)
         return this.tenants
    } else {
        return
    }

  }

  public abstract openDoor(personKey): boolean
}

class MyHouse extends House {
    public door: boolean
  constructor(public key: {}) {
    super ( key);
  }

  public openDoor(personKey): boolean {
    if(personKey===key) {
        return this.door = true
    } else {
        return this.door=false
    }
  }
}

const key = new Key(Math.random());
console.log(key)


const house = new MyHouse(key);
console.log(house)

const person = new Person(key);
console.log(person)

console.log(house.openDoor(person.getKey()));

console.log(house.comeIn(person));

export {};
