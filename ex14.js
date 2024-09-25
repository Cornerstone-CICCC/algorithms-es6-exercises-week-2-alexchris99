/*
In this activity, we are going to create a function that can calculate 
which coins we should use when we need to give change.

Change Calculator
We will be given two numbers, the total of a transaction, 
and the amount of cash given to the cashier. Both of these 
numbers will be represented as whole numbers in cents. 
Therefore $10 will be represented as 1000.

Our function calculateChange should return an object which 
describes the total amount of change for the cashier to give back. 
Although pennies are not used in circulation, we will still calculate 
the amount of pennies to give back.

Instruction
Create a function named calculateChange that takes in a total 
amount of a bill and the total cash given to pay that bill. Return 
a new object that describes the total amount of change for the cashier 
to give back. Omit any types of change that you shouldn't 
give back, i.e. if you don't give back a twenty dollar bill, 
don't include it in the results.

Valid denominations are as follows:

Twenty dollars
Ten dollars
Five dollars
Two dollars
One dollar
Quarter (25¢)
Dime (10¢)
Nickel (5¢)
Penny (1¢)
*/

const calculateChange = function (total, cash) {
  let cashToGive = cash - total;
  let amount = {
    twentyDollar: 0,
    tenDollar: 0,
    fiveDollar: 0,
    twoDollar: 0,
    oneDollar: 0,
    quarter: 0,
    dime: 0,
    nickel: 0,
    penny: 0,
  }
  
  while( cashToGive != 0){
    if(cashToGive >= 2000){
      cashToGive = cashToGive - 2000
      amount.twentyDollar += 1
    }
    else if(cashToGive >= 1000){
      cashToGive = cashToGive - 1000
      amount.tenDollar += 1
    }
    else if(cashToGive >= 500){
      cashToGive = cashToGive - 500
      amount.fiveDollar += 1
    }
    else if(cashToGive >= 200){
      cashToGive = cashToGive -200
      amount.twoDollar += 1
    }
    else if(cashToGive >= 100){
      cashToGive = cashToGive - 100
      amount.oneDollar += 1
    }
    else if(cashToGive >= 25){
      cashToGive = cashToGive - 25
      amount.quarter += 1
    }
    else if(cashToGive >= 10){
      cashToGive = cashToGive - 10
      amount.dime +=1
    }
    else if(cashToGive >= 5){
      cashToGive = cashToGive -5
      amount.nickel += 1
    }
    else{
      cashToGive = cashToGive -1
      amount.penny += 1
    }
  }

  let newArray = {}

  for(let key in amount){
    if(amount[key]  !== 0){
      newArray[key] = amount[key]
    }
  }

    return newArray
};

console.log(calculateChange(1787, 2000)); // { twoDollar: 1, dime: 1, penny: 3 }
console.log(calculateChange(2623, 4000)); // { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
console.log(calculateChange(501, 1000)); // { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }

module.exports = calculateChange;
