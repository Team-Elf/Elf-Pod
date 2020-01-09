// Write a function that converts an object into an array, where each element represents a key-value pair.


function toArray(obj) {
    var arr = [];
    for(var i in obj){
        arr.push([i, obj[i]]);
    }
    return arr
}


console.log((toArray({ a: 1, b: 2 }), [["a", 1], ["b", 2]]));
console.log((toArray({ foo: 33, bar: 45, baz: 67 }), [["foo", 33], ["bar", 45], ["baz", 67]]));
console.log((toArray({ shrimp: 15, tots: 12 }), [["shrimp", 15], ["tots", 12]]));
console.log((toArray({}), []));