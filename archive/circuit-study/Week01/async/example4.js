async function foo() {
	const res = Promise.all([
		new Promise((resolve) => setTimeout(() => resolve(1), 3000)),
		new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
		new Promise((resolve) => setTimeout(() => resolve(3), 1000)),
	]);

	console.log(res); // 1 2 3
}

foo();
