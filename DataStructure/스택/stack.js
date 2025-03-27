class Stack {
    constructor() {
        this.items = {};
        this.count = 0;
    }

    // 요소 추가
    push(value){
        this.items[this.count] = value;
        this.count++;
    }

    // 요소 제거
    pop() {
        if(this.isEmpty()){
            return undefined;
        }
        this.count--;
        const value = this.items[this.count];
        delete this.items[this.count];
        return value;
    }

    // 맨 위 요소 확인
    peek() {
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.count - 1]
    }

    isEmpty(){
        return this.count === 0;
    }

    size() {
        return this.count;
    }

    clear(){
        this.items = {};
        this.count = 0;
    }

    print(){
        let result = "";
        for (let i = 0; i < this.count; i++){
            result += this.items[i] + " ";
        }
        return result.trim();
    }
}


// 스택 사용 예제
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log("Stack:", stack.print()); // Stack: 10 20 30
console.log("Peek:", stack.peek());   // Peek: 30
console.log("Pop:", stack.pop());     // Pop: 30
console.log("Stack after pop:", stack.print()); // Stack: 10 20
console.log("Size:", stack.size());   // Size: 2
console.log("Is Empty:", stack.isEmpty()); // Is Empty: false
stack.clear();
console.log("Stack after clear:", stack.print()); // Stack after clear:
console.log("Is Empty:", stack.isEmpty()); // Is Empty: true