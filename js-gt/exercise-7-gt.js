// https://edabit.com/challenge/ZN5cpGPNRS3nrjMo5

// Create a function that takes an array of names and returns an array with the first letter capitalized.


function capMe(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].substring(0,1).toUpperCase() + arr[i].substring(1).toLowerCase()
        ;
    }
    return arr;
}


console.log(capMe(["mavis", "senaida", "letty"]))
console.log(capMe(["samuel", "MABELLE", "letitia", "meridith"]))
console.log(capMe(["Slyvia", "Kristal", "Sharilyn", "Calista"]))
