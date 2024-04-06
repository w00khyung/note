// 제어권 역전
function userTasks() {
	setUser();
	loginUser(refreshToken);
}

function loginUser(callbackFn) {
	// ajaxRequest -> 비동기 요청을 수행하는 외부 라이브러리의 메서드
	try {
		ajaxRequest('url', function (data, error) {
			if (error) {
				handleError(error);
			} else {
				callbackFn(data);
			}
		});
	} catch (error) {
		console.log(error);
	}
}

function refreshToken(data) {
	somethingFunc(data);
}

userTasks();

// ======================================

ajaxRequest('url', function (data, error) {
	if (error) {
		handleError(error);
	} else {
		// ...
		ajaxRequest('url', function (data, error) {
			if (error) {
				handleError(error);
			} else {
				// ...
				ajaxRequest('url', function (data, error) {
					if (error) {
						handleError(error);
					} else {
						// ...
					}
				});
			}
		});
	}
});
