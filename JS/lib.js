let totalEmpWage = 0;
let dailyCntr = 0;

rollDice = () => {
    return Math.floor(Math.random() *  10) % 3;
    }
   
getWorkingHours = (empCheck) => {
    return empCheck;
    }

calDailyWage = (empHrs, WAGE_PER_HOUR) => {
        return empHrs * WAGE_PER_HOUR;
    }

totalWages = (totalWage, dailyWage) => {
        return totalWage + dailyWage;
    }
sum = (totalEmpWage, dailyWage) =>{
        return totalEmpWage += dailyWage;
    }

mapDailyWithWage = (dailyWage) => {
    dailyCntr++;
    return dailyCntr + " = " + dailyWage;
} 

module.exports = {rollDice, getWorkingHours, calDailyWage, totalWages, sum, mapDailyWithWage}