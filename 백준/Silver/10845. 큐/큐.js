class Queue {
  constructor() {
    this.storage = {};
    this.left = 0;
    this.rear = 0;
  }

  push(X) {
    this.storage[this.rear] = X;
    this.rear += 1;
  }

  pop() {
    if (this.empty()) return -1;

    const temp = this.storage[this.left];
    delete this.storage[this.left];
    this.left += 1;

    return temp;
  }

  size() {
    return this.rear - this.left;
  }

  empty() {
    if (this.rear - this.left === 0) return 1;
    else return 0;
  }

  front() {
    if (this.empty()) return -1;
    return this.storage[this.left];
  }

  back() {
    if (this.empty()) return -1;
    return this.storage[this.rear - 1];
  }
}

const input = require('fs').readFileSync(0).toString().split('\n');

const N = Number(input[0]);
const queue = new Queue();
const result = [];

for (let i = 1; i <= N; i++) {
  const [command, value] = input[i].split(' ');

  if (command === 'push') {
    queue.push(value);
  } else if (command === 'pop') {
    result.push(queue.pop());
  } else if (command === 'size') {
    result.push(queue.size());
  } else if (command === 'empty') {
    result.push(queue.empty());
  } else if (command === 'front') {
    result.push(queue.front());
  } else if (command === 'back') {
    result.push(queue.back());
  }
}

console.log(result.join('\n'));