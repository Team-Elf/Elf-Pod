// Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.
//
//     To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.

function changeEnough(change, amountDue) {
    let sum = change[0]*0.25 + change[1]*0.1 + change[2]*0.05 + change[3]*0.01
    return sum >= amountDue;
}


console.log(changeEnough([2, 100, 0, 0], 14.11))
console.log(changeEnough([0, 0, 20, 5], 0.75))
console.log(changeEnough([30, 40, 20, 5], 12.55))
console.log(changeEnough([10, 0, 0, 50], 3.85))
console.log(changeEnough([1, 0, 5, 219], 19.99))