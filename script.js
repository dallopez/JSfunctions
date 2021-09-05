// Variables
var MilesDriven = prompt("How many miles do you drive per year?");
var CostPerGallon = prompt("How much does it cost for a gallon of gas in your area?");

// create Array for Miles per Gallon
var MPG = [12, 17, 26, 29];

// use the toFixed() method
function calculateCost(MilesDriven, CostPerGallon, MPG){
  var cost = (MilesDriven * CostPerGallon)/MPG[i];
  document.write("To drive a car with an MPG of " + MPG[i] + " for " + MilesDriven + " miles at $" + CostPerGallon + " per gallon, it would cost $" + cost.toFixed(2) + ". <br>");
}

// Loops the function 4 times
for(var i=0; i<MPG.length; i++){
  calculateCost(MilesDriven, CostPerGallon, MPG);
}