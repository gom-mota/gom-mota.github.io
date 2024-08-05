import { getRepositoriesList, renderRepositoriesList } from './functions.js'
import { CONFIG } from '/src/utils.js'

const Highlights = async () => {
	const repositoriesListData = await getRepositoriesList()

	return {
		title: 'Highlights',
		description: 'This is the Highlights page',
		render: () => {
			return /*html*/ `
			<div class='highlights_header_container'>
			<h1>Destaques</h1>

			<div class="button-dropdown">
				<button class='action_button'>
					<ion-icon name='search'></ion-icon>
					Explorar
				</button>

				<ul class="button-dropdown-menu">
					${CONFIG.highlights.explore
						.map(
							({ text, icon, url }) => /*html*/ `
						<li>
						<a href=${url} target="_blank">
							<ion-icon name=${icon}></ion-icon>
							${text}
						</a>
					</li>
						`
						)
						.join('')}
				
				</ul>
			</div>

			</div>
			
			
			</div>

			${renderRepositoriesList(repositoriesListData)}
        `
		},
		after_render: () => null,
	}
}

export default Highlights
