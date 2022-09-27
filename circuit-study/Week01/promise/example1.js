doSomething1
	.then((loginInfo) => doSomething2(something1, loginInfo))
	.then((something2, loginInfo) => doSomething3(something2, loginInfo))
	.then((something3, loginInfo) => doSomething4(loginInfo))
	.catch(failureCallback);

// doSomething1
// 	.then(doSomething2)
// 	.then(doSomething3)
// 	.then(doSomething4)
// 	.catch(failureCallback);
