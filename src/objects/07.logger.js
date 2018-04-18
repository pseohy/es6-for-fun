/** makeLoggable function returns a Proxy that wraps the target object with
  * customized get and set trap that perform logging.
  */
function makeLoggable(target) {
  return new Proxy(target, {
    get: (target, prop) => {
      console.log("Reading " + prop)
      return target[prop]
    },
    set: (target, prop, src) => {
      console.log("Writing to " + prop)
      target[prop] = src
    }
  })
}

let greeter1 = { name: "John" }
console.log(greeter1.name)
greeter1.name = "Alice"

/** Overriding the original object with a new Proxy
  */
greeter1 = makeLoggable(greeter1)
console.log(greeter1.name)
greeter1.name = "Bob"

// create a constructor
class Greeter {
  constructor(name) {
    this.name = name
  }

  greets() {
    console.log("Hello, my name is " + this.name)
  }
}

let greeter2 = new Greeter("Mia")
greeter2 = makeLoggable(greeter2)

// calling methods are not logged by simple get and set traps
greeter2.greets()

// making an object loggable doesn't affect its prototype chain
console.log(greeter2.constructor === Greeter)
console.log(greeter2 instanceof Greeter)
