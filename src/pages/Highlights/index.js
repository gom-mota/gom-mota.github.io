// Functions
import { getRepositoriesList, renderRepositoriesList } from './functions.js'

// Utils
import { CONFIG } from '/src/utils.js'

const Highlights = async () => {
	const repositoriesListData = await getRepositoriesList()

	return {
		title: 'Destaques',
		description: 'Página destaques',
		render: () => {
			return /*html*/ `
			<div class="section_container">
				<div class='highlights_header_container'>
					<h1 class="section_title">Destaques</h1>

					<action-button 
						icon="search"
						label="Explorar"
						options='${JSON.stringify(CONFIG.highlights.explore)}'>
					</action-button>

				</div>
			
				<div class="highlights_container">
					${renderRepositoriesList(repositoriesListData)}
				</div>
			</div>
        `
		},
		after_render: () => null,
	}
}

export default Highlights
