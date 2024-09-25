/*
In this activity, we will be converting date strings like "2017/12/02", 
into more English friendly date strings like December 2nd, 2017.

Talking Calendar
We will be given a date as a string (not a Date object). 
The date will always be formatted as YYYY/MM/DD. We will have 
to parse the given string and produce a human readable date.

Instruction
Create a function named talkingCalendar that takes in a date 
string with the format YYYY/MM/DD, and returns a new human readable 
date that looks like December 2nd, 2017.
*/


const talkingCalendar = function (date) {
  newDat = date.split("/")
  const year = newDat[0]
  const month = newDat[1]
  let day = newDat[2] 

  const months = ["January", "February","March", "April", "May", "June", "July", "August", "September", "October", "November","December"]
  let month_d = parseInt(month)-1

  switch(day){
    case '01': 
      day = '1st';
      break;
    case '02': 
      day = '2nd';
      break;
    case '03': 
      day = '3rd';
      break;    
    case '11': case '21': case '31':
      day += 'st';
      break;
    case '12': case '22':
      day += 'nd';
      break;
    case '13': case '23':
      day += 'rd';      
      break;

    default:
      day += 'th';
      break;
  }

return `${months[month_d]} ${day}, ${year}`;
};

console.log(talkingCalendar("2017/12/02")); // December 2nd, 2017
console.log(talkingCalendar("2007/11/11")); // November 11th, 2007
console.log(talkingCalendar("1987/08/24")); // August 24th, 1987

module.exports = talkingCalendar;
