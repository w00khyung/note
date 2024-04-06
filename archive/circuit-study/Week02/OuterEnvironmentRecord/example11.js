function outerFunc() {
	var x = 10;
	var innerFunc = function () {
		console.log(x);
	};
	innerFunc();
}

// closure

function goTo2F() {
	let wifi = true;
	function goTo3F() {
		console.log(wifi);
	}
	goTo3F();
}

outerFunc();
