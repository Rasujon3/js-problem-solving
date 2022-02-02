function isPositive(numbers) {
    let elements = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i]<=0) {
            break;
        } else {
            const element = numbers[i];
            elements.push(numbers[i]);
        }
    }
    return elements;
}

const result = isPositive([10,20,0,30,-40,-50]);
console.log(result);