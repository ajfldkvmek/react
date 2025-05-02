// 1. falsy truthy
// 1-1 falsey
// undefined, null, 0, -0, NaN, "", 0n 과 같은 값들이 falsey 한 값이다.

// 1-2 truthy
// falsey 이외의 모든 값들이 truthy 한 값이다.
// 빈값이 아닌 스트링, 0이 아닌 숫자 [], {}, () => {} 등이 truthy 한 값이다.

// 1-3 그래서 언제 사용해?
let personUndefined;
let person = {
  name: "name",
};
function prinName(person) {
  if (person === undefined || person === null) {
    console.log("no name");
    return;
  }
  console.log(person.name);
}
// 이렇게 null 이거나 undefined 인지 체크할 때 객체 프로퍼티에 접근하는 조건이 많을 경우 여러개의 조건식을 적어야해서 매우 비효율적이다.
// 그래서
function prinName1(person) {
  if (!person) {
    console.log("no name");
    return;
  }
  console.log(person.name);
}
// 이렇게 간단하게 표현하는 것을 권장한다.

// 2. 단락 평가
function prinName2(person) {
  console.log(person && person.name);
}

function prinName3s(person) {
  const name = person.name;
  console.log(name || "no name");
}

// person?.name 과 같이 옵셔널 체이닝과의 차이점은
// 단락 평가는 true/false 에 따른 다른 결과를 출력하기 위함이고
// 옵셔널 체이닝은 안전하게 속성에 접근할 수 있도록 하는 것이다.

// 3. 구조 분해 할당
// 3.1 배열
let arr = [1, 2, 3];
let [one, two, three, four = 4] = arr;
console.log(one, two, three, four);

// 3.2 객체
let person1 = {
  name: "name",
  age: 10,
};

let { name, age } = person1;
console.log(name, age);

// 3.3 객체 구조분해 할당을 이용한 함수의 매개변수를 받는 방법
const func1 = ({ name, age }) => {
  console.log(name, age);
};
func1(person1);

// 4. spread 연산자와
let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];
console.log(arr2);
// 이는 객체에도 사용 가능한데
let obj1 = { name: "name", age: 10 };
let obj2 = { ...obj1, number: 20 };
console.log(obj2);

function funcA(a, b, c) {
  console.log(a, b, c);
}
funcA(...arr1);

// 5. rest 매개변수 - 나머지 매개변수 => 다수의 매개변수가 전달 될 때 지정한 매개변수 외의 매개변수들을 배열로 받는다. 또한 rest 매개변수는 마지막에 위치해야한다.
function funcB(a, ...rest) {
  console.log(rest);
}
funcB(1, 2, 3);

// 6. 원시타입 / 객체타입
// 원시타입: number, string, boolean, undefined, null, symbol, bigint - 값 자체가 저장되기에 복사할 때 값 자체를 복사한다. -> 원본데이터가 바뀌어도 복사된 값은 변경되지 않음
// 객체타입: object, array, function - 같은 주소값을 바라보고 있다. -> 복사할 때 주소값을 복사한다. -> 원본이 바뀌면 복사된 값도 변경됨(얕은 복사))
// 따라서 객체타입을 새로 복사하고 싶을땐 obj1 = obj2 와 같은 대입방식(얕은 복사)이 아니라 obj1 = {...obj2} 와 같이 스프레드 연산을 사용해야한다.(깊은 복사)
// 객체값의 비교는 저장된 값이 아니라 참조값(주소값)을 비교한다.

// 7. iteration
// 7.1 배열 순회
// 7.1.1 일반적인 for문
for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}

// 7.1.2 for of  -  index를 사용하지 않기 떄문에 단순히 반복을 통해 값을 사용할 때 좋음
for (let item of arr1) {
  console.log(item);
}

// 7.2 객체 순회
// 7.2.1 for in
for (let key in obj1) {
  console.log(key, obj1[key]);
}
// 7.2.2 for of
let keys = Object.keys(obj1);
for (let key of keys) {
  console.log(key, obj1[key]);
}
for (let key of Object.keys(obj1)) {
  console.log(key, obj1[key]);
}

