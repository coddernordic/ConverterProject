const miles = 24;
const kilometers = 40;
const number = 1.609344;
const kilometersToMiles = kilometers / number;
const milesToKilometers = miles * number;
const celsius = 5;
const fahrenheit = 41;
const celsiusToFahrenheit = (celsius * 9 / 5) + 32; // 41 degrees Fahrenheit
const fahrenheitToCelsius = (fahrenheit - 32) * 5 / 9; // 5 degrees Celsius

// Distance

console.log("Distance conversions");
console.log("-----------------------");
console.log(kilometers + " kilometers are:");
console.log(kilometersToMiles + " miles");
console.log("----");
console.log(miles + " miles are:");
console.log(milesToKilometers + " kilometers");
console.log("\n");

// Temperature

console.log("Temperature conversions");
console.log("-----------------------");
console.log(celsiusToFahrenheit + " degrees Fahrenheit are:");
console.log(celsius + " degrees Celsius");
console.log("----");
console.log(fahrenheitToCelsius + " degrees Celsius are:");
console.log(fahrenheit + " degrees Fahrenheit");