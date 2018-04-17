/** Constuctor of a super class
  *
  */
function Pet() {}

/** Pet prototype has a property named cute, which can be accessed by any
  * object that includes Pet prototype in its prototype chain.
  */
Pet.prototype.cute = function() {}

/** Constuctor of the subclass
  *
  */
function Dog() {}
 
/** We override the Dog prototype so that the properties inside the Dog
  * prototype is accessible from objects created by Pet
  */
Dog.prototype = new Pet()

/** By overriding the Dog prototype, we lose the connection between the Dog
  * constructor function and the overrided prototype (new Pet())
  *
  * We explicitly add constructor property by Object.defineProperty, which 
  * is enumerable, thus cannot be accessed through for-in loop
  */
Object.defineProperty(Dog.prototype, "constructor", {
  enumerable: false,
  value: Dog,
  writable: true
})

const dog = new Dog()

/** All the following tests should pass
  *
  */
console.log(dog.cute !== undefined)
console.log(dog.constructor === Dog)
console.log(dog.constructor === Dog)
console.log(dog instanceof Dog)
console.log(dog instanceof Pet)
