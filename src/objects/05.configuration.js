/** There are different ways to define properties to an object. One way of
  * doint it is to use Object.defineProperty() method. It takes a property
  * descriptor object, which has properties like `configurable`, `enumerable`
  * `value`, `writable`, `get` and `set`.
  */
const dog = {
  name: "Gold",
  breed: "Retriever"
}

Object.defineProperty(dog, 'bark', {
  // if this is set to be true, we can configure or delete this property
  configurable: true,

  // Do NOT use arrow function here if you want to access proerties of an
  // instance
  value: function() {
    console.log(this.name + ' is barking')
  },

  // if this is set to be true, we can access the property via for-in loop
  enumerable: false
})

// Gold can bark
dog.bark()

// `bark` doesn't appear from for-in loop
for (let prop in dog) {
  console.log(prop)
}
