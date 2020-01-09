// Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical, and false otherwise. The array will contain 4 elements.

function testJackpot(result) {
    for (i = 0; i < result.length; i++)
        if(result[3] == result[i]){
            return true
        } else {
            return false
        }
}


console.log(testJackpot(['@', '@', '@', '@']), true);
console.log(testJackpot(['!', '!', '!', '!']), true);
console.log(testJackpot(['abc', 'abc', 'abc', 'abc']), true);
console.log(testJackpot(['karaoke', 'karaoke', 'karaoke', 'karaoke']), true);
console.log(testJackpot(['SS', 'SS', 'SS', 'SS']), true);
console.log(testJackpot([':(', ':)', ':|', ':|']), false);
console.log(testJackpot(['&&', '&', '&&&', '&&&&']), false);
console.log(testJackpot(['hee', 'heh', 'heh', 'heh']), false);
console.log(testJackpot(['SS', 'SS', 'SS', 'Ss']), false);
console.log(testJackpot(['SS', 'SS', 'Ss', 'Ss']), false);