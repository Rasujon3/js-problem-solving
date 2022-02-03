function pizzaPanda(foodName,quantity) {
    if (foodName.toLowerCase() !== 'pizza') {
        return 'Sorry , we sell pizza only'
    }
    var price = 10 * quantity;
    var message = `Order successful!, Order info: ${foodName}, Price: ${price}$`;
    return message;
}

var pizza = pizzaPanda('Pizza',3);
console.log(pizza);