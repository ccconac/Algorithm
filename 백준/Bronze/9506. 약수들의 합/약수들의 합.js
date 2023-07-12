const input = require('fs').readFileSync(0).toString().trim().split('\n').map(Number);

const Divisor = (num) => {
    const divisor = [];
    let count = 0;

    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            divisor.push(i);
        } 
    }

    for (let i = 0; i < divisor.length; i++) count += divisor[i];

    if (count === num) console.log(`${num} = ${divisor.join(' + ')}`);
    else console.log(`${num} is NOT perfect.`);
}

for (let i = 0; i < input.length - 1; i++) {
    Divisor(input[i]);
}