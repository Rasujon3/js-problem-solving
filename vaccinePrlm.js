var age = 20;
var vaccineCount = 0;
var isVaccinated = false;

if(age>=20 && vaccineCount==2){
    console.log('You can go bidesh');
} else if(age>=15 && age<=20 && vaccineCount==0){
    console.log('Please take vaccine');
} else if(age>15 && age<=20 && vaccineCount==2){
    isVaccinated = true;
    console.log('2 dos taken successfully');
} else {
    console.log('Enter valid value');
}