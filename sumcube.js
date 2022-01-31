function sumCube(number) {
    let cubeSeries = 0;
    for (let i = 0; i <= number; i++) {
        cubeSeries = cubeSeries + i**3;
    }
    return cubeSeries;
}

const result = sumCube(12);
console.log('Sum Cube is = ',result);