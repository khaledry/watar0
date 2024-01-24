var textElement = document.querySelector("#login > div.login_wrapper > div.users-count-label > p > span"); // Current value 
var currentValue = parseInt(textElement.textContent.trim(), 10); // New value you want to add 
var minRandomValue = 80; // Minimum value for the random number
var maxRandomValue = 100; // Maximum value for the random number
var additionalValue = Math.floor(Math.random() * (maxRandomValue - minRandomValue + 1)) + minRandomValue; // Number of users between 80 and 100
var newValue = currentValue + additionalValue; // Update the text with the new value 
textElement.textContent = newValue.toString();
