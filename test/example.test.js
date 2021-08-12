// IMPORT MODULES under test here:
// import { example } from '../example.js';
import {
    add,
    subtract,
    multiply,
    divide
 } from '../utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('add 2 and 3 returns 5', (expect) => {
    expect.equal(5, add(2, 3));
});

test('2 minus 3 returns -1', (expect) => {
    expect.equal(-1, subtract(2, 3));
});

test('10 divided by 2 returns 5', (expect) => {
    expect.equal(5, divide(10, 2));
});

test('5 times 3 returns 15', (expect) => {
    expect.equal(15, multiply(5, 3));
});