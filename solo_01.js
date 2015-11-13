//Write a single JavaScript file to automatically calculate employee STI (short term incentive) for a company.

//The company is providing you with a few sample arrays. These sample arrays contain employee data.  Each array is like a row in a spreadsheet.

/*Each array currently is configured in this way: The first item holds the employee's name.
He second item has their employee number. The third item is annual salary. Fourth item is review rating.*/

//Instructions

var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

//1. Create an Employee constructor that is capable of holding each employee's data.
var Employee = function(employName, employNum, employSalary, employReview) {
  this.employName = employName;
  this.employNum = employNum;
  this.employSalary = parseInt(employSalary); //salary is a string, change to number to make it easier below
  this.employReview = employReview;
};

//2. Convert each employee into an instance of an Employee object.
var employee1 = new Employee('Atticus', '2405', '47000', 3);
var employee2 = new Employee('Jem', '62347', '63500', 4);
var employee3 = new Employee('Boo', '11435', '54000', 3);
var employee4 = new Employee('Scout', '6243', '74750', 5);


//3. Store each instance in an array called employees.
var employees = [employee1, employee2, employee3, employee4];

//4. Write a function that evaluates the employees data (follow instructions in Evaluating Employee Data).
/*
    The first item should also contain the employees name.
    The second item should contain the percentage of STI the employee is to receive.
    The third item should be the adjusted annual compensation (base annual + STI)
    The fourth item should be the employees total bonus rounded to the nearest dollar.

    To calculate an individuals STI:

        Those who have a rating of a 2 or below should not receive a bonus.
        Those who have a rating of a 3 should receive a base bonus of 4% of their base annual income.
        Those who have a rating of a 4 should receive a base bonus of 6% of their base annual income.
        Those who have a rating of a 5 should receive a base bonus of 10% of their base annual income.
        If they have 4 employee numbers, this means they have been with the company for longer than 15 years, and should receive an additional 5%.
        However, if their annual income is greater than $65,000, they should have their bonus adjusted down 1%.
        No bonus can be above 13% total.

    */

//Originally submitted function only using if/else statements, but realized after submitting there was an error in the calculations.  Figured out
//that switch + if statement would be better and produce right numbers.
var calcSTI = function(employee) {
  var bonusPercent;

  switch (employee.employReview) {
    case 2:
      bonusPercent = 2;
      break;
    case 3:
      bonusPercent = 4;
      break;
    case 4:
      bonusPercent = 6;
      break;
    case 5:
      bonusPercent = 10;
      break;
    default:
      bonusPercent = 0;
  };

  if (employee.employNum.length === 4) {
    bonusPercent += 5;
  };
  if (employee.employSalary > 65000) {
    bonusPercent--;
  };
  if (bonusPercent > 13) {
    bonusPercent = 13;
  };

  var sti = {
    name: employee.employName,
    sti: bonusPercent,
    totalcomp: employee.employSalary + Math.round(employee.employSalary * bonusPercent / 100), //math.round to round the value of employSalary * bonusPercent/100(to make decimal)
    totalbonus: Math.round(employee.employSalary * bonusPercent / 100)
  };
  return sti;
};

//5. Iterate over the employees array and input each index of the array to your function.
//console.log the results of each iteration.*/
for (var i = 0; i < employees.length; i++) {
  console.log(calcSTI(employees[i]));
};
