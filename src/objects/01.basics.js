/** If we define a function, it implicitly has an object prototype,
  * to which newly created object using this function wil be chained
  */
function Employee(employeeName, employeeJobType) {
  /** This is an JavaScript's way of implementing a private variable using
    * variables and closures. Closures getName and getJobType keeps variables
    * alive, while accessible only via those closures.
    */
  var name = employeeName, jobType = employeeJobType
  this.getName = () => name
  this.getJobType = () => jobType
}

const programmer = {
  code: function() {
    console.log("Happy coding!")
  }
}

/** Function prototype can have properties that can be searched by
  * an object created by calling this constructor.
  */
Employee.prototype.greet = function() {
  if (this.getName === undefined || this.getJobType === undefined) {
    console.log("Oops.. unable to access name of job type anymore!")
  } else {
    console.log("Hello from " + this.getName() +
                ". I am a(n) " + this.getJobType() + "!")
  }
}

const employee1 = new Employee("Alice", "programmer")
employee1.greet()

// We can delete an object's property using `delete`
delete employee1.getName
employee1.greet()

// Attempts to delete objects inherited from function prototype, but it fails
delete employee1.greet
console.log(employee1.greet === undefined)

const employee2 = new Employee("Bob", "designer")
employee2.greet()

// `in` is used to finc corresponding properties in the object
console.log("getName" in employee2 &&
            "getJobType" in employee2 &&
            "greet" in employee2)

/** Object.setPrototypeOf allows object in the left to search properties from
  * the object in the right.
  */
Object.setPrototypeOf(employee2, programmer)
console.log("Does Bob code?: " + ("code" in employee2))
console.log("Does Bob greet?: " + ("greet" in employee2))
employee2.code()
