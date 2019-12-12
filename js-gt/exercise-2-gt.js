"use strict";
alert("2");

// https://edabit.com/challenge/AtoWYYC9THAH5HbS2
// Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.
//
// Examples
// calculator(2, "+", 2) ➞ 4
//
// calculator(2, "*", 2) ➞ 4
//
// calculator(4, "/", 2) ➞ 2
// Notes
// If the input tries to divide by 0, return: "Can't divide by 0!"

function calculator(num1, operator, num2) {
    if (operator == "+" ){
        return num1 + num2;
    } else if (operator == "-"){
        return num1 - num2;
    } else if (operator == "*"){
        return num1 * num2;
    } else if (operator == "/" && num2 !== 0){
        return num1 / num2;
    } else {
        return "Cant divide by 0!"
    }

}

console.log((calculator(2, '/', 2), 1));
console.log((calculator(10, '-', 7), 3));
console.log((calculator(2, '*', 16), 32));
console.log((calculator(2, '-', 2), 0));
console.log((calculator(15, '+', 26), 41));
console.log((calculator(2, '+', 2), 4));
console.log((calculator(2, "/", 0), "Can't divide by 0!"));