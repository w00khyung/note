// executor는 new Promise에 의해 자동으로, 즉각적으로 호출됩니다.
// executor는 resolve와 reject를 인자로 받으며, 둘 중 하나는 반드시 호출해야 합니다.
const loginUser = new Promise((resolve, reject) => {
	console.log('something works..');
	ajaxRequest('url', function (data) {
		if (data) {
			resolve(data);
		} else {
			reject(new Error('something went wrong..'));
		}
	});
});

loginUser
	.then(function (loginInfo) {
		// 요청이 성공했을 경우, 반환된 data를 이용하여 추가적인 작업 수행
		somethingFn(loginInfo);
	})
	.then(function (loginInfo) {
		// 요청이 성공했을 경우, 반환된 data를 이용하여 추가적인 작업 수행
		somethingFn(data);
	})
	.then(function (data) {
		// 요청이 성공했을 경우, 반환된 data를 이용하여 추가적인 작업 수행
		somethingFn(data);
	})
	.then(function (data) {
		// 요청이 성공했을 경우, 반환된 data를 이용하여 추가적인 작업 수행
		somethingFn(data);
	})
	.catch(function (error) {
		// 요청이 실패했을 경우, 예외 처리
		handleError(error);
	})
	.finally(function () {
		// 성공, 실패 여부와 상관없이 항상 실행
		console.log('finally');
	});
