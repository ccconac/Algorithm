const input = require('fs').readFileSync(0).toString().trim();

const str = input.split('');
const obj = {
    2: 'ABC',
    3: 'DEF',
    4: 'GHI',
    5: 'JKL',
    6: 'MNO',
    7: 'PQRS',
    8: 'TUV',
    9: 'WXYZ'
};

let result = 0;

for (let i = 0; i < str.length; i++) {
    for (let j = 2; j <= 9; j++) {
        if (obj[j].includes(input[i])) {
            result += j + 1;
            break;
        }
    }
}

console.log(result);