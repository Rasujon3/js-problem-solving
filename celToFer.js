function celToFah(celcious) {
    console.log(celcious,'degree = ' ,((celcious*1.8)+32),"F"); 
}

celToFah(64);

function fahToCel(fahrenheit) {
    console.log(fahrenheit,'fahrenheit = ' ,((fahrenheit-32)*.5556).toFixed(2),"Degree"); 
}

fahToCel(64);