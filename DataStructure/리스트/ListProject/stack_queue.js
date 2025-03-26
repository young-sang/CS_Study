class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(data) {
        const newNode = new Node(data);
        newNode.next = this.top;
        this.top = newNode;
    }

    pop() {
        if (!this.top) {
            console.log("Stack is empty");
            return null;
        }
        const poppedData = this.top.data;
        this.top = this.top.next;
        return poppedData;
    }

    peek() {
        return this.top ? this.top.data : null;
    }
}

class Queue {
    constructor() {
        this.front = this.rear = null;
    }

    enqueue(data) {
        const newNode = new Node(data);
        if (!this.rear) {
            this.front = this.rear = newNode;
            return;
        }
        this.rear.next = newNode;
        this.rear = newNode;
    }

    dequeue() {
        if (!this.front) {
            console.log("Queue is empty");
            return null;
        }
        const dequeuedData = this.front.data;
        this.front = this.front.next;
        if (!this.front) {
            this.rear = null;
        }
        return dequeuedData;
    }
}
