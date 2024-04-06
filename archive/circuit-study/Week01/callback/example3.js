// 콜백 함수 예제
function loginUser(callbackFn) {
	loginRequest('url', function (data) {
		callbackFn(data);
	});
}
