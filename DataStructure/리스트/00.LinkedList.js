class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // 맨 앞에 노드 삽입
    insertFront(data) {
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    // 맨 뒤에 노드 삽입
    insertBack(data) {
        let newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let temp = this.head;
            while (temp.next !== null) {
                temp = temp.next;
            }
            temp.next = newNode;
        }
    }

    // 중간 삽입 (특정 위치)
    insertAt(data, position) {
        let newNode = new Node(data);
        if (position === 0) {
            this.insertFront(data);
            return;
        }

        let temp = this.head;
        let i = 0;
        while (i < position - 1 && temp !== null) {
            temp = temp.next;
            i++;
        }

        if (temp !== null) {
            newNode.next = temp.next;
            temp.next = newNode;
        }
    }

    // 맨 앞 노드 삭제
    deleteFront() {
        if (this.head !== null) {
            this.head = this.head.next;
        }
    }

    // 맨 뒤 노드 삭제
    deleteBack() {
        if (this.head !== null) {
            if (this.head.next === null) {
                this.head = null;
            } else {
                let temp = this.head;
                while (temp.next.next !== null) {
                    temp = temp.next;
                }
                temp.next = null;
            }
        }
    }

    // 중간 노드 삭제 (특정 위치)
    deleteAt(position) {
        if (position === 0) {
            this.deleteFront();
            return;
        }

        let temp = this.head;
        let i = 0;
        while (i < position - 1 && temp !== null) {
            temp = temp.next;
            i++;
        }

        if (temp !== null && temp.next !== null) {
            temp.next = temp.next.next;
        }
    }

    // 연결 리스트 출력
    printList() {
        let temp = this.head;
        let output = "";
        while (temp !== null) {
            output += temp.data + " -> ";
            temp = temp.next;
        }
        console.log(output + "null");
    }
}

// 🔥 사용 예시
let list = new LinkedList();
list.insertFront(10);
list.insertBack(20);
list.insertAt(15, 1);
list.printList(); // 10 -> 15 -> 20 -> null

list.deleteFront();
list.printList(); // 15 -> 20 -> null

list.deleteBack();
list.printList(); // 15 -> null

list.deleteAt(0);
list.printList(); // null
