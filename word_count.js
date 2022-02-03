var sentence = '  hello everyone,  hello  developers. ';

function wordCount(sentenceCollection) {
    var count = 0;
    for (let i = 0; i < sentenceCollection.length; i++) {
        if (sentenceCollection[i] == " " && sentenceCollection[i-1] != " ") {
            count++
        }
        
    }
    count++
    return count
}

var result = wordCount(sentence);
console.log(result);

function WordCount(str) { 
    return str.split(" ").length;
  }
  
  console.log(WordCount("  hello everyone,  hello  developers. "));