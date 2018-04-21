const name = "John"
const age = 23
const random = "dance"

// template literal
const greeting = `${name} is ${age} years old`

const john = {
  // enhanced object literal
  name,
  age,
  greet: () => {
    console.log(`Hello, I am ${this.name}. I am ${this.age} years old`)
  },

  // computed property
  [random + "Happy"]: () => {
  }
}

// destructuring arrays
const dogs = ["Poodle", "Retriever", "Husky", "Dachshund"]

const [poodle, retriever, husky, dachshund] = dogs

const [,,cute,] = dogs
console.log(cute === "Husky")

// spread operator
const [first, second, ...remaining] = dogs
console.log(remaining.length === 2)

const cube = {
  x: 40,
  y: 60,
  z: 80
}

// destructuring objects
const {x, y, z} = cube
const {x: xx, y: yy} = cube

console.log(xx + " " + yy)
