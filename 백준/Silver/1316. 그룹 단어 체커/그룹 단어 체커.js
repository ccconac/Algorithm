const input = require('fs').readFileSync(0).toString().trim().split('\n');

const N = input.shift();

const WordChecker = (word) => {
    const result = [];
    for (let i = 0; i < word.length; i++) {
        result.push(word[i]);
        if (word[i] !== word[i + 1]) {
            if (result.includes(word[i + 1])) return false;
        }
    }
    return true;
}

let count = 0;

for (let i = 0; i < input.length; i++) {
    if (WordChecker(input[i])) count += 1;
}

console.log(count);