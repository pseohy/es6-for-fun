function* FibbonacciGenerator(i1=0, i2=1) {
  let p = { prev: i1, curr: i2 }

  while (true) {
    /** the execution of the generator function suspends
      * at the `yield`, until the next request arrives
      */
    yield p.prev
    p = ((p, c) => {
      return { prev: c, curr: p + c }
    })(p.prev, p.curr)
  }
}

/** if we call a generator function, it will create an iterator
  * of a generator function
  */
const fibonnaciGen = FibbonacciGenerator()

for (let i = 0; i < 40; i++) {
  console.log(fibonnaciGen.next().value)
}

