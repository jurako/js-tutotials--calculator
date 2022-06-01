export class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(item) {
        this.queue.unshift(item);
    }

    dequeue() {
        this.queue.pop();
    }
}