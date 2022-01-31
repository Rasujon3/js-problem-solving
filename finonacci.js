/* const fibo = [0,1];

for (let i = 2; i <=15; i++) {
    fibo[i] = fibo[i-1]+fibo[i-2];
}
console.log(fibo); */

function fibonacciSerier(num) {
    if (typeof num == 'number' && num > 2) {
        const fibo = [0,1];
    for (let i = 2; i < num; i++) {
        fibo[i] = fibo[i-1]+fibo[i-2];
    }
    return fibo;
    } else {
        return 'Please inter a valid & positive number';
    }
}

const fiboSeries = fibonacciSerier(13);
console.log(fiboSeries);