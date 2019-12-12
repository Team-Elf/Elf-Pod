"use strict";
alert("3");

// https://edabit.com/challenge/XdAR3KohR5w7rjrFg
// Create a function that takes in an array of numbers and returns the sum of its cubes.
//
//     Examples
// sumOfCubes([1, 5, 9]) ➞ 855
// // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
//
// sumOfCubes([3, 4, 5]) ➞ 216
//
// sumOfCubes([2]) ➞ 8
//
// sumOfCubes([]) ➞ 0
// Notes
// If given an empty array, return 0.

function sumOfCubes(nums) {
    var i, sum = 0;
    for (i in nums) {
        sum += nums[i] * nums[i] * nums[i];
    }
    return sum
}

console.log((sumOfCubes([1, 5, 9]), 855));
console.log((sumOfCubes([3, 4, 5]), 216));
console.log((sumOfCubes([1, 1, 1]), 3));
console.log((sumOfCubes([2]), 8));
console.log((sumOfCubes([5, 1, 2]), 134));
console.log((sumOfCubes([32]), 32768));
console.log((sumOfCubes([5, 9, 4, 4, 9]), 1711));
console.log((sumOfCubes([0, 1, 2]), 9));
console.log((sumOfCubes([]), 0));