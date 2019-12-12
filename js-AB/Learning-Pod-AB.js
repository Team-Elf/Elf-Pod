"use strict";

// 1. Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
// var x = [1, 2, 3, 8];
//
// function minMax(x) {
//
//     return Math.min.apply(Math, x);
//     return Math.max.apply(Math, x);
// }
// console.log(minMax(x));

//link: https://edabit.com/challenge/AtoWYYC9THAH5HbS2
// 2. Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.

function calculator(num1,operator,num2) {
    return {
        '+': num1 + num2,
        //adding setup
        '-': num1 - num2,
        //subtraction setup
        '*': num1 * num2,
        //multiplication setup
        '/': num2 ? num1 / num2 : 'Imagine trying to divide by 0...'
    }[operator]
}
// console.log(calculator(1, "*", 3));
// console.log(calculator(4, "/", 2));
// console.log(calculator(8, "/", 0));
// console.log(calculator(2, "+", 2));

//link: https://edabit.com/challenge/hxyvTffvdT4E238CY
// 3. Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical, and false otherwise. The array will contain 4 elements.
// var result;
function jackpot(result) {
    if(result[0]==result[1]&&result[1]==result[2]&&result[2]==result[3]){
        return true
    }
    else{
        return false
    }
}

// console.log(jackpot([2, 2, 2, 2]));
//console.log(jackpot([1, 2, 1, 1]));

// Link: https://edabit.com/challenge/ew9dry9RzoaeiTzwX
// 4. Write a function that inserts a white space between every instance of a lower character followed immediately by an upper character.

function insertSpace(y) {
    return y.split("").map((i, index)=>{
        //map is a storage command, where it holds on to a key and returns it as stored
        if(index!== 0) {
            if (i !== i.toLowerCase()) {
                return " " + i;
            }
            return i;
        }
    }).join("");
}
// console.log(insertWhitespace(" TheQuickBrownFoxJumpedOverTheLazyCoder"));
// console.log(insertWhitespace(" SallySellsSeaShellsAtTheSeaShore"));

// 5. Create a function that takes an array of names and returns an array with the first letter capitalized.

function CapitalArr(arr) {

    for (var i=0;i<arr.length;i++){
        var s = arr[i].substr(0,1).toUpperCase();
        s += arr[i].substr(1).toLowerCase();
        arr[i] = s;
    }


    return arr;
}
// console.log(CapitalArr(["HELLO", "yar", "string"]));