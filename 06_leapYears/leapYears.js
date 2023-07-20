// create a function determing if given year is a leap year
// leap years are divisible by 4 
// leap years are not divisible by 100, unless also divisible by 400
// if returns true, then it is leap year
// false then is not a leap year

const leapYears = function(year) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            return true;
        }
        else {
            return false;
        }
    }
    else if (year % 4 === 0) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
