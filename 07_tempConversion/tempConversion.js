const convertToCelsius = function(temp) {
  let celcius = (temp - 32) * (5 / 9)
  return Math.round(celcius * 10) / 10;
};

const convertToFahrenheit = function() {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
