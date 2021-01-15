console.log("Welcome to EmployeeWage Computation Program")
const IS_ABSENT = 0;
const IS_FULL_TIME = 1;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

let empCheck = Math.floor(Math.random() * 10);
if(empCheck == IS_ABSENT){
    console.log("Employee is ABSENT")
} else{
    console.log("Employee is PRESENT")
} 

let empWage = empCheck * WAGE_PER_HOUR;
console.log("Employee Wage:" + empWage)
