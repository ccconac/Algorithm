const input = require('fs').readFileSync(0).toString().trim().split(' ');

const A = input[0].split('').reverse().join('');
const B = input[1].split('').reverse().join('');

parseInt(A) > parseInt(B) ? console.log(A) : console.log(B);