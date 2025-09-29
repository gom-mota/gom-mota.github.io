// Utils
import { CONFIG } from '/src/utils.js'

export const renderExperience = () =>
	CONFIG.about.work
		.map(
			(
				{ company, position, period, description, list },
				index
			) => /*html*/ ` 
				<gom-accordion title='${company}' ${index === 0 ? 'is-open' : ''}>
					<div slot='description'>
						<span>${position}</span>
						<span style="color:#A9A9A9;font-size:14px;">${period}</span>
					</div>

					<div>${description}</div>

					<div>
						${
							list && list.length > 0
								? /*html*/ `
								<ul>
									${list.map((item) => /*html*/ `<li>${item}</li>`).join('')}
								</ul>`
								: ''
						}
					</div>
				</gom-accordion>
		`
		)
		.join('')

export const renderDescription = () =>
	CONFIG.about.description.map((text) => /*html*/ `<p>${text}</p>`).join('')
