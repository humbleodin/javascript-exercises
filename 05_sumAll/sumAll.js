const sumAll = function(a, b) {
    let output = 0;
    if ((typeof a !== "number" || typeof b !== "number")) {
        // (a returns true, b is false)
        return "ERROR";
    }
    if (a > 0 && b > a) {
        for (i = a; i <= b; i++) {
            output = Number(output) + Number(i);
            }
    }
    else if(a > b) {
        for (i = a; i >= b; i--) {
            output = Number(output) + Number(i);
        }
    }
    else {
        return "ERROR";
    }
    return output;
};
// Do not edit below this line
module.exports = sumAll;
