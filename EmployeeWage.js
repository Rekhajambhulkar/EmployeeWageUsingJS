console.log("Welcome to EmployeeWage Computation Program")

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

let empHrs = 0;
let empCheck = Math.floor(Math.random() * 10) % 3;
if(empCheck == IS_FULL_TIME){
    console.log("Employee is Full Time")
} if (empCheck == IS_PART_TIME) {
    console.log("Employee is Part Time")
} else {
    console.log("Employee is ABSENT")
}

let empWage = empCheck * WAGE_PER_HOUR;
console.log("Employee Wage:" + empWage)
