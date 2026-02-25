const convertToCelsius = function(fahrTemp) {
  let celsTemp = (fahrTemp-32)*5/9
  return +celsTemp.toFixed(1)

};

const convertToFahrenheit = function(celsTemp) {
  let fahrTemp = (celsTemp*9/5+32)
  return +fahrTemp.toFixed(1)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
