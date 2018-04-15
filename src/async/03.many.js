/** Promise.all takes in an array of promises and creates a new Promise, which
  * resolves only if all the input promises resolves, otherwise reject. The
  * output value of all promises is an array of resolved output of each promise
  * arranged in order.
  */
Promise.all([dogPromise("Shepherd"),
             dogPromise("Retriever"),
             dogPromise("Beagle"),
             dogPromise("Husky")]).then(dogs => {
               for (let i = 0; i < dogs.length; i++) {
                 console.log(dogs[i])
               }
             }).catch(e => console.log(e))

/** Promise.race is similar to Promise.all, but for now, there is a race!
  * The created Promise resolves or rejects, as soon as the first Promise is
  * resolved or rejected
  */
Promise.race([dogPromise("Shepherd"),
              dogPromise("Retriever"),
              dogPromise("Beagle"),
              dogPromise("Husky")]).then(dog => {
                console.log(dog)
              }).catch(e => console.log(e))

function dogPromise(dog) {
  return new Promise((resolve, reject) => {
    if (typeof dog === "string") {
      resolve(dog + " is cute")
    } else {
      reject("A dog name is a string")
    }
  })
}
