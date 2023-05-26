const input = require('fs').readFileSync(0).toString().trim();

const palindrom = (str) => {
    const length = input.length;
    for (let i = 0; i <= length / 2; i++) {
        if (str[i] !== str[length - 1 - i]) return console.log(0);
    }
    return console.log(1);
}

palindrom(input);
