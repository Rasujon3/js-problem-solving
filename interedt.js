function interestCalculation(p,r,t) {
    var interest = (p*r*t)/100;
    console.log(`Your principle amount ${p} 
    \n and Rate of interest ${r} 
    \n and Time of Load is ${t},
     so your interest is = ${interest}`,);
     console.log(`Total Amount = ${p+interest}`);
}
interestCalculation(5000,5,5)