"use strict";

// 1. Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
var x = [1, 2, 3, 8];

function minMax(x) {
    return Math.min.apply(Math, x);
    return Math.max.apply(Math, x);
}
// console.log(minMax(x));

// 2. Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.

function calculator(num1,operator,num2) {
    return {
        '+': num1 + num2,
        //adding setup
        '-': num1 - num2,
        //subtraction setup
        '*': num1 * num2,
        //multiplication
        '/': num2 ? num1 / num2 : 'Cannot divide by 0!'
    }[operator]
}
// console.log(calculator(1, "+", 3));