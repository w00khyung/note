var a = 10;
var b = 20;

function foo() {
	const c = 30;
	console.log(a + b + c); // 60
}

// Global Context's Lexical Environment
globalEnvironment = {
	environmentRecord: {
		a: 10,
		b: 20,
	},
	outer: null, // 부모 Environment가 없다는 뜻.
};

// foo Context's Lexical Environment
fooEnvironment = {
	environmentRecord: {
		c: 30,
	},
	outer: globalEnvironment,
};
