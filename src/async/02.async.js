/** This function helps asynchronous execution by combining generators and
  * promises
  */
function async(generator) {
  const iterator = generator()

  function handle(iteratorResult) {
    if (iteratorResult.done)
      /** if a generator function is exhausted, and there'e nothing to yield
        * it will return `undefined` as a value, and done is set to be true
        */
      return

    const iteratorValue = iteratorResult.value

    if (iteratorValue instanceof Promise) {
      /*
       * this code shows how we use the result of Promise for our further
       * execution. A Promise then will take one or two callbacks, which 
       * are executed on success or failure cases, respectively.
       * 
       * catch can be chained with then, and the callback passed to catch
       * is executed when the Promise rejects
       */
      iteratorValue
        .then(res => {
          handle(iterator.next(res))
          console.log(res)
        })
        .catch(err => iterator.throw(err))
    }
  }

  /*
   * this code initiates the iterator by calling next()
   */
  try {
    handle(iterator.next())
  } catch(e) {
    iterator.throw(e)
  }
}

/** This is an example generator. The value of each `yield` expression will be
  * substituted by the value passed to the generator as an argument of `next`
  * request
  */
async(function* () {
  try {
    const apple = yield fruitPromise("apple")
    const banana = yield fruitPromise("banana " + apple)
    // const number = yield fruitPromise(37)
    const grape = yield fruitPromise("grape " + banana)
  } catch(e) {
    // Oops..
    console.log(e)
  }
})

/** This is a wrapper function that return new Promise using provided argument.
  * A Promise constructor takes in a `executor` function, which has two 
  * function resolve and reject as arguments
  */
function fruitPromise(fruit) {
  return new Promise((resolve, reject) => {
    if (typeof fruit === "string") {
      resolve(fruit)
    } else {
      reject("I need a string")
    }
  })
}
