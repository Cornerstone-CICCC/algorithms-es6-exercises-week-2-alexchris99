/*In this exercise, we will be given a list of instructors and we will create a single object 
to organize them based on their course.

Instruction
Create a function named organizeInstructors that will receive an array of instructor objects, 
and will return a new object that has the following format:

{
  CourseName: [instructors]
} 
*/

const organizeInstructors = function (instructors) {
  let courses = []

  let newArray = {
  }

  for(let i = 0; i < instructors.length; i++){
    if(courses.length == 0){
      courses.push(instructors[i].course)
    }else if(instructors[i].course in courses){

    }else{
      courses.push(instructors[i].course)
    }
  }

  let uniqueC = [...new Set(courses)]

  for(let i = 0; i < uniqueC.length; i++){
    newArray[uniqueC[i]] = []
  }



  for(let i = 0; i < instructors.length; i++){
    if(instructors[i].course == "Web"){
      newArray.Web.push(instructors[i].name)
    } else if(instructors[i].course == "iOS"){
      newArray.iOS.push(instructors[i].name)
    }else{
      newArray.Blockchain.push(instructors[i].name)
    }
  }
  
  return newArray
}

console.log(
  organizeInstructors([
    { name: "Samuel", course: "iOS" },
    { name: "Victoria", course: "Web" },
    { name: "Karim", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
); // { iOS: ["Samuel"], Web: ["Victoria", "Karim", "Donald"]}
console.log(
  organizeInstructors([
    { name: "Brendan", course: "Blockchain" },
    { name: "David", course: "Web" },
    { name: "Martha", course: "iOS" },
    { name: "Carlos", course: "Web" },
  ])
); //{ Blockchain: ["Brendan"], Web: ["David", "Carlos"], iOS: ["Martha"]}

module.exports = organizeInstructors;
