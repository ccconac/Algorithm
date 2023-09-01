class AbsoluteMinHeap {
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
      if (
        this.heap[parentIndex][0] < this.heap[currentIndex][0] ||
        (this.heap[parentIndex][0] == this.heap[currentIndex][0] &&
          this.heap[parentIndex][1] < this.heap[currentIndex][1])
      )
        break;
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

    if (
      leftIndex < length &&
      (this.heap[leftIndex][0] < this.heap[rootIndex][0] ||
        (this.heap[leftIndex][0] == this.heap[rootIndex][0] && this.heap[leftIndex][1] < this.heap[rootIndex][1]))
    ) {
      rootIndex = leftIndex;
    }
    if (
      rightIndex < length &&
      (this.heap[rightIndex][0] < this.heap[rootIndex][0] ||
        (this.heap[rightIndex][0] == this.heap[rootIndex][0] && this.heap[rightIndex][1] < this.heap[rootIndex][1]))
    ) {
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

const absoluteHeap = new AbsoluteMinHeap();
let answer = "";

input.forEach((v) => {
  if (v === 0) {
    if (absoluteHeap.empty()) answer += "0\n";
    else answer += `${absoluteHeap.pop()[1]}\n`;
  } else {
    absoluteHeap.insert([Math.abs(v), v]);
  }
});

console.log(answer.trim());