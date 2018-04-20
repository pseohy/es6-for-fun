/** JavaScript reglar expressions are powerful tool that allows us to match
  * patterns in elegant ways.
  */
const html = "<div class='square'><b>Hello</b> <i>world</i></div>"

/** A RegExp object can be created by regular expression literal or by calling
  * a constructor. A RegExp can have flags include `i`, `g` and so on.
  *
  * By using a constructor, we can use a string created during runtime as a
  * pattern to match.
  */
const tag = /<(:?\/?)(\w+)([^>]*?)>/g
const tag2 = new RegExp("<(:?\/?)(\\w+)([^>]*?)>", "g")

/** Inside the pattern, we use parentheses to group charcters so that following
  * `+` or `*` operators are applied to the group as a whole.
  *
  * As a side effect, these parentheses form captures, which may be backreferenced
  * within the pattern, or replace by other expression by String.replace method.
  *
  * If you don't want to create a capture by grouping charaters with parentheses,
  * you can put notation `:?` after the opening parenthesis.
  */

// Back referencing example
const element = /<(\w+)([^>]*?)>([\s\S]*)?<\/\1>/g
const elems = html.match(element)

// uses passive subexpression to prevenet creating unnecessary captures
const greeting = /((?:hello-)+)world/
const hello = "hello-hello-hello-hello-world"

console.log(hello.match(greeting)[1])
