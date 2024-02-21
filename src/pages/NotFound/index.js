const NotFound = () => ({
	title: 'Not Found',
	description: 'Not found page',
	render: () => {
		return /*html*/ `
			<h2>NotFound Page</h2>
        `
	},
	after_render: () => null,
})

export default NotFound
