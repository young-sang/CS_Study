class Stack {
    constructor() {
        this.items = {};
        this.count = 0;
    }

    push(value){
        this.items[this.count] = value;
        this.count++;
    }

    pop() {
        if(this.count === 0) return undefined;
        this.count--;
        const value = this.items[this.count];
        delete this.items[this.count];
        return value;
    }

    isEmpty() {
        return this.count === 0;
    }
}

function reverseString(str){
    const stack = new Stack();
    for (let char of str){
        stack.push(char);
    }

    let reversed = '';
    while(!stack.isEmpty()){
        reversed += stack.pop();
    }
    return reversed;
}

console.log(reverseString("hello"));