async function main() {
	try {
		const response = await ajaxRequest('잘못된 URL');
		render(response.data);
	} catch (error) {
		console.error(error); // 에러 발생
	}
}
