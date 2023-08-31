class MaxHeap {
  constructor() {
    this.heap = [];
  }

  empty() {
    return this.heap.length === 0 ? 1 : 0;
  }

  insert(item) {
    this.heap.push(item);
    this.bubbleUp();
  }

  bubbleUp() {
    let currentIndex = this.heap.length - 1;

    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      if (this.heap[parentIndex] >= this.heap[currentIndex]) break;
      [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
      currentIndex = parentIndex;
    }
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop();

    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);

    return max;
  }

  bubbleDown(index) {
    const leftIndex = 2 * index + 1;
    const rightIndex = 2 * index + 2;
    const length = this.heap.length;
    let rootIndex = index;

    if (leftIndex < length && this.heap[leftIndex] > this.heap[rootIndex]) {
      rootIndex = leftIndex;
    }

    if (rightIndex < length && this.heap[rightIndex] > this.heap[rootIndex]) {
      rootIndex = rightIndex;
    }

    if (rootIndex !== index) {
      [this.heap[index], this.heap[rootIndex]] = [this.heap[rootIndex], this.heap[index]];
      this.bubbleDown(rootIndex);
    }
  }
}

const input = require("fs").readFileSync(0).toString().trim().split("\n").map(Number);

const N = input.shift();

const maxHeap = new MaxHeap();
let answer = "";

input.forEach((v) => {
  if (v === 0) {
    if (maxHeap.empty()) answer += "0\n";
    else answer += `${maxHeap.pop()}\n`;
  } else {
    maxHeap.insert(v);
  }
});

console.log(answer.trim());