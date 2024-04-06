// const connect = (a: number) => (b: number) => {
//   return a + b;
// };

function connect(a: number) {
  return function (b: number) {
    return a + b;
  };
}

function add(a: number, b: number) {
  return a + b;
}

add(1, 2);

// 지연 평가
const num = connect(1);
const num2 = num(2);

// const num = connect(1)(2);

console.log(num);
console.log(num2);
