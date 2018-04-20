/** Map is a new ES6 featues that enables more generic implementation of maps,
  * that key and value can be any objects. Pre-ES6 maps using properties can
  * only have 
  */
const majorIn = new Map()

const amy = { name: "Amy", course: "undergraduate" }
const bob = { name: "Bob", course: "graduate" }
const charlie = { name: "Charlie", course: "graduate" }

majorIn.set(amy, { department: "Computer Science" })
majorIn.set(bob, { department: "Mathematics" })
majorIn.set(charlie, { department: "Mechanical Engineering" })


/** The primitive methods acting on map instances are `set`, `get`, `has`,
  * `delete` and `clear`.
  */
console.log(majorIn.get(amy))
console.log(majorIn.delete(bob))

/** Unlike map emulate by objects, ES6 maps is accessed by for-of loop. 
  */
for (let elem of majorIn) {
  console.log(elem[0].name + " is in " + elem[1].department  + " department")
}

for (let student of majorIn.keys()) {
  console.log(student.name + " is a(n) " + student.course + " student")
}

for (let dept of majorIn.values()) {
  console.log(dept.department)
}
