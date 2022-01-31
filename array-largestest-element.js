function largestElement(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        // console.log(element);
        if (element > largest) {
            largest=element;
        }
    }

    return largest;
}

const ages = [12,23,45,56,67,89];
const oldest = largestElement(ages);
const oldest2 = largestElement([-2,-6,-17]);
console.log('Oldest = ',oldest);
console.log('Height2 = ',oldest2);

function lowestElement(numbers) {
    let lowest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        // console.log(element);
        if (element < lowest) {
            lowest=element;
        }
    }
    return lowest;
}

const age = [12,23,45,56,67,89];
const lowest = lowestElement(age);
const lowest2 = lowestElement([-2,-6,-17]);
console.log('lowest = ',lowest);
console.log('Lowest = ',lowest2);