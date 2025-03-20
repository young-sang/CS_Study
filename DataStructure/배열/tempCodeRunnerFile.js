// ✅ 1. 배열 생성
let arr = [1, 2, 3, 4, 5];
console.log("1. 배열 생성:", arr);

// ✅ 2. 배열 요소 추가 (push, unshift)
arr.push(6);  // 끝에 추가
arr.unshift(0); // 앞에 추가
console.log("2. 요소 추가:", arr);

// ✅ 3. 배열 요소 삭제 (pop, shift, splice)
arr.pop();   // 끝 요소 삭제
arr.shift(); // 앞 요소 삭제
arr.splice(2, 1); // 인덱스 2의 요소 삭제
console.log("3. 요소 삭제:", arr);

// ✅ 4. 배열 순회 (for, forEach, map)
console.log("4. 배열 순회:");
arr.forEach((num, index) => console.log(`  - ${index}: ${num}`));

let squaredArr = arr.map(num => num ** 2);
console.log("  - 제곱된 배열:", squaredArr);

// ✅ 5. 특정 요소 검색 (indexOf, includes, find, findIndex)
console.log("5. 요소 검색:");
console.log("  - 3의 위치:", arr.indexOf(3)); // 인덱스 찾기
console.log("  - 4 포함 여부:", arr.includes(4)); // 포함 여부
console.log("  - 2보다 큰 첫 번째 값:", arr.find(num => num > 2)); // 조건에 맞는 첫 요소 찾기
console.log("  - 2보다 큰 값의 인덱스:", arr.findIndex(num => num > 2));

// ✅ 6. 배열 필터링 (filter)
let evenNumbers = arr.filter(num => num % 2 === 0);
console.log("6. 짝수만 필터링:", evenNumbers);

// ✅ 7. 배열 정렬 (sort, reverse)
let unsortedArr = [3, 1, 4, 1, 5, 9, 2];
console.log("7. 정렬 전:", unsortedArr);
unsortedArr.sort((a, b) => a - b); // 오름차순 정렬
console.log("  - 오름차순 정렬:", unsortedArr);
unsortedArr.reverse(); // 내림차순 정렬
console.log("  - 내림차순 정렬:", unsortedArr);

// ✅ 8. 배열 변환 (map, reduce)
let doubledArr = arr.map(num => num * 2);
console.log("8. 값 2배 변환:", doubledArr);

let sum = arr.reduce((acc, num) => acc + num, 0);
console.log("  - 배열 요소 합:", sum);

// ✅ 9. 중복 제거 (Set)
let duplicateArr = [1, 2, 2, 3, 4, 4, 5];
let uniqueArr = [...new Set(duplicateArr)];
console.log("9. 중복 제거:", uniqueArr);

// ✅ 10. 배열 병합 (concat, spread 연산자)
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let mergedArr = arr1.concat(arr2); // concat 사용
let spreadArr = [...arr1, ...arr2]; // spread 연산자 사용
console.log("10. 배열 병합:", mergedArr, spreadArr);

// ✅ 11. 배열 일부 가져오기 (slice)
let slicedArr = arr.slice(1, 3); // 인덱스 1~2까지만 가져오기
console.log("11. 배열 일부 가져오기:", slicedArr);

// ✅ 12. 다차원 배열 (flat)
let nestedArr = [1, [2, 3], [4, [5, 6]]];
console.log("12. 다차원 배열:", nestedArr.flat(2)); // 2단계까지 펼치기

// ✅ 13. 배열 섞기 (shuffle - Fisher-Yates 알고리즘)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
shuffle(arr);
console.log("13. 배열 섞기:", arr);

// ✅ 14. 배열을 문자열로 변환 (join)
console.log("14. 문자열로 변환:", arr.join(" - "));

// ✅ 15. 배열 비우기
arr.length = 0;
console.log("15. 배열 비우기:", arr);
