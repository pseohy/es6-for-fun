/** JavaScript Arrays are also an object, to which can have their own methods.
  * In JavaScript, we prefer using array literals [] to directly calling the
  * array constructor.
  */

const array = [3, 4, 0, 9, 11, 17, 12, 2]

/** We can add value to an arbitrary index and explicitly updates the length
  * of an array. Be aware of side effects!
  */
console.log("array.length: " + array.length)

array[11] = 9
console.log("array.length: " + array.length)

array.length = 8
console.log(array[8] === undefined)

/** Primary built-in array update methods are `push`, `pop`, `unshift` and
  * `shift`. In favor of performance, former methods that updates from the
  * end of the arrays are preferred.
  */
array.push(99)
console.log(array.pop())

console.log(array.shift())
array.unshift(3)

/** Array provides `splice` methods that allows us to remove elements starting
  * from any locaion in the array and push elements into array.
  */

// prints the original array
console.log(array)

const removed = array.splice(2, 3)
console.log(removed)

// insert removed element back to the original array using ES6 rest parameters
array.splice(2, 0, ...removed)
console.log(array)

/** JavaScript provides a number of combinators that can be applied to arrays:
  *   `map`, `every`, `find`, `some`, `filter`, `reduce` and so on.
  */

const employees = [{ name: "Amy", boss: "John" },
                   { name: "Bob" },
                   { name: "Charlie", boss: "Amy" }]

// map to an array of names
const names = employees.map(employee => employee.name)
console.log(names)

/** `every` and `some` can be terminated before it traverses every element in
  * an array. `every` terminates and returns false if if encounters one element
  * that fails the test, on the other hand, `some` terminates early if only
  * one element succeeds in test.
  */

// every employee has own name
console.log(employees.every(employee => "name" in employee))

// some every employee has a boss
console.log(employees.some(employee => "boss" in employee))

/** `filter` and `find` is used to find all or one element that passes the
  * the test.
  */
const hasABoss = employees.filter(employee => "boss" in employee)
console.log(hasABoss)

const amy = employees.find(employee => employee.name === "Amy")
console.log(amy)

/** `reduce` is similar to folding in functional programming context. It
  * aggregates the elements of arrays to output a summary.
  */
const concatenated = employees.reduce((aggregate, employee) => 
                                      aggregate + employee.name + " ",
                                      "")
console.log(concatenated)

/** Another useful method that comes with an array is `findIndex` 
  */
employees.push({ name: "Amy" })
console.log(employees.findIndex(employee => employee.name === "Amy"))
