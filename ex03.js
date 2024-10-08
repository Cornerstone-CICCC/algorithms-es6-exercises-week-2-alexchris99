/*
In this exercise, we will be counting the number of vowels that appear in a given string. 
For this exercise, consider the following to be vowels: a, e, i, o, and u.

Instruction
Create a function named numberOfVowels that will receive a string and return the number of vowels in that string.

*/

const numberOfVowels = function (data) {
  data = data.split("")
  let cont = 0
  const vowels = data.filter(item =>{
    if(item == "a" || item == "e" || item == "i" || item == "o" || item == "u"){
      cont+=1
    }
  })
  return cont
};

console.log(numberOfVowels("orange")); // 3
console.log(numberOfVowels("cornerstone college")); // 7
console.log(numberOfVowels("aeiou")); // 5

module.exports = numberOfVowels;
