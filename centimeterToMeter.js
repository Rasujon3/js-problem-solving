function centimeterToMeterCalculation(centimeter) {
    return centimeter/100;
}

const result = centimeterToMeterCalculation(123456789).toFixed(2);
console.log(result);