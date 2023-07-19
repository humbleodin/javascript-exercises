// create function that removes ...args from array
// parameter 1: array
// parameter 2: ...args
// if element is NOT in args, then .push that into newArray and return that 
\
const removeFromArray = function(array, ...args) { 
    const output = []; //creats empty array to store elements that is not an ...args
    array.forEach((element) => { //takes the "array" and for each element in the array
        if (!args.includes(element)) { // test if element is NOT included in the ...args
            output.push(element); // if true then it .push the element into const output
        }
    }); //remembering .forEach is a method so needs semicolon
    return output; 
};



// Do not edit below this line
module.exports = removeFromArray;
