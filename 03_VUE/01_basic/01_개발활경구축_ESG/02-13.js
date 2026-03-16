let obj = { result: 0 };

//JavaScript this 바인딩 문제
obj.add = function (x, y) {
  function inner() {
    // this?
    this.result = x + y;
  }
  //일반 함수 호출 시에 this는 전역 개체를 참조
  // inner함수의 this는 global(node), window
  inner();
};

obj.add(3, 4);
console.log(obj);
console.log(result);

console.log(global.result);

// 1. 화살표함수: 호출된 상위객체의 this

let obj = { result: 0 };

obj.add = function (x, y) {
    // 화살표 함수 안의 this: 상위 scope의 this
  const inner = () => {
    this.result = x + y;
  };
  inner();
};

obj.add(3, 4);
console.log(obj);

//bind()로 명시적 바인딩
// 함수의this 값을 특정 객체의 영구적으로 바인딩한 새로운 함수를 반환
// 첫번째 인자로 전달된  this로 설정됨. 

let obj = { result: 0 };

obj.add = function (x, y) {
  function inner() {
    this.result = x + y;
  }

  inner.bind(obj)();
};

obj.add(3, 4);
console.log(obj);

