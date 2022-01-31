const business = 450;
const minister = 750;
const army = 600;

// first approach

/* if (business > minister && business > army) {
    console.log('Business is bigger');
} else if (minister > business && minister>army) {
    console.log('Minister is bigger');
} else{
    console.log('Army is bigger');
} */

// second approach
var max=Math.max(business,minister,army);
console.log('Largest is = ',max);

// 3rd
function findLargest(first,second,three){
    if (first>second && first>three) {
        console.log('largest is = ',first);
    } else if (second>first && second>three) {
        console.log('largest is = ',second);
    }
    else{
        console.log('Largest is = ',three);
    }
}

findLargest(200,400,600);

// Smallest Numer

function findSmallest(first,second,three){
    if (first<second && first<three) {
        console.log('Smallest is = ',first);
    } else if (second<first && second<three) {
        console.log('Smallest is = ',second);
    }
    else{
        console.log('Smallest is = ',three);
    }
}

findSmallest(200,400,600);

var a=2; var b=3; 
if(a<b){console.log('Hello');}

console.log(Math.floor(12.96));

function add(a, b){
    return a + b;
  }
  console.log(add("adam" + "eve"))