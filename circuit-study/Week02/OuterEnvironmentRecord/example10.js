let wifi = false;

function goTo2F() {
	console.log(wifi);
	let wifi = true;
	console.log(wifi);
	function goTo3F() {
		console.log(wifi); // true
	}
	goTo3F();
}

goTo2F();
