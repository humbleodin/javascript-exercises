const convertToCelsius = function(tempF) {
  let celcius = (tempF - 32) * (5 / 9);
  // math.round(celcius * 10) will round celcius*10, then /10 on the outside to get 1 decimal place
  return Math.round(celcius * 10) / 10; 
};

const convertToFahrenheit = function(tempC) {
  let fahrenheit = (tempC) * 9 / 5 + 32;
  return Math.round(fahrenheit * 10) / 10;
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
