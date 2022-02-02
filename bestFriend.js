function bestFriend(friends) {
    let bigName = friends[0];

    for (let i = 0; i < friends.length; i++) {
        if (bigName.length < friends[i].length) {
            bigName = friends[i];
        }
    }
    return bigName;
}

const result = bestFriend(['naim','arin','sujon','tauhid','sraboni']);
console.log(result);