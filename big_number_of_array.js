var numbers = [34,21,45,54,55,23,60];

function bigNumber(numArray) {
    numArray.sort(function (a,b) {
        return b - a
    })
    return numArray;
}

var bigNumbers= bigNumber(numbers);
console.log(bigNumbers[0]);
console.log(bigNumbers[1]);