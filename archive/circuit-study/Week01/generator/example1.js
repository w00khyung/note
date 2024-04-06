var x = 1;

// 제네레이터 함수를 작성하기 위해 function 키워드에 * 을 붙입니다.
function* foo() {
	x++;
	yield;
	console.log('x : ', x);
}

function bar() {
	x++;
}

console.log(x); // 2

// 제네레이터 함수를 호출하며, 제네레이터 객체가 반환됩니다. 제네레이터 객체는 이터러블이면서, 동시에 이터레이터입니다.
// 반환된 'generator' 객체는 next() 메서드를 가지고 있습니다.
var generator = foo();

// foo()는 여기서 시작됩니다.
foo();
console.log(x); // 2
generator.next(); // x : 2
bar();
console.log(x); // 3
