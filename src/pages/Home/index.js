import {
	getRepositoriesList,
	registerRepoClick,
	renderRepositoriesList,
} from './functions.js'

const Home = async () => {
	const repositoriesListData = await getRepositoriesList()

	return {
		title: 'Home',
		description: 'This is the Home page',
		render: () => {
			return /*html*/ `
				<h2>Gabriel Mota</h2>

				<div class="repo_list_container">
					${renderRepositoriesList(repositoriesListData)}
				</div>
        	`
		},
		after_render: () => registerRepoClick(repositoriesListData),
	}
}

export default Home
