/** Proxy is an ES6 feature that wrap a target object and control access to
  * the target object, if an access is made via the Proxy.
  */
const dog = { name: "Gold", age: 3 }

/** We can define a new Proxy by passing the target object and an object that
  * defines a set of traps, which takes control if certain types of access is
  * made to an object.
  *
  * Note that there are some operators that can not be trapped by a Proxy:
  *   `==` or `===`, `typeof` and `instanceof`
  */
const owner = new Proxy(dog, {
  get:(target, prop) => {
    console.log("My dog's " + prop + "?")
    return prop in target ? target[prop] : "Hmm... I don't know"
  },
  set: (target, prop, src) => {
    console.log("I will remember my dog's " + prop)
    target[prop] = src
  }
})

console.log(dog.name)
console.log(owner.name)

console.log(owner.breed)
owner.breed = "Retriever"

console.log(dog.breed)
console.log(owner.breed)
