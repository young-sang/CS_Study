class Node{
    constructor(key, value){
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache{
    constructor(capacity){
        this.capacity = capacity;
        this.cache = new Map();
        this.head = new Node(0, 0); // 더미 헤드
        this.tail = new Node(0, 0); // 더미 테일
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    _remove(node){
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    _add(node){
        node.next = this.head.next;
        node.prev = this.head;
        this.head.next.prev = node;
        this.head.next = node;
    }

    get(key){
        if(this.cache.has(key)){
            const node = this.cache.get(key);
            this._remove(node);
            this._add(node);
            return node.value;
        }
        return -1;
    }

    put(key, value){
        if(this.cache.has(key)){
            this._remove(this.cache.get(key));
        }
        const node = new Node(key, value);
        this.cache.set(key,node);
        this._add(node);

        if(this.cache.size > this.capacity) {
            const nodeToRemove = this.head.next;
            this._remove(nodeToRemove);
            this.cache.delete(nodeToRemove.key)
        }
    }
}