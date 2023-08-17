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

  getHead() {
    return this.arr[this.front];
  }
}

const input = require("fs").readFileSync(0).toString();

const N = Number(input);
const queue = new Queue();

for (let i = 1; i <= N; i++) queue.enqueue(i);

for (let i = 0; i < N; i++) {
  if (queue.size() < 2) break;
  queue.dequeue();
  queue.enqueue(queue.dequeue());
}

console.log(queue.getHead());