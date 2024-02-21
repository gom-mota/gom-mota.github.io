import { getRepositoriesList, registerNavLinks } from './functions.js'

const Home = async () => {
	const repositoriesList = await getRepositoriesList()

	return {
		title: 'Home',
		description: 'This is the Home page',
		render: () => {
			return /*html*/ `
				<h2>Home Page</h2>

				<ul>
					${repositoriesList
						.map(
							({ name }) => /*html*/ `
								<li>
									<a id="repo-${name}" href="/repo/${name}">${name}</a>
								</li>
							`
						)
						.join('')}
				</ul>
        	`
		},
		after_render: () => registerNavLinks(repositoriesList),
	}
}

export default Home
