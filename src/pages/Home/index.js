import { CONFIG } from '/src/utils.js'
import {
	getRepositoriesList,
	renderRepositoriesList,
	renderSocialAccountsList,
	registerLinks,
} from './functions.js'
import Skills from '/src/common/Skills/index.js'

const Home = async () => {
	const repositoriesListData = await getRepositoriesList()

	const render = () => {
		const { name, work, bio, avatar } = CONFIG.profile

		return /*html*/ `
			 <div class="profile_container">

				<div class="profile_base">
					<h1 class="profile_name">${name}</h1>
					
					<p>${work}</p>

					<p class="description">${bio}</p>
					
					<div class="profile_social">
						${renderSocialAccountsList()}
					</div>
				</div>

				<div class="profile_avatar">
					<img src="${avatar}" />
				</div>

			</div>

			<div class="home_skills_container">
				${Skills()}
				
				<a id="link-about-page" class="link_route" href="/about">
					Ver mais sobre &nbsp;<ion-icon name="arrow-forward"></ion-icon>
				</a>
			</div>

			<h1>Destaques fixados</h1>

			<div class="home_highlights_container">
				${renderRepositoriesList(repositoriesListData)}

				<a id="link-highlights-page" class="link_route" href="/highlights">
					Ver mais destaques &nbsp;<ion-icon name="arrow-forward"></ion-icon>
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
