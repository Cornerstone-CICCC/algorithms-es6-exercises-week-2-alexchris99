/*
In this exercise, we will be converting a normal string into camelCase text.

Case Maker
We will receive a normal string of words separated with spaces as the input. Our job is to convert these strings into camel cased strings.

Instruction
Create a function named camelCase that will convert a string to camel case, and return the result.
*/

const camelCase = function (input) {
  let new_string = input.split(" ")
  let text = " "
  for(let i = 0; i < new_string.length; i++){
    if( i == 0){
      text += new_string[i]
    }
    else{
      text += new_string[i][0].toUpperCase() + new_string[i].slice(1)
    }
  }
return text
};

console.log(camelCase("this is a string")); // thisIsAString
console.log(camelCase("loopy cornerstone")); //loopyCornerstone
console.log(camelCase("supercalifragalisticexpialidocious")); // supercalifragalisticexpialidocious

module.exports = camelCase;
