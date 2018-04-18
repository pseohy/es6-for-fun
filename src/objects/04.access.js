/** Define getter and setter to access or manipulate private properties using
  * Object.defineProperty()
  */
function Employee() {
  let _salary = 0

  /** Here we create an object that has getter and setter as a closure so that
    * we can keep access to local variable defined within the constructor.
    *
    * The getters and setters especially comes in handy if we want logging or
    * data validation, implicitly.
    */
  Object.defineProperty(this, 'salary', {
    get: () => {
      console.log("Getting salary")
      return _salary
    },
    set: value => {
      if (!Number.isInteger(value)) {
        throw new TypeError("Salary is an integer")
      } else {
        console.log("Setting salary")
        _salary = value
      }
    }
  })
}

// create a new instance with `new` keyword and a constructor function.
const employee = new Employee()

console.log(employee.salary)

employee.salary = 40000

console.log(employee.salary)
