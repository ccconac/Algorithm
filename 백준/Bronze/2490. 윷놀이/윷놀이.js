const input = require('fs').readFileSync(0).toString().trim().split('\n').map(n => n.split(' ').map(Number));

for (let i = 0; i < input.length; i++) {
    const sum = input[i].reduce((acc, cur) => acc + cur, 0);
    if (sum === 0) {
        console.log('D');
    } else if (sum === 1) {
        console.log('C');
    } else if (sum === 2) {
        console.log('B');
    } else if (sum === 3) {
        console.log('A');
    } else if (sum === 4) {
        console.log('E');
    }
}