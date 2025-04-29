// 변수: var, let
let age = 27;

// 상수: const -> 상수는 초기화 필수, 이후 변경 불가
// but 내부값들은 변경가능
const constAge = {
  value: 25,
};

console.log(age);
console.log(`age: ${age}`);
console.log(constAge.value);
constAge.value = 27;
console.log(constAge.value);

// 자바스크립트에서 변수명은
// 1. $, _ 를 제외한 특수문자 사용불가
// 2. 변수명은 숫자로 시작불가
// 3. 예약어 사용불가

// 형변환

// 1. 묵시적 형변환
let num1 = 10;
let str = "20";

const result = num1 + str;

// 묵시적 형변환을 사용할 경우 더 큰값으로 바인딩되어 숫자 10 이 string 으로 바뀐다.
console.log(result);

// 2. 명시적 형변환
let str1 = "10";
let str1ToNum = Number(str1);
// 아래 처럼 Number 로 사용한다는 것을 명시해주면 두 수를 더한 결과값이 출력된다.
console.log(10 + str1ToNum);

// 만약 10개 같이 숫자와 문자가 섞인 값을 숫자로 바꾸려면 어떻게 해야할까??
let str2 = "10개";
// 아래와 같이 parseInt 를 사용하면 숫자데이터만 변환이 되는 것을 확인할 수 있다.
// 하지만 이 경우에도 문자가 숫자 앞에 있을 경우 형변환이 제대로 되지 않는다.
let str2ToNum = parseInt(str2);
console.log(str2ToNum);

// 숫자 -> 문자
let num = 99;
let numToStr = String(num);

// 연산자

// 1. 대입연산자: =
let var1 = 1;

// 2. 산술 연산자: +, -, *, /, %

// 3. 복합대입연산자: +=, -=, *=, /=, %=

// 4. 증감연산자: ++, --

// 5. 논리연산자: &&, ||, !

// 6. 비교연산자:
//  ==
//  ===
// !==
// !=
// >, <, >=, <=
// ===: 값과 타입이 모두 일치할 때, ==: 타입은 신경쓰지않고 값만 비교할 때

// 7. null 병합 연산자
// null or undefined 가 아닌 값을 찾아내는 연산자
// ??
// let var1, var2 = 10, var3 = 10;
// let var5 = var1 ?? var2; 처럼 할 경우 var2의 값인 var2의 값이 출력됨
// let var6 = var2 ?? var3; 처럼 둘다 null, undefiined 가 아닐 경우 먼저 비교한 var2의 값이 출력됨

// 7. typeof 연산자
// 값의 타입을 문자열로 반환

// 8. 삼항 연산자
// let a = 10 % 2 === 0 ? "짝수" : "홀수";

// 8. 조건문 -> java 유사

// 1. if-else

// 2. switch
// switch(num){
//
//    case 0: {
//      break;
//    }
//    default: {
//      break;
//    }
// }

// 9. 반복문
// for(let i = 0; i < 10; i++){
//    ---
// }

// 10. 함수
// function func1() {
//   //
// }
// let area = func1(10, 20) // 이렇게 함수를 작성전에 호출해도 잘 출력됨 이를 호이스팅 이라고한다.
// function func2(a, b) {
//   return a*b;
// }
// let area = func1(10, 20)

// 11. arrow function

// 자바 스크립트에서는 아래처럼 함수를 변수처럼 사용할 수 있고 함수명을 생략할 수 도 있다.
// let varA = function () {
//   return 10;
// };

// 화살표 함수는 아래처럼 function을 생략할 수 있다.
// let varA = (value) => {
//    console.log("value", value);
//    return value*value;
// };

// 12. call back 함수
// function main(value) {
//   value();
// }

// function sub() {
//   console.log("sub");
// }

// main(sub);

// 처럼 함수매개변수로 함수를 전달했을 때
// main(sub) 에서 sub의 로직인 console.log("sub")가 실행되는 것을 확일할 수 있다.
// 이때 main에 전달된 sub 함수를 콜백 함수라 한다.
// 이는 함수를 생성하지 않고 바로 전달할 수도 있다.
// function main(value) {
//   value();
// }
// main(() => {
//   console.log("sub");
// });

// 콜백함수의 활용
// function repeat(count) {
//   for (let i = 0; i < count; i++) {
//     console.log(i);
//   }
// }
// function repeatDouble(count) {
//   for (let i = 0; i < count; i++) {
//     console.log(i * 2);
//   }
// }
// repeat(5);
// repeaDouble(5);
// 위코드처럼 유사한 기능을 가진 함수를 여러개 필요로 할 때

// 아래와 같이 사용할 수 있다.
// function repeat(count, callback) {
//   for (let i = 0; i < count; i++) {
//     callback(i);
//   }
// }

// repeat(5, function (i) {
//   console.log(i);
// });

// repeat(5, function (i) {
//   console.log(i * 2);
// });

// 이를 간결하게 화살표 함수를 사용하면
// function repeat(count, callback) {
//   for (let i = 0; i < count; i++) {
//     callback(i);
//   }
// }

// repeat(5, (i) => {
//   console.log(i);
// });

// repeat(5, (i) => {
//   console.log(i * 2);
// });
// 처럼 표현하면 된다.

// 객체
// let ojb = new Object();
//
// 보통 아래와 같이 객체리터럴 방식의 생성을 사용함
// let person = {
//   name: "name", // -> 객체의 프로퍼티( key: value 로 구성)
//   age: 10,
//   obj: {},     // 처럼 객체를 가질 수 도 있다.
// };
// 처럼 저장할 수 있다.
// 객체의 프로퍼티의 key 로는 문자나, 숫자만 가능하다.

// 프로퍼티 접근하는 법
//    1. person.name
//    2. person["name"] // 이때 객체의 키는 반드시 문자형으로 명시해야한다.
//    let a = "age"
//    person[a]; 처럼 변수를 선언후 변수명으로 접근도 가능하다.

// 프로퍼티 수정/추가하기
// 접근방법과 동일하게하면됨

// 삭제하기
// delete person.key
// delete person["key"]

// 프로퍼티 존재유무
// "in" 연산자를 사용하면된다.
// let result = "key" in person
// 으로 표현함

// 상수객체
// const animal = {
//   age: 10,
//   name: "name",
// };
// 처럼 선언하여도
// animal.age = 11;
// animal.color = "검정"
// delete animal.name
// 과 같이 프로퍼티에대한 가용은 가능하다.

// 메서드
// const person = {
//   sayHi() {
//     console.log("Hi");
//   },
// };
// sayHi() 와 같이 값이 함수인 프로퍼티를 말한다.
// 보통 이러한 메서드는 객체의 동작을 정의할 때 사용한다.

// 배열
// 자바스크립트의 배열은 타입에 상관없이 어떤 값이던 들어갈 수 있다. 함수도 들어감
