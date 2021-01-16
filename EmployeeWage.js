console.log("Welcome to EmployeeWage Computation Program")

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;

function getWorkingHours(empCheck) {
    switch(empCheck){
        case 1:
            return PART_TIME_HOURS;
            break;
        case 2:
            return FULL_TIME_HOURS;
            break;
            default:
                return 0;
    }
}

function calDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empdailyWageArr = new Array();

while(totalWorkingDays <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empdailyWageArr.push(calDailyWage);
}
let empWage = calDailyWage(totalEmpHrs);
console.log("Total Days: " + totalWorkingDays + " Total Hour: " + totalEmpHrs + " Employee Wage: " + empWage );
