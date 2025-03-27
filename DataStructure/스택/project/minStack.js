class MinStack{
    constructor(){
        this.stack = [];
        this.minStack = [];
    }

    push(value){
        this.stack.push(value);
        if(this.minStack.length === 0 || value <= this.getMin()){
            this.minStack.push(value);
        }
    }

    pop(){
        if(this.stack.length === 0) return null;
        const value = this.stack.pop();
        if(value === this.getMin()){
            this.minStack.pop();
        }
        return value;
    }

    getMin(){
        return this.minStack[this.minStack.length -1];
    }
}

const minStack = new MinStack();
minStack.push(5);
minStack.push(3);
minStack.push(7);
console.log(minStack.getMin()); // 3
minStack.pop();
console.log(minStack.getMin()); // 3
minStack.pop();
console.log(minStack.getMin()); // 5