/*
In this exercise, we will be given an array of 2 or more numbers. 
We will then have to find the two largest numbers in that array, 
and sum them together.

Instruction
Create a function named sumLargestNumbers that will receive an 
array of numbers and return the sum of the two largest numbers in 
that array.
*/

const sumLargestNumbers = function (data) {
  let num1 = 0
  let num2 = 0
  let num3 = 0
  if(data.length == 2){
    data.forEach(element => {
      num1 += element
    });
    return num1
  }
  else{
    data.forEach(element => {
      num1 = 1
      if(num1 < element){
        num2 = element
        console.log(num2)
      }
      else{
        num1 = element
      }
    });
  }
};

console.log(sumLargestNumbers([1, 10])); // 11
console.log(sumLargestNumbers([1, 2, 3])); // 5
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); // 126

module.exports = sumLargestNumbers;