// 7.2.3 Object.keys
Object.keys(obj1).forEach((key) => {
  console.log(key, obj1[key]);
});
// 7.2.4 Object.values
Object.values(obj1).forEach((value) => {
  console.log(value);
});
// 7.2.5 Object.entries
Object.entries(obj1).forEach(([key, value]) => {
  console.log(key, value);
});
// 와 같이 key 뿐 아니라 values, entries를 사용하여 다양한 방식으로 객체를 순회할 수 있다.

// 7.3 for in
for (let key in obj1) {
  console.log(key, obj1[key]);
}

// for of 와 for in 의 차이
// for of: 배열을 순회할 때
// for in: 객체를 순회할 때

// 8. 요소 조작 메소드

// 8.1 push - 배열의 맨 뒤에 추가
let arr8 = [1, 2, 3];
arr8.push(4);
console.log(arr8);
arr8.push(5, 6, 7); // 과 같이 복수의 값을 추가할 수 있다.
console.log(arr8);

// 8.2 pop - 배열의 맨 뒤 제거 및 반환
let lastValue = arr8.pop();
console.log(arr8);
console.log(lastValue);

// 8.3 shift - 배열의 맨 앞 제거 및 반환
let firstValue = arr8.shift();
console.log(arr8);
console.log(firstValue);

// 8.4 unshift - 배열의 맨 앞에 추가하고 길이를 반환
let length = arr8.unshift(1);
console.log(arr8);
console.log(length, arr8);

// shift, unshift는 배열의 길이를 반환한다.
// 그리고 push, pop 보다 속도가 조금 느리다.

// 8.5 slice - 배열의 특정 범위를 잘라 새로운 배열로 반환
let arr8Slice = arr8.slice(1, 3);
console.log(arr8Slice);
// 자르는 범위는 slice(a, b) 일때 a번 인덱스 부터 b-1번 인덱스까지다.
// b를 생략할 경우 a번 인덱스 부터 마지막까지 자른다.
// 원본 배열에는 변화가 없다.

// 8.6 concat 두개의 배열을 이어붙임
let c1 = [1, 2, 3];
let c2 = [4, 5, 6];
let c3 = c1.concat(c2);
console.log(c3);
// 원본 배열에는 변화가 없다.

// 9. 배열의 순회 및 탐색
let arr9 = [1, 2, 3];
// 9.1 forEach
arr9.forEach(function (item, idx, arr) {
  console.log(item, idx, arr);
});

arr.forEach((item, idx, arr) => {
  console.log(idx, item * 2);
});

arr9.forEach((item) => {
  console.log(item * 2);
});

let doubleArr9 = [];
arr9.forEach((item) => {
  doubleArr9.push(item * 2);
});
console.log(doubleArr9);

// 9.2 includes
// 배열에 특정 요소가 있는지 확인
let isIncluded = arr9.includes(2);
console.log(isIncluded);

// 9.3 indexOf
// 배열에서 특정 요소의 인덱스를 반환
let idx = arr9.indexOf(2);
console.log(idx);

// 9.4 findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 첫번째 요소의 인덱스를 반환
// let idx2 = arr9.findIndex((item) => {
//   if (item %2 !== 1) {
//     return true;
//   }
// }); // 특정 조건을 만족하는 첫 인덱스를 반환 이놈읜 arrow function 으로 하면 더 간단하게도 가능한데
let idx2 = arr9.findIndex((item) => item % 2 !== 0);
console.log(idx2);

// 왜 indexOf 안쓰고 findIndex 사용할까?
// 배열의  요소가 원시타입이 아니라 객체일 경우 indexOf는 참조값을 비교하지만 findIndex는 값 자체를 비교하기 때문에
// indexOf로는 찾을 수 없지만 findIndex로는 찾을 수 있다.

