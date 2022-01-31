const numbers = [10,10,10,10,10,10];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    console.log(element);
    sum = sum + element;
}

console.log("Sum of array is = ",sum);

function arrayTotal(number) {
    let sum = 0;
    let average = 0;

    for (let i = 0; i < number.length; i++) {
        const element = number[i];
        sum = sum + element;
        average = sum/number.length;
    }
    return average;
    // return sum;
}

const total = arrayTotal([10,20,30]);
// console.log('Total is = ',total);
console.log('Average is = ',total);