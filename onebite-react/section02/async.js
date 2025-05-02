// 자바스크립트의 동기와 비동기

// 자바스크립트 기본 내장 비동기함수

// callback
// 1.setTimeout
// setTimeout(() => {
//   console.log("1초 후에 실행됩니다.");
// }, 1000);

// 비동기 작업은 자바스크립트 엔진이 아닌
// 브라우저나 노드가 제공하는 Web APIs를 사용하여 처리한다.

function add(a, b, callback) {
  setTimeout(() => {
    const result = a + b;
    callback(result);
  }, 2000);
}
add(1, 2, (value) => {
  console.log(value);
});

function orderFood(callback) {
  setTimeout(() => {
    const food = "치킨";
    callback(food);
  }, 2000);
}

function coolDown(food, callback) {
  setTimeout(() => {
    const coolDownFood = `${food} 식었다.`;
    callback(coolDownFood);
  }, 2000);
}

function freezeFood(food, callback) {
  setTimeout(() => {
    const freezeFood = `${food} 얼렸다.`;
    callback(freezeFood);
  }, 2000);
}

orderFood((food) => {
  console.log(food);
  coolDown(food, (coolDownFood) => {
    console.log(coolDownFood);
    freezeFood(coolDownFood, (freezeFood) => {
      console.log(freezeFood);
    });
  });
});

// Promise
// resolve : 성공
// reject : 실패
// PromiseResult : resolve나 reject로 전달된 인수
// PromiseState : pending, fulfilled(resolve), rejected(reject)
const promise = new Promise((resolve, reject) => {
  // 비동기 작업 실행 함수
  // executor
  setTimeout(() => {
    console.log("ㅎㅇ");
    resolve("성공"); // 성공했다면 resolve를 호출 전달하는 인수가 PromiseResult 가 된다
    // reject("실패"); // 실패했다면 reject를 호출
  }, 2000);
});

// setTimeout(() => {
//   console.log(promise);
// }, 2000);

// then 메서드 - PromiseState가 fulfilled(resolve)일때만 호출됨
// 매개변수는 콜백함수를 받음
// 콜백함수의 매개변수는 resolve로 전달된 인수
promise.then((result) => {
  console.log(result);
});

// catch 메서드 - PromiseState가 rejected(reject)일때만 호출됨
promise.catch((result) => {
  console.log(result);
});

// 그리고 then 메소드는 사용한 promise 자체를 반환한다. 그렇다면
promise
  .then((result) => {
    console.log(result);
  })
  .catch((result) => {
    console.log(result);
  });
// 처럼 프로미스 체이닝 형태로 사용할 수 있다.

// >>>>
function add10() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const time = 0;
      if (typeof time === "number") resolve(10);
      else reject("time은 숫자여야 함");
    }, 2000);
  });
  return promise;
}
const p = add10(0); //이렇게 반화된 promise 객체를 할당하고

p.then((result) => {
  console.log(result);
  const newP = add10(result);
  newP.then((result) => {
    console.log(result); //20
  });
  return newP; //
});
// 이렇게 하면 콜백지옥이랑 다를게 없다 아래와 같이 표현하자
p.then((result) => {
  console.log(result);
  return add10(result);
})
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// 이렇게 체이닝을 하게되면 중간에 오류가 발생하게되면
// 마지막 catch로 전달됨

// 3. async await
// 어떤 함수를 비동기 함수로 만들어준다!

async function addAsync() {
  const result = await add10();
  console.log(result);
}
addAsync();
// 이런식으로 작성해주면 함수가 비동기방식으로 작동함

// 또 async 함수의 반환값이 promise 라면
// 함수는 별다른 일을 하지 않고 그냥 promise 가 반환되도록 내버려둔다
async function addAsync() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "name",
        age: 10,
      });
    }, 2000);
  });
}
addAsync();

// 그리고 async 함수는 await 와 함꼐 사용한다.
// await는 async 함수 내에서만 사용할 수 있다.
// await는 promise가 resolve 될 때까지 기다린다.

// async function addAsync() {
//     getData().then((result) => {
//       console.log(result);
//     });
//   }
// 더이상 이렇게 사용할 필요없이
async function addAsync() {
  const result = await getData();
}
// 처럼 await 를 사용하면
// promise가 resolve 될 때까지 기다린다.
