// ✅ 1. 배열 생성 (배열을 객체로 직접 구현)
function MyArray() {
    this.data = {};
    this.length = 0;

    // 요소 추가 (push 대체)
    this.push = function(value) {
        this.data[this.length] = value;
        this.length++;
    };

    // 요소 삭제 (pop 대체)
    this.pop = function() {
        if (this.length === 0) return undefined;
        let removedValue = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return removedValue;
    };

    // 앞에서 요소 삭제 (shift 대체)
    this.shift = function() {
        if (this.length === 0) return undefined;
        let removedValue = this.data[0];
        for (let i = 0; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
        return removedValue;
    };

    // 요소 삽입 (splice 대체)
    this.splice = function(index, deleteCount) {
        if (index < 0 || index >= this.length) return;
        for (let i = index; i < this.length - deleteCount; i++) {
            this.data[i] = this.data[i + deleteCount];
        }
        for (let i = 0; i < deleteCount; i++) {
            delete this.data[this.length - 1 - i];
            this.length--;
        }
    };

    // 요소 찾기 (indexOf 대체)
    this.indexOf = function(value) {
        for (let i = 0; i < this.length; i++) {
            if (this.data[i] === value) return i;
        }
        return -1;
    };

    // 요소 포함 여부 확인 (includes 대체)
    this.includes = function(value) {
        return this.indexOf(value) !== -1;
    };

    // 배열을 문자열로 변환 (join 대체)
    this.join = function(separator = ",") {
        let result = "";
        for (let i = 0; i < this.length; i++) {
            result += this.data[i];
            if (i < this.length - 1) result += separator;
        }
        return result;
    };

    // 요소 필터링 (filter 대체)
    this.filter = function(callback) {
        let newArray = new MyArray();
        for (let i = 0; i < this.length; i++) {
            if (callback(this.data[i])) {
                newArray.push(this.data[i]);
            }
        }
        return newArray;
    };

    // 정렬 (sort 대체 - 버블 정렬)
    this.sort = function() {
        for (let i = 0; i < this.length; i++) {
            for (let j = 0; j < this.length - 1 - i; j++) {
                if (this.data[j] > this.data[j + 1]) {
                    let temp = this.data[j];
                    this.data[j] = this.data[j + 1];
                    this.data[j + 1] = temp;
                }
            }
        }
    };

    // 배열을 뒤집기 (reverse 대체)
    this.reverse = function() {
        for (let i = 0; i < Math.floor(this.length / 2); i++) {
            let temp = this.data[i];
            this.data[i] = this.data[this.length - 1 - i];
            this.data[this.length - 1 - i] = temp;
        }
    };

    // 요소 변환 (map 대체)
    this.map = function(callback) {
        let newArray = new MyArray();
        for (let i = 0; i < this.length; i++) {
            newArray.push(callback(this.data[i]));
        }
        return newArray;
    };

    // 모든 요소를 합산 (reduce 대체)
    this.reduce = function(callback, initialValue) {
        let accumulator = initialValue !== undefined ? initialValue : this.data[0];
        let startIndex = initialValue !== undefined ? 0 : 1;
        for (let i = startIndex; i < this.length; i++) {
            accumulator = callback(accumulator, this.data[i]);
        }
        return accumulator;
    };

    // 중복 제거 (Set 대체)
    this.removeDuplicates = function() {
        let newArray = new MyArray();
        for (let i = 0; i < this.length; i++) {
            if (!newArray.includes(this.data[i])) {
                newArray.push(this.data[i]);
            }
        }
        return newArray;
    };

    // 배열 병합 (concat 대체)
    this.concat = function(otherArray) {
        let newArray = new MyArray();
        for (let i = 0; i < this.length; i++) {
            newArray.push(this.data[i]);
        }
        for (let i = 0; i < otherArray.length; i++) {
            newArray.push(otherArray.data[i]);
        }
        return newArray;
    };

    // 배열 일부 가져오기 (slice 대체)
    this.slice = function(start, end) {
        let newArray = new MyArray();
        for (let i = start; i < end && i < this.length; i++) {
            newArray.push(this.data[i]);
        }
        return newArray;
    };

    // 배열 비우기
    this.clear = function() {
        this.data = {};
        this.length = 0;
    };
}

// ✅ 테스트
let myArray = new MyArray();
myArray.push(3);
myArray.push(1);
myArray.push(4);
myArray.push(1);
myArray.push(5);
console.log("배열:", myArray.data);

console.log("배열에서 1 찾기 (indexOf):", myArray.indexOf(1));
console.log("배열에 5가 포함됨? (includes):", myArray.includes(5));

console.log("배열을 문자열로 변환 (join):", myArray.join(" - "));

console.log("짝수만 필터링 (filter):", myArray.filter(num => num % 2 === 0).data);

console.log("배열 정렬 (sort):");
myArray.sort();
console.log(myArray.data);

console.log("배열 뒤집기 (reverse):");
myArray.reverse();
console.log(myArray.data);

console.log("배열 요소 변환 (map):", myArray.map(num => num * 2).data);

console.log("배열 요소 합 (reduce):", myArray.reduce((sum, num) => sum + num, 0));

console.log("중복 제거 (removeDuplicates):", myArray.removeDuplicates().data);

let newArray = new MyArray();
newArray.push(6);
newArray.push(7);

console.log("배열 병합 (concat):", myArray.concat(newArray).data);

console.log("배열 일부 가져오기 (slice):", myArray.slice(1, 3).data);

console.log("배열 비우기:");
myArray.clear();
console.log(myArray.data);
