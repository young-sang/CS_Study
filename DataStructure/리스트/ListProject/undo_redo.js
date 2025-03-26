class Node{
    constructor(data){
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class UndoRedoSystem {
    constructor() {
        this.current = null;
    }

    addAction (action) {
        const newNode = new Node(action);
        if(this.current){
            newNode.prev = this.current;
            this.current.next = newNode;
        }
        this.currnet = newNode;
    }

    undo () {
        if(this.current && this.currnet.prev){
            this.currnet = this.currnet.prev;
            console.log(`Undo: ${this.current.data}`);
        } else {
            console.log("No more actions to undo");
        }
    }

    redo() {
        if(this.current && this.currnet.next){
            this.currnet = this.currnet.next;
            console.log(`Redo: ${this.current.data}`);
        } else {
            console.log("No more actions to redo");
        }
    }
}