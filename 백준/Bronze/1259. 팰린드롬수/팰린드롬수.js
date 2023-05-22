const input = require('fs').readFileSync(0).toString().trim().split('\n').map(Number);

const palindrom = (num) => {
    const strNum = String(num);
    const length = strNum.length;

    for (let i = 0; i < length / 2; i++) {
        if (strNum[i] !== strNum[length - 1 - i]) return 'no';
    }
    return 'yes';
}

for (let i = 0; i < input.length - 1; i++) {
    console.log(palindrom(input[i]));
}
