class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);

    if (!this.head) this.head = node;
    else {
      this.tail.next = node;
      node.prev = this.tail;
    }
    this.tail = node;
    this.length++;

    return node;
  }

  getHead() {
    return this.head.value;
  }

  removeHead() {
    this.head = this.head.next;
    this.head.prev = null;
    this.length--;
  }

  getSize() {
    return this.length;
  }
}

const input = require("fs").readFileSync(0).toString();

const N = Number(input);
const list = new LinkedList();

for (let i = 1; i <= N; i++) list.push(i);

for (let i = 0; i < N; i++) {
  if (list.getSize() < 2) break;
  list.removeHead();
  list.push(list.getHead());
  list.removeHead();
}

console.log(list.getHead());