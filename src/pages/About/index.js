import Skills from '/src/common/Skills/index.js'
import { renderExperience, renderDescription } from './functions.js'

const About = () => ({
	title: 'About',
	description: 'This is the About page',
	render: () => {
		return /*html*/ `
		<div class='about_header_container'>
			<h1>Sobre mim</h1>
			<button class='action_button'>
				<ion-icon name='arrow-down'></ion-icon>
				Baixar CV
			</button>
		</div>
			<div class='about_description_container'>
				${renderDescription()}				
			</div>
			<div class='about_skills_container'>
				${Skills()}
			</div>

			<h1>Experiencia</h1>

			<div class='about_experience_container'>
				${renderExperience()}
			</div>
        `
	},
	after_render: () => null,
})

export default About
