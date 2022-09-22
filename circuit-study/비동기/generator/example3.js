// async function main() {
// 	try {
// 		// 외부 라이브러리
// 		const response = await ajaxRequest(() => {
// 			throw new Error('Error');
// 		});
// 		render(response.data);

// 		// Promise 객체
// 	} catch (error) {
// 		console.error(error); // 에러 발생
// 	}
// }


// generator + Promise
async function foo() {
	// Promise -> pending(대기) -> 성공(resolve) / 실패(reject)
	const a = await new Promise((resolve) => setTimeout(() => resolve(1), 3000));
	const b = await new Promise((resolve) => setTimeout(() => resolve(2), 2000));
	const c = await new Promise((resolve) => setTimeout(() => resolve(3), 1000));

	console.log(a, b, c); // 1 2 3
}

foo();

async function foo() {
	const res = Promise.all([
		new Promise((resolve) => setTimeout(() => resolve(1), 3000)),
		new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
		new Promise((resolve) => setTimeout(() => resolve(3), 1000)),
	]);

	// 3초
	console.log(res); // 1 2 3
}

foo();
