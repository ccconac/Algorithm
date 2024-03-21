const input = require('fs').readFileSync(0).toString().trim().split('\n');

const N = Number(input.shift());
const deque = [];

let answer = '';

input.forEach((values) => {
  const [command, value] = values.split(' ');

  switch (command) {
    case 'push_front':
      deque.unshift(value);
      break;
    case 'push_back':
      deque.push(value);
      break;
    case 'pop_front':
      deque.length === 0
        ? (answer += '-1\n')
        : (answer += `${deque.shift()}\n`);
      break;
    case 'pop_back':
      deque.length === 0 ? (answer += '-1\n') : (answer += `${deque.pop()}\n`);
      break;
    case 'size':
      answer += `${deque.length}\n`;
      break;
    case 'empty':
      deque.length === 0 ? (answer += '1\n') : (answer += '0\n');
      break;
    case 'front':
      deque.length === 0 ? (answer += '-1\n') : (answer += `${deque[0]}\n`);
      break;
    case 'back':
      deque.length === 0
        ? (answer += '-1\n')
        : (answer += `${deque[deque.length - 1]}\n`);
      break;
  }
});

console.log(answer);