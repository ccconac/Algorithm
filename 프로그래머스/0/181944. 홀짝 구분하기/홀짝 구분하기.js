const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}).on('line', function (line) {
    input = line.split(' ').map(Number);
}).on('close', function () {
    const n = input[0];
    
    if (n % 2) console.log(`${n} is odd`);
    if (!(n % 2)) console.log(`${n} is even`);
});