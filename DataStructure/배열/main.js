class CustomArray {
    constructor() {
        this.data = {};  // 배열 데이터를 저장할 객체
        this.length = 0; // 배열의 길이
    }

    // 요소 추가 (배열의 끝에 추가)
    push(value) {
        this.data[this.length] = value;
        this.length++;
        return this.length;
    }

    // 마지막 요소 제거 후 반환
    pop() {
        if (this.length === 0) return undefined;
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    // 특정 인덱스의 요소 반환
    get(index) {
        return this.data[index];
    }

    // 특정 인덱스의 요소 수정
    set(index, value) {
        if (index >= this.length) return undefined;
        this.data[index] = value;
        return value;
    }

    // 특정 인덱스의 요소 삭제 (이후 요소 이동)
    delete(index) {
        if (index >= this.length) return undefined;
        const deletedItem = this.data[index];

        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
        return deletedItem;
    }

    // 배열 내 특정 요소 찾기 (index 반환, 없으면 -1)
    find(value) {
        for (let i = 0; i < this.length; i++) {
            if (this.data[i] === value) return i;
        }
        return -1;
    }

    // 배열 뒤집기 (reverse)
    reverse() {
        let start = 0;
        let end = this.length - 1;

        while (start < end) {
            let temp = this.data[start];
            this.data[start] = this.data[end];
            this.data[end] = temp;
            start++;
            end--;
        }
        return this.data;
    }

    // 정렬 (버블 정렬 사용)
    sort() {
        for (let i = 0; i < this.length - 1; i++) {
            for (let j = 0; j < this.length - i - 1; j++) {
                if (this.data[j] > this.data[j + 1]) {
                    let temp = this.data[j];
                    this.data[j] = this.data[j + 1];
                    this.data[j + 1] = temp;
                }
            }
        }
        return this.data;
    }

    // 모든 요소 출력 (문자열 형태)
    print() {
        let result = "[";
        for (let i = 0; i < this.length; i++) {
            result += this.data[i];
            if (i < this.length - 1) result += ", ";
        }
        result += "]";
        console.log(result);
    }

    // 배열의 길이 반환
    size() {
        return this.length;
    }

    // 배열의 첫 번째 요소 반환
    first() {
        return this.data[0];
    }

    // 배열의 마지막 요소 반환
    last() {
        return this.data[this.length - 1];
    }

    // 배열의 요소를 모두 제거
    clear() {
        this.data = {};
        this.length = 0;
    }

    // 배열의 요소를 모두 합산
    sum() {
        let total = 0;
        for (let i = 0; i < this.length; i++) {
            total += this.data[i];
        }
        return total;
    }

    // 배열의 평균값 계산
    average() {
        if (this.length === 0) return undefined;
        return this.sum() / this.length;
    }

    // 배열의 최소값
    min() {
        if (this.length === 0) return undefined;
        let minValue = this.data[0];
        for (let i = 1; i < this.length; i++) {
            if (this.data[i] < minValue) {
                minValue = this.data[i];
            }
        }
        return minValue;
    }

    // 배열의 최대값
    max() {
        if (this.length === 0) return undefined;
        let maxValue = this.data[0];
        for (let i = 1; i < this.length; i++) {
            if (this.data[i] > maxValue) {
                maxValue = this.data[i];
            }
        }
        return maxValue;
    }

    // 배열의 요소를 모두 문자열로 결합 (join)
    join(separator = ',') {
        let result = '';
        for (let i = 0; i < this.length; i++) {
            result += this.data[i];
            if (i < this.length - 1) result += separator;
        }
        return result;
    }

    // 배열에서 중복된 값 제거 (Set 사용)
    unique() {
        const uniqueArray = new CustomArray();
        const seen = new Set();
        for (let i = 0; i < this.length; i++) {
            if (!seen.has(this.data[i])) {
                uniqueArray.push(this.data[i]);
                seen.add(this.data[i]);
            }
        }
        return uniqueArray;
    }

    // 배열의 요소가 다른 배열에 포함되어 있는지 확인 (contains)
    contains(value) {
        return this.find(value) !== -1;
    }
}

// 사용 예제
const arr = new CustomArray();
arr.push(10);
arr.push(20);
arr.push(30);
arr.push(40);
arr.push(50);
arr.print(); // [10, 20, 30, 40, 50]

console.log(arr.size()); // 5
console.log(arr.first()); // 10
console.log(arr.last()); // 50

arr.delete(1); // 인덱스 1의 요소(20) 삭제
arr.print(); // [10, 30, 40, 50]

console.log(arr.sum()); // 130
console.log(arr.average()); // 32.5
console.log(arr.min()); // 10
console.log(arr.max()); // 50

console.log(arr.reverse()); // [50, 40, 30, 10]
console.log(arr.sort()); // [10, 30, 40, 50]

arr.push(30);
arr.push(50);
arr.push(10);
arr.print(); // [10, 30, 40, 50, 30, 50, 10]

const uniqueArr = arr.unique();
uniqueArr.print(); // [10, 30, 40, 50]

console.log(arr.contains(40)); // true
console.log(arr.contains(100)); // false

arr.clear();
arr.print(); // []
