class Node {
    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
        this.next = null;
    }
}

class PhoneBook {
    constructor() {
        this.head = null;
    }

    addContact(name, phone) {
        const newNode = new Node(name, phone);
        newNode.next = this.head;
        this.head = newNode;
    }

    findPhone(name) {
        let current = this.head;
        while (current) {
            if (current.name === name) {
                return current.phone;
            }
            current = current.next;
        }
        return null;
    }
}
