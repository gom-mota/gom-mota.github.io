import { CONFIG } from '/src/utils.js'

const Skills = () => {
	const { skills } = CONFIG.about

	return /*html*/ `
				<div class="skills_container">
                    <h1>Conhecimentos</h1>

                    <div class="skills_badges_container">
                        ${skills
							.map(
								({ name, icon, color }) => /*html*/ `
                                        <info-badge content="${name}" icon="${icon}" size="large" color="${color}"></info-badge>
                                    `
							)
							.join('')}                       
                    </div>
                </div>
                
	`
}

export default Skills
