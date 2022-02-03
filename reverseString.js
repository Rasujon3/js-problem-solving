function reverseString(sentence) {
    let elements = '';
    for (let i = sentence.length-1; i >=0; i--) {
        const element = sentence[i];
        elements = elements + element;
        }
        return elements;
}

const reverse = reverseString('liya');
console.log(reverse);