class Queue {
  constructor() {
    this.arr = {};
    this.front = 0;
    this.rear = 0;
  }

  enqueue(X) {
    this.arr[this.rear] = X;
    this.rear += 1;
  }

  dequeue() {
    if (this.empty()) return -1;

    const temp = this.arr[this.front];
    delete this.arr[this.front];
    this.front += 1;

    return temp;
  }

  size() {
    return this.rear - this.front;
  }

  empty() {
    if (this.size() === 0) return 1;
    else return 0;
  }
}

const input = require("fs").readFileSync(0).toString().split(" ").map(Number);

const [N, K] = [...input];
const queue = new Queue();
const result = [];

for (let i = 1; i <= N; i++) queue.enqueue(i);

while (queue.size() >= 1) {
  for (let i = 0; i < K - 1; i++) {
    queue.enqueue(queue.dequeue());
  }
  result.push(queue.dequeue());
}

console.log(`<${result.join(", ")}>`);