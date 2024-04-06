function printA(callback) {
	console.log('A');
	setTimeout(() => callback(), 1000);
	뭘 실행한다();
	console.log("C");
}

function 뭘 실행한다() {
	console.log("B")
}

function printB() {
	api('');
	console.log('B');
	api('');
}

function printC() {
	api('');
	console.log('C');
}

printA(printB);
printC();

// A -> B -> C
// A -> C -> B ✅
