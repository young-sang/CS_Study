class MyArray {
    constructor () {
        this.data = {};
        this.length = 0;
    }

    push(value) {
        this.data[this.length] = value;
        this.length++;
        return this.length;
    }

    pop() {
        if(this.length === 0) return undefined;
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem
    }

    get(index) {
        return this.data[index];
    }

    set(index, value) {
        if(index >= this.length) return undefined;
        this.data[index] = value;
        return value;
    }

    delete(index) {
        if(index >= this.length) return undefined;
        const deletedItem = this.data[index];

        for(i = index; i < this.length -1; i++){
            this.data[i] = this.data[i+1];
        }

        delete this.data[this.length - 1];
        this.length--;
        return deletedItem;
    }

    find(value) {
        for (let i = 0; i < this.length -1; i++){
            if(this.data[i] == value) return i;
        }
        return -1;
    }

    reverse() {
        let start = 0;
        let end = this.length - 1;

        while (start < end){
            let temp = this.data[start]
            this.data[start] = this.data[end];
            this.data[end] = temp;
            start++;
            end--;
        }
        return this.data;
    }

    sort() {
        for(let i = 0; i < this.length - 1; i++){
            for(let j = 0; j < this.length - i - 1; j++){
                if(this.data[j] > this.data[j+1]){
                    let temp = this.data[j];
                    this.data[j] = this.data[j+1];
                    this.data[j+1] = temp;
                }
            }
        }
        return this.data
    }

    print() {
        let result = "[";
        for (let i = 0; i < this.length; i++){
            result += this.data[i];
            if(i < this.length - 1) result += ",";
        }
        result += "]";
        console.log(result);
    }

    size() {
        return this.length;
    }

    first() {
        return this.data[0];
    }

    last() {
        return this.data[this.length - 1];
    }

    clear() {
        this.data = {};
        this.length = 0;
    }

    sum() {
        const result = 0;
        for(let i = 0; i < this.length - 1; i++){
            result += this.data[i];
        }
        return result;
    }

    average() {
        if(this.length === 0) return undefined;
        return this.sum() / this.length;
    }

    min() {
        if(this.length === 0) return undefined;
        let minValue = this.data[0];
        for(let i = 1; i < this.length - 1; i++){
            if(minValue > this.data[i]){
                minValue = this.data[i];
            }
        }
        return minValue;
    }

    max() {
        if(this.length === 0) return undefined;
        let maxValue = this.data[0];
        for(let i = 1; i < this.length; i++){
            if(maxValue < this.data[i]){
                maxValue = this.data[i];
            }
        }
        return maxValue;
    }

    join(separator = ',') {
        let result = '';
        for(let i = 0; i < this.length; i++){
            result += this.data[i];
            if(i < this.length -1) result += ",";
        }
        return result;
    }

    unique() {
        const uniqueArray = new CustomArray();
        const seen = new Set();
        for(let i = 0; i < this.length; i++){
            if(!seen.has(this.data[i])){
                uniqueArray.push(this.data[i]);
                seen.add(this.data[i]);
            }
        }
        return uniqueArray;
    }

    contains(value) {
        return this.find(value) !== -1;
    }
}

const a = new MyArray();
b = a.push(3);
a.print()
