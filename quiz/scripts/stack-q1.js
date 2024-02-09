class PStack {
  #id;
  constructor() {
    this.#id = 1;
    this._persons = [];
  }

  showId() {
    return this.#id;
  }

    // Method to safely add persons to the stack
  addPersons(personsArray) {
    this._persons.push(...personsArray);
  }

    getPersons() {
    return [...this._persons]; // Return a copy to prevent direct modification
  }

}

class PStackImpl extends PStack {
  constructor() {
    super();
  }

  push(p) {
    return this._persons.push(p)
  }

  pop() {
    const person = this._persons.pop();
    return person ? person.age : undefined; // Safely return the age, or undefined if no person
  }
}

let pstack = new PStackImpl();
pstack.persons = [{name: 'Jojo', age: 21}, {name: 'Gabi', age: 29}]
pstack.push({name: 'Dein', age: 19});
console.log(pstack.pop());
console.log(pstack.pop());
console.log(pstack.persons);
