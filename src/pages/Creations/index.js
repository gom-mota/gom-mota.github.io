// Functions
import { getRepositoriesList, renderRepositoriesList } from './functions.js'

// Utils
import { CONFIG } from '/src/utils.js'

const Creations = async () => {
	const repositoriesListData = await getRepositoriesList()

	return {
		title: 'Criações',
		description: 'Página de criações',
		render: () => {
			return /*html*/ `
			<div class="section_container">
				<div class='highlights_header_container'>
					<h1 class="section_title">Criações</h1>

					<action-button 
						icon="search"
						label="Explorar"
						options='${JSON.stringify(CONFIG.creations.explore)}'>
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

export default Creations
