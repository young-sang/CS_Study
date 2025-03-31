class Queue{
    constructor(){
        this.queue = [];
    }

    enqueue(item){
        this.queue.push(item);
    }

    dequeue(){
        return this.isEmpty() ? null : this.queue.shift();
    }

    front(){
        return this.isEmpty() ? null : this.queue[0];
    }

    isEmpty(){
        return this.queue.length === 0;
    }

    size(){
        return this.queue.length;
    }
}