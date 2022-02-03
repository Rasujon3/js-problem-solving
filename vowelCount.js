// var sentence = "I am sujon";
// sentence = sentence.toLowerCase();

// var count = 0;
// for (let i = 0; i < sentence.length; i++) {
//   const element = sentence[i];
//   if (
//     element == "a" ||
//     element == "e" ||
//     element == "i" ||
//     element == "o" ||
//     element == "u"
//   ) {
//     count++;
//   }
// }
// console.log(count);

function vowelCount(sentence) {
  sentence = sentence.toLowerCase();
  var count = 0;
  for (let i = 0; i < sentence.length; i++) {
    const element = sentence[i];
    if (
      element == "a" ||
      element == "e" ||
      element == "i" ||
      element == "o" ||
      element == "u"
    ) {
      count++;
    }
  }
  return count;
}

var result = vowelCount("I am sujon");
console.log(result);
