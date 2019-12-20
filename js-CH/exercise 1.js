"use strict";

//Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).




function removeDups(arr) {
    var names = ['Chelsea', 'Adra', 'Alex', 'Kim', 'Megan', 'Alex', 'Monique', 'Caysen', 'Brycen', 'Kim'];
    let unique = {};
    names.forEach(function(i) {
        if(!unique[i]) {
            unique[i] = true;
        }
    });
    return Object.keys(unique);
}

console.log(removeDups((['Chelsea', 'Adra', 'Alex', 'Kim', 'Megan', 'Alex', 'Monique', 'Caysen', 'Brycen', 'Kim'])));



//link:https://edabit.com/challenge/Wd7WKqm95jhcAGATG