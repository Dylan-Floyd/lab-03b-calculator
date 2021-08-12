// import functions and grab DOM elements
import {
  add,
  subtract,
  multiply,
  divide
} from './utils.js';

//number inputs
let numberInput1 = document.getElementById('number-input-1');
let numberInput2 = document.getElementById('number-input-2');

//buttons
let addButton = document.getElementById('add-button');
let subtractButton = document.getElementById('subtract-button');
let divideButton = document.getElementById('divide-button');
let multiplyButton = document.getElementById('multiply-button');

//display elements
let countDisplay = document.querySelector('#counter');
let resultDisplay = document.getElementById('result-display');

// initialize state
let count = 0;

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

//Helper function to get Number value of number-input-1
let getNumber1 = () => {
  return Number(numberInput1.value);
}

//Helper function to get Number value of number-input-2
let getNumber2 = () => {
  return Number(numberInput2.value)
}

/* Calls the provided math function with the values from
 * getNumber1() and getNumber2() and updates the display elements.
 */
let calculate = (mathFunc) => {
  resultDisplay.textContent = 'Result: ' + mathFunc(getNumber1(), getNumber2());
  count++;
  countDisplay.textContent = 'Calculation Count: ' + count;
} 

//Set up event listeners:

addButton.addEventListener('click', () => {
  calculate(add);
});

subtractButton.addEventListener('click', () => {
  calculate(subtract);
});

multiplyButton.addEventListener('click', () => {
  calculate(multiply);
});

divideButton.addEventListener('click', () => {
  calculate(divide);
});

document.addEventListener('keypress', () => {
  resultDisplay.textContent = '';
});