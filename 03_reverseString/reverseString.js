const reverseString = function(string) {
  let sLen = string.length;  //length of string
  let output = ""; //create empty variable for string
  let array = string.split(""); // turns string into array, split by every char
  for (i = 1; i <= sLen; i++){ 
    output = output + array[sLen -i]; 
  }
    console.log(output);
}
reverseString("hello")
// Do not edit below this line
module.exports = reverseString;