/** Emulate negative indexed array using ES6 Proxy
  *
  */
function createNegativeArrayProxy(array) {
  if (!Array.isArray(array)) {
    throw new TypeError("Expected an array")
  }

  return new Proxy(array, {
    get: (target, index) => {
      index = +index
      return target[index < 0 ? target.length + index : index]
    },

    set: (target, index, value) => {
      index = +index
      target[index < 0 ? target.length + index : index] = value
    }
  })
}

let dogs = ["poodle", "retriever", "husky", "beagle"]
dogs = createNegativeArrayProxy(dogs)

console.log(dogs[-1])
console.log(dogs[-2] = "dochshund")

console.log(dogs[2])
