/** ES6 set provides a container that doesn't allow duplicate emelemt. The
  * set constructor takes in an iterable.
  */
const A = new Set([1, 7, 3, 1, 9, 5])

/** There are built-in methods that acts on sets:
  *   `has`, `add`, `delete`, `clear`, `forEach`, `entries` and `size`.
  */
console.log(A.has(5))
console.log(A.has(7))

console.log("The size of A: " + A.size)

/** Set.prototype.entries() returns a set iterator of [value, value] pair.
  * Recall that JavaScript iterator is created when we call a generator
  * function and the next element can be accessed via next()
  */
const entries = A.entries()
for (let entry of entries) {
  console.log(entry[0] + ": " + entry[1])
}

const B = new Set([3, 5, 2, 11, 9])

/** Defines set union, intersection and difference function using ES6 rest
  * paramaters.
  */
function union(A, B) {
  return new Set([...A, ...B])
}

function intersection(A, B) {
  return new Set([...A].filter(a => B.has(a)))
}

function difference(A, B) {
  return new Set([...A].filter(a => !B.has(a)))
}

const C = union(A, B)
console.log(C)

const D = intersection(A, B)
console.log(D)

const E = difference(A, B)
console.log(E)
