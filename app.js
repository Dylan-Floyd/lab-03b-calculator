// import functions and grab DOM elements
import {
  add,
  subtract,
  multiply,
  divide
} from './utils.js';

let numberInput1 = document.getElementById('number-input-1');
let numberInput2 = document.getElementById('number-input-2');
let addButton = document.getElementById('add-button');
let subtractButton = document.getElementById('subtract-button');
let divideButton = document.getElementById('divide-button');
let multiplyButton = document.getElementById('multiply-button');
let resultDisplay = document.getElementById('result-display');

// initialize state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

let getNumber1 = () => {
  return Number(numberInput1.value);
}

let getNumber2 = () => {
  return Number(numberInput2.value)
}

addButton.addEventListener('click', () => {
  resultDisplay.textContent = 'Result: ' + add(getNumber1(), getNumber2());
});

subtractButton.addEventListener('click', () => {
  resultDisplay.textContent = 'Result: ' + subtract(getNumber1(), getNumber2());
});

multiplyButton.addEventListener('click', () => {
  resultDisplay.textContent = 'Result: ' + multiply(getNumber1(), getNumber2());
});

divideButton.addEventListener('click', () => {
  resultDisplay.textContent = 'Result: ' + divide(getNumber1(), getNumber2());
});

document.addEventListener('keypress', () => {
  resultDisplay.textContent = '';
});