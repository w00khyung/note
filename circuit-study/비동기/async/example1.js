async function main() {
	const response = await ajaxRequest('url');
	render(response.data);
}
