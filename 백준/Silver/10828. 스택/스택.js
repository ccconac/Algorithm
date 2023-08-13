class Stack {
  constructor() {
    this.arr = [];
  }

  push(X) {
    this.arr.push(X);
  }

  pop() {
    if (this.empty()) return -1;
    else return this.arr.pop();
  }

  size() {
    return this.arr.length;
  }

  empty() {
    if (this.arr.length === 0) return 1;
    else return 0;
  }

  top() {
    if (this.empty()) return -1;
    else return this.arr[this.arr.length - 1];
  }
}

const input = require("fs").readFileSync(0).toString().trim().split("\n");

const N = Number(input[0]);
const stack = new Stack();

let answer = [];

for (let i = 1; i <= N; i++) {
  const [command, value] = input[i].split(" ");

  if (command === "push") {
    stack.push(value);
  } else if (command === "pop") {
    answer.push(stack.pop());
  } else if (command === "size") {
    answer.push(stack.size());
  } else if (command === "empty") {
    answer.push(stack.empty());
  } else if (command === "top") {
    answer.push(stack.top());
  }
}

console.log(answer.join("\n"));