// Functions
import {
	getRepositoriesList,
	renderRepositoriesList,
	registerLinks,
} from './functions.js'

// Items
import Social from '/src/common/Social/index.js'
import Skills from '/src/common/Skills/index.js'

// Utils
import { CONFIG } from '/src/utils.js'

const Home = async () => {
	const repositoriesListData = await getRepositoriesList()

	const render = () => {
		const { name, work, bio, avatar } = CONFIG.profile

		return /*html*/ `
			<div class="profile_container">
                <div class="profile_avatar_container">
					<img src="${avatar}" />
				</div>

                <div class="profile_base_container">
                    <h1>${name}</h1>
                    <p>${work}</p>
                </div>

                <div class="profile_description_container">
                    <p>${bio}</p>
                </div>

                <div class="profile_social_container">
                    ${Social()}
                </div>
            </div>

			<div class="section_space">
				${Skills()}
				
				<a id="link-about-page" class="link_route" href="/about">
					Ver mais sobre <ion-icon name="arrow-forward"></ion-icon>
				</a>
			</div>
				
			<div class="section_container">
				<h1>Destaques fixados</h1>

				${renderRepositoriesList(repositoriesListData)}

				<a id="link-highlights-page" class="link_route" href="/highlights">
					Ver mais destaques <ion-icon name="arrow-forward"></ion-icon>
				</a>
			</div>
		`
	}

	return {
		title: 'Home',
		description: 'This is the Home page',
		render,
		after_render: () => registerLinks(),
	}
}

export default Home
