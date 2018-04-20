/** String.replace method provides way to replace matching expression with new
  * replacement value. Good parts are that we can pass a function that is
  * invoked for each match found.
  */
const repository = "es6-for-fun"

const camelCased = repository.replace(/-(\w)/g, (all, c) => {
  return c.toUpperCase()
})

console.log(camelCased)

/** As an exercise, we can write a function that gather values that belongs to
  * an identical key.
  */
const data = "{'foo': 1, 'bar': 2, 'foo': 3, 'bar': 4, 'baz': 5}"
const prop = /'(\w+)'\s*:\s*(\w+)[,]?/g

data.match(prop).forEach(e => console.log(e))

function compress(source) {
  let keys = {}

  source.replace(/'(\w+)'\s*:\s*(\w+),?/g, function(all, key, value) {
    if (keys[key] === undefined) {
      keys[key] = [value]
    } else {
      keys[key].push(value)
    }
    return ""
  })

  let result = [], i = 0

  for (let key in keys) {
    if (keys[key].length > 1) {
      result[i] = key + ":[" + keys[key].join(", ") + "]"
    } else {
      result[i] = key + ":" + keys[key][0]
    }
    i++
  }

  return "{" + result.join(", ") + "}"
}

console.log(compress(data))

