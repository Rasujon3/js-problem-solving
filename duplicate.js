// const names = ['abul','babul','caul','dabul','ebul','dabul'];
const names = [12,23,34,34,45,45];

function removeDuplicate(names) {
    const unique = [];
    /* for (let i = 0; i < names.length; i++) {
        
        const element = names[i];
        console.log(element);
        
    } */
    for (const element of names) {
        console.log(element);
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);