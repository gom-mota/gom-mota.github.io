const About = () => ({
	title: 'About',
	description: 'This is the About page',
	render: () => {
		return /*html*/ `
			<h2>About Page</h2>
        `
	},
	after_render: () => null,
})

export default About
