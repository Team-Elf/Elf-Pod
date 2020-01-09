// Create a function that takes a string, checks if it has the same number of x's and o's and returns either true or false.
//
//     Return a boolean value (true or false).
// The string can contain any character.
//     When no x and no o are in the string, return true.

function XO(str) {
    var x = 0;
    var o = 0;

    str.toLowerCase().split('').forEach(function (imput) {
        if (imput == 'x') {
            x++;
        } else if (imput == 'o') {
            o++
        }
    })
    return x == o;
}

console.log(XO("ooxx"), true);
console.log(XO("xooxx"), false);
console.log(XO("ooxXm"), true);
console.log(XO("zpzpzpp"), true);
console.log(XO("zzoo"), false);
console.log(XO("Xo"), true);
console.log(XO("x"), false);
console.log(XO("o"), false);
console.log(XO("xxxoo"), false);
console.log(XO(""), true);