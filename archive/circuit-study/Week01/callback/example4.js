// 콜백 지옥
doSomething1(function (something1) {
	// ...
	doSomething2(function (something2) {
		// ...
		doSomething3(function (something3) {
			// Do something with something3...
		}, failureCallback);
	}, failureCallback);
}, failureCallback);
