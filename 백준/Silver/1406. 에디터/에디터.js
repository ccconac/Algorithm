const input = require('fs')
  .readFileSync(0)
  .toString()
  .trim()
  .split('\n');

const command = [...input.shift()];
const [N, M] = [command.length, Number(input.shift())];
const stack = [];

for (let i = 0; i < M; i++) {
  const [c, str] = input[i].split(' ');

  if (c === 'L' && command.length) stack.push(command.pop());
  else if (c === 'D' && stack.length) command.push(stack.pop());
  else if (c === 'B' && command.length) command.pop();
  else if (c === 'P') command.push(str);
}

const answer = command.join('') + stack.reverse().join('');
console.log(answer);