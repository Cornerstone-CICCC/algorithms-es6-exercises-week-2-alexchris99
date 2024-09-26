/*Caze Maker II
We will still be given an input string to convert. However, this time, we'll also be given a casing style to work with. 
The following code block will describe all the casing styles to support. We may also receive an array of casing styles, and each of these should be applied.

Instruction
Create a function named makeCaze that will receive an input string and one or more casing options. 
Return a new string that is formatted based on casing options:

Precedence of each of the casing styles are as follows, values higher in the list should be processed first:

camel, pascal, snake, kebab, title
vowel, consonant
upper, lower
Our function should be able to handle all of these cases.

For more information on casing styles, read Wikipedia's Special Case Styles for a list of various casing examples.

*/

const makeCaze = function (input, caze) {
  let solution = " "
  input = input.split(" ")
  switch(caze){
    case "camel":
      for(let i = 0; i < input.length; i++){
        if( i == 0){
          solution += input[i]
        }
        else{
          solution += input[i][0].toUpperCase() + input[i].slice(1)
        }
      }
      break;
    case "pascal":
      for(let i = 0; i < input.length; i++){
          solution += input[i][0].toUpperCase() + input[i].slice(1)
      }
      break
    case "snake":
      solution = input.join("_")
      break
    case "kebab":
      solution = input.join("-")
      break
    case "title":
      for(let i = 0; i < input.length; i++){
          solution += input[i][0].toUpperCase() + input[i].slice(1) + " "
        }
      break
    case "vowel":
      for(let i = 0; i < input.length; i++){
        input[i] = input[i].split("")
        for(let j = 0; j < input[i].length; j++){
          if(input[i][j] == "a" || input[i][j] == "e" || input[i][j] == "i" || input[i][j] == "o" || input[i][j] == "u"){
            input[i][j] = input[i][j].toUpperCase()
          }
        }
        solution += input[i].join("") + " "
      }
      break
    case "consonant":
      for(let i = 0; i < input.length; i++){
        input[i] = input[i].split("")
        for(let j = 0; j < input[i].length; j++){
          if(input[i][j] != "a" && input[i][j] != "e" && input[i][j] != "i" && input[i][j] != "o" && input[i][j] != "u"){
            input[i][j] = input[i][j].toUpperCase()
          }
        }
        solution += input[i].join("") + " "
      }
      break
    default:
      let res = ""
      for(let i = 0; i < input.length; i++){
        input[i] = input[i].split("")
        for(let j = 0; j < input[i].length; j++){
          input[i][j] = input[i][j].toUpperCase()
        }
        if( i + 1 == input.length){
          input [i] = input[i].join("")
        }else{
          input [i] = input[i].join("") + " "
        }
        res += input[i]
      }
        res = res.split(" ")
        solution = res.join("_")
      
      break
  }
  return solution
};

console.log(makeCaze("this is a string", "camel")); // thisIsAString
console.log(makeCaze("this is a string", "pascal")); // ThisIsAString
console.log(makeCaze("this is a string", "snake")); // this_is_a_string
console.log(makeCaze("this is a string", "kebab")); // this-is-a-string
console.log(makeCaze("this is a string", "title")); // This Is A String
console.log(makeCaze("this is a string", "vowel")); // thIs Is A strIng
console.log(makeCaze("this is a string", "consonant")); // THiS iS a STRiNG
console.log(makeCaze("this is a string", ["upper", "snake"])); // THIS_IS_A_STRING

module.exports = makeCaze;
