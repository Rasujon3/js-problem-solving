function burgerKinbo(icca,enoughTaka) {
    if (icca==true && enoughTaka >= 110) {
        return 'Yes, Burger Kinbo'
    } else {
        return 'No, Burger Kinbo na'
    }
}

var kinbo = burgerKinbo(false,200);
console.log(kinbo);