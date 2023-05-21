class Heap {
    constructor() {
        this.items = [];
    }

    swap(index1, index2) {
        let temp = this.items[index1];
        this.items[index1] = this.items[index2];
        this.items[index2] = temp;
    }

    parentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    leftChildIndex(index) {
        return index * 2 + 1;
    }

    rightChildIndex(index) {
        return index * 2 + 2;
    }

    parent(index) {
        return this.items[this.parentIndex(index)];
    }

    leftChild(index) {
        return this.items[this.leftChildIndex(index)];
    }

    rightChild(index) {
        return this.items[this.rightChildIndex(index)];
    }

    peek() {
        return this.items[0];
    }

    size() {
        return this.items.length;
    }
}

class MinHeap extends Heap {

    bubbleUp() {
        let index = this.items.length - 1;
        while (this.parent(index) !== undefined && this.parent(index) > this.items[index]) {
            this.swap(index, this.parentIndex(index));
            index = this.parentIndex(index);
        }
    }

    bubbleDown() {
        let index = 0;
        while (this.leftChild(index) !== undefined && (this.leftChild(index) < this.items[index] || this.rightChild(index) < this.items[index])) {
            let smallerIndex = this.leftChildIndex(index);
            if (this.rightChild(index) !== undefined && this.rightChild(index) < this.items[smallerIndex]) {
                smallerIndex = this.rightChildIndex(index);
            }
            this.swap(index, smallerIndex);
            index = smallerIndex;
        }
    }

    add(item) {
        this.items[this.items.length] = item;
        this.bubbleUp();
    }

    poll() {
        let item = this.items[0];
        this.items[0] = this.items[this.items.length - 1];
        this.items.pop();
        this.bubbleDown();
        return item;
    }
}

class MaxHeap extends MinHeap {
    bubbleUp() {
        let index = this.items.length - 1;
        while (this.parent(index) !== undefined && this.parent(index) < this.items[index]) {
            this.swap(index, this.parentIndex(index));
            index = this.parentIndex(index);
        }
    }

    bubbleDown() {
        let index = 0;
        while (this.leftChild(index) !== undefined && (this.leftChild(index) > this.items[index] || this.rightChild(index) > this.items[index])) {
            let largerIndex = this.leftChildIndex(index);
            if (this.rightChild(index) !== undefined && this.rightChild(index) > this.items[largerIndex]) {
                largerIndex = this.rightChildIndex(index);
            }
            this.swap(index, largerIndex);
            index = largerIndex;
        }
    }
}

class MedianHeap {
    constructor() {
        this.minheap = new MinHeap();
        this.maxheap = new MaxHeap();
    }
    
    add(value) {
        if (value > this.median()) this.minheap.add(value);
        else this.maxheap.add(value);

        if (this.minheap.size() - this.maxheap.size() > 1) {
            this.maxheap.add(this.minheap.poll());
        }
        if (this.maxheap.size() - this.minheap.size() > 1) {
            this.minheap.add(this.maxheap.poll());
        }
    }

    median() {
        if (this.minheap.size() === 0 && this.maxheap.size() === 0) {
            return Number.NEGATIVE_INFINITY;
        } else if (this.minheap.size() === this.maxheap.size()) {
            return Math.min(this.minheap.peek(), this.maxheap.peek());
        } else if (this.minheap.size() > this.maxheap.size()) {
            return this.minheap.peek();
        } else {
            return this.maxheap.peek();
        }
    }
}

const input = require('fs').readFileSync(0).toString().trim().split('\n').map(Number);

const result = [];
const N = parseInt(input.shift());
const medianHeap = new MedianHeap();

for (let i = 0; i < N; i++) {
    medianHeap.add(Number(input[i]));
    result.push(medianHeap.median());
}

console.log(result.join("\n"));