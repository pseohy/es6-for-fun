/** class is basically a syntactic sugar of prototype chain, available in ES6.
  * The underlying principles are not changed.
  */
class Pet {
  // If we create an object with new keyword, the constructor is automatically
  // called
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  // We can define additional methods that instances can access. This is
  // similar to adding properties to the constructor prototype
  cute() {
    console.log(this.name + " is cute")
  }

  /** ES6 static method allows us to write a static method that can be called
    * only by classes, rather than instances. You may think of these static
    * methods as properties added to the constructor function itself, rather
    * than the constructor prototype.
    */
  static compare(p1, p2) {
    return p1.age - p2.age
  }
}

/** ES6 class is useful expecially when we try to create inheritances.
  */
class Dog extends Pet {
  constructor(name, age, breed) {
    super(name, age)
    this.kind = breed 
  }
}

const dogs = [new Dog("Cute", 5, "Poodle"),
              new Dog("Gold", 6, "Retriever"),
              new Dog("Snow", 3, "Husky")]

for (let i = 0; i < 3; i++) {
  dogs[i].cute()
}

const dogs_sorted = dogs.sort(Pet.compare)

for (let i = 0; i < 3; i++) {
  dogs_sorted[i].cute()
}
