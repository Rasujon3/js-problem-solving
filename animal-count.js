function animalCount(miles) {
  const animalDensityFirst10Miles = 10;
  const animalDensitySecond10Miles = 50;
  const animalDensityRestMiles = 100;
  if (miles <= 10) {
    const count = miles * animalDensityFirst10Miles;
    return count;
  } else if (miles <= 20) {
    const firstDenseAnimals = 10 * animalDensityFirst10Miles;
    const restMiles = miles - 10;
    const secondDenseAnimals = restMiles * animalDensitySecond10Miles;
    const totalAnimals = firstDenseAnimals + secondDenseAnimals;
    return totalAnimals;
  } else {
    const firstDenseAnimals = 10 * animalDensityFirst10Miles;
    const secondDenseAnimals = 10 * animalDensitySecond10Miles;
    const restMiles = miles - 20;
    const RestDenseAnimals = restMiles * animalDensityRestMiles;
    const totalAnimals =
      firstDenseAnimals + secondDenseAnimals + RestDenseAnimals;
    return totalAnimals;
  }
}

const animals = animalCount(35);
console.log(animals);

let sum=0; 
for( let i = 0; i<=3;i++){ 
sum = sum + i; 
}
// console.log(sum);
var student =  { name : "Yo Mama", age : 17 };
delete student.age;
console.log(student);

var arr = [1,2,3,4,6];

arr[arr.length-1] = 5;
console.log(arr);

function leapYear(year) {
    const reminder = year % 4;
    if(reminder == 0){
      return true;
    }
    else{
      return false;
    }
  }
const count =  leapYear(2001);
console.log(count);
