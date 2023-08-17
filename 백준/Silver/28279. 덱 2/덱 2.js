class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class Deque {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push_front(X) {
    const node = new Node(X);
    if (this.getSize() === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.size++;
  }

  push_back(X) {
    const node = new Node(X);
    if (this.getSize() === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.size++;
  }

  pop_front() {
    if (this.getSize() === 0) return -1;
    else if (this.getSize() === 1) {
      const result = this.head.value;
      this.head = null;
      this.tail = null;
      this.size--;

      return result;
    } else if (this.getSize() === 2) {
      const result = this.head.value;
      this.head = this.head.next;
      this.tail.prev = null;
      this.size--;

      return result;
    } else if (this.getSize() > 2) {
      const result = this.head.value;
      this.head.next.prev = null;
      this.head = this.head.next;
      this.size--;

      return result;
    }
  }

  pop_back() {
    if (this.getSize() === 0) return -1;
    else if (this.getSize() === 1) {
      const result = this.tail.value;
      this.head = null;
      this.tail = null;
      this.size--;

      return result;
    } else if (this.getSize() === 2) {
      const result = this.tail.value;
      this.tail = this.tail.prev;
      this.tail.next = null;
      this.size--;

      return result;
    } else if (this.getSize() > 2) {
      const result = this.tail.value;
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
      this.size--;

      return result;
    }
  }

  getSize() {
    return this.size;
  }

  empty() {
    if (this.size === 0) return 1;
    else return 0;
  }

  front() {
    if (this.empty()) return -1;
    else return this.head.value;
  }

  back() {
    if (this.empty()) return -1;
    else return this.tail.value;
  }
}

const input = require("fs").readFileSync(0).toString().split("\n");

const N = parseInt(input.shift());
const deque = new Deque();
const result = [];

for (let i = 0; i < N; i++) {
  const [command, value] = input[i].split(" ").map(Number);

  if (command === 1) {
    deque.push_front(value);
  } else if (command === 2) {
    deque.push_back(value);
  } else if (command === 3) {
    result.push(deque.pop_front());
  } else if (command === 4) {
    result.push(deque.pop_back());
  } else if (command === 5) {
    result.push(deque.getSize());
  } else if (command === 6) {
    result.push(deque.empty());
  } else if (command === 7) {
    result.push(deque.front());
  } else if (command === 8) {
    result.push(deque.back());
  }
}

console.log(result.join("\n"));