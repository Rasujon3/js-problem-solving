var factorial = 1;
for (let i = 1; i <=5; i++) {
    var factorial =factorial * i;
}
console.log(factorial);   

function calculateFactorial(number) {
var factorial = 1;
    for (let i = 1; i <=number; i++) {
        var factorial = factorial*i;
    }
    console.log(number, 'of factorial is = ',factorial);
}

calculateFactorial(6);

function calculateFactorialusingWhileLoop(number) {
var factorial = 1;
let i = 1; 
    while (i <=number ) {
        var factorial = factorial*i;
        i++;
    }
    console.log(number, 'of factorial is = ',factorial);
}

calculateFactorialusingWhileLoop(5);

function calculateFactorialusingdecrement(number) {
var factorial = 1;
let i = number; 
    while (i >=1 ) {
        var factorial = factorial*i;
        i--;
    }
    console.log(number, 'of factorial is = ',factorial);
}

calculateFactorialusingdecrement(5);

function calculateFactorialUsingForLoopDecrement(number) {
    var factorial = 1;
        for (let i = number; i >=1; i--) {
            var factorial = factorial*i;
        }
        console.log(number, 'of factorial is = ',factorial);
    }
    
    calculateFactorialUsingForLoopDecrement(6);