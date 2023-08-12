class Stack {
  constructor() {
    this.arr = [];
  }

  push(item) {
    this.arr.push(item);
  }

  pop() {
    if (this.isEmpty()) {
      return -1;
    }
    return this.arr.pop();
  }

  size() {
    return this.arr.length;
  }

  isEmpty() {
    if (this.arr.length === 0) return 1;
    else return 0;
  }

  top() {
    if (this.isEmpty()) {
      return -1;
    }
    return this.arr[this.arr.length - 1];
  }
}

const input = require("fs").readFileSync(0).toString().trim().split("\n");

const N = parseInt(input[0]);
const stack = new Stack();

let answer = [];

for (let i = 1; i <= N; i++) {
  const [command, value] = input[i].split(" ").map(Number);

  if (command === 1) {
    stack.push(value);
  } else if (command === 2) {
    answer.push(stack.pop());
  } else if (command === 3) {
    answer.push(stack.size());
  } else if (command === 4) {
    answer.push(stack.isEmpty());
  } else if (command === 5) {
    answer.push(stack.top());
  }
}

console.log(answer.join("\n"));
