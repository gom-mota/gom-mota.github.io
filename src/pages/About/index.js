// Functions
import { renderExperience, renderDescription } from './functions.js'

// Items
import Skills from '/src/common/Skills/index.js'

const About = () => ({
	title: 'Sobre',
	description: 'Página sobre',
	render: () => {
		return /*html*/ `
			<div class="section_container section_space">
				<div class='about_header_container'>
					<h1 class="section_title">Sobre</h1>

					<!-- <action-button 
						icon="arrow-down"
						label="Baixar CV"
						url="#">
					</action-button> -->
				</div>

				<div class='about_description_container'>
					${renderDescription()}				
				</div>
			</div>

			<div class="section_space">
					${Skills()}
			</div>

			<div class='section_container'>
				<h1 class="section_title">Experiência</h1>

				<div class="experience_container">
					${renderExperience()}
				</div>
			</div>
        `
	},
	after_render: () => null,
})

export default About
