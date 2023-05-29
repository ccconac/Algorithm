const input = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);

const [A, B] = input;

if (A > B) console.log('>');
else if (A < B) console.log('<');
else if (A === B) console.log('==');