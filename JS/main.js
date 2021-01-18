
const lib = require("./lib");

console.log("Welcome to EmployeeWage Computation Program")

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;
 
lib.getWorkingHours = (empCheck) => {
    switch(empCheck){
        case 1:
            return PART_TIME_HOURS;
        case 2:
            return FULL_TIME_HOURS;
            default:
                return 0;
    }
}

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empdailyWageArr = new Array();
//let empDailyWagemap = new Map();

while(totalWorkingDays <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck = lib.rollDice();
    let empHrs = lib.getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empdailyWageArr.push(lib.calDailyWage(empHrs, WAGE_PER_HOUR));
    //empDailyWagemap.set(totalWorkingDays, lib.calDailyWage(empHrs));
}
let empWage = lib.calDailyWage(totalEmpHrs);
//let empWage = totalEmpHrs * WAGE_PER_HOUR;
//console.log("Emp Wage totalHrs:" + Array.from(empDailyWagemap.values()).reduce(totalWages, 0));
console.log("TotalDays:" + totalWorkingDays + " Total Hour:" + totalEmpHrs + " Emp Wage:" + empWage) 

totalEmpWage = lib.sum();
console.log(empdailyWageArr);
console.log("Total days: " + totalWorkingDays + " total Hrs:" + totalEmpHrs + " Emp wage:" + totalEmpWage);
console.log("Emp Wage reduce:" + empdailyWageArr.reduce(totalWages, 0));

let mapDailyWithWageArr = empdailyWageArr.map(lib.mapDailyWithWage)
console.log("Daily wage map");
console.log(mapDailyWithWageArr)