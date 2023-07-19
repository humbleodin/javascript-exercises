const repeatString = function(string, num) {
    let output = "";
    if (num === 0) {
    console.log("ERROR");
    }
    else {
    for (i = 1; i <= num; i++) {
      output = output + string;
    }
    console.log(output);
    }
}
repeatString('hey', 3)


// Do not edit below this line
module.exports = repeatString;