let objArr = [
  { name: "name", age: 10 },
  { name: "name", age: 20 },
];
let idx3 = objArr.findIndex((item) => item.age === 20);
console.log(idx3);

// 9.5 find
// 모든 요소를 순회하면서, 콜백함수를 만족하는 첫번째 요소를 그대로 반환 - 객체일 경우 객체 자체가 반환됨
let obj4 = objArr.find((item) => item.age === 20);
console.log(obj4);

// 9.6 filter
// 기존 배열에서 조건을 만조가는 요소들만 필터링하여 새로운 배열로 반환
let objArr2 = [
  { name: "name1", age: 10 },
  { name: "name2", age: 20 },
  { name: "name3", age: 20 },
];
let obj5 = objArr2.filter((item) => item.age === 20);
console.log(obj5);

// 9.7 map
// 배열의 모든 요소를 순회하면서, 각각 "콜백함수를 실행하고" 그 "결과값들을 모아서" 새로운 배열로 반환
let obj6 = objArr2.map((item) => {
  return item.age * 2;
});
console.log(obj6);

// map 을 언제 사용해?
let nameArr = objArr2.map((item) => item.name);
console.log(nameArr);
// 이렇게 하면 기존 객체배열에서 이름만 모아서 반환함

// sort - 정렬 arr.sort();
// sort 는 배열을 사전순으로 정렬하기 때문에 숫자배열의 경우 정렬이 제대로 되지 않는다.
// 이를 위해서는 기준을 같이 전달해야한다.
// 오름차순의 경우
arr.sort((a, b) => {
  if (a > b) return 1;
  else if (a < b) return -1;
  else return 0;
});

// toSorted - sort는 원본배열을 변경하지만 toSorted는 원본배열을 변경하지 않는다.(최신함수)
let toSort = arr.toSorted((a, b) => {
  if (a > b) return 1;
  else if (a < b) return -1;
  else return 0;
});
console.log(toSort);
console.log(arr);

// join - 배열의 모든 요소를 하나의 문자열로 반환
let Sarr = ["a", "b", "c"];
let str = Sarr.join("::"); // 처럼 직접 지정할 수 있다.
// let str = Sarr.join(); // 이 경우는 기본적으로 ","를 사용한다.
console.log(str);

// 10 Date 객체
let date = new Date(); // 이렇게 new 화 함게 사용하는 객체들을 생성자 라고 한다.
console.log(date); // 현재 시간출력

let date2 = new Date("2025-01-01"); // 이렇게 특정날짜를 지정하여 객체를 생성할 수 있다.
console.log(date2);
// 시간을 설정하고 싶다면...
let date3 = new Date("2025-01-01/00:00:00"); // 처럼 '/' 를 사용하면 된다.

// 10.1 타입스탬프
// 특정시간이 "1970년 1월 1일 00:00:00" 로 부터 지난 시간을 ms 단위로 표현한 값
let timestamp = Date.now(); // 현재 시간
let timestamp2 = date.getTime(); // 특정 시간

let date4 = new Date(timestamp); //처럼 타임스탬프를 기준으로 새로운 날짜 객체를 생성할 수 있다.

// 시간 요소 추출
let year = date.getFullYear(); // 연도
let month = date.getMonth(); // 월
let date5 = date.getDate(); // 일
let day = date.getDay(); // 요일
let hours = date.getHours(); // 시간
let minutes = date.getMinutes(); // 분
let seconds = date.getSeconds(); // 초
console.log(year, month + 1, date5, day, hours, minutes, seconds);
// month는 0부터 시작하기 때문에 +1을 해야한다.

// date 객체의 정보 수정
date.setFullYear(2026);
date.setMonth(0); // 자바 스크립트의 월은 0부터 시작이므로 1월을 저장하려면 0으로 설정
date.setDate(1);
date.setHours(0);
date.setMinutes(0);
date.setSeconds(0);
console.log(date);

// date format
console.log(date.toDateString()); // 년, 월, 일만 출력
console.log(date.toLocaleString()); // 지역에 따라 다르게 출력(한국의 경우 KST)
