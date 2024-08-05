import { conditionalRender } from '/src/functions.js'
import { CONFIG } from '/src/utils.js'

export const renderExperience = () =>
	CONFIG.about.work
		.map(
			(
				{ company, position, period, description, list },
				index
			) => /*html*/ ` 
		<div class="tab">
					<input type="checkbox" name="experience" id="experience-${index}" ${
				index === 0 ? 'checked' : ''
			} />
					<div class="tab__label">
						<label for="experience-${index}">
							<div>${company}</div>

							<div class="resume">
								<div class="position">
									${position}
								</div>

								<div class="period">
									${period}
								</div>
							</div>
						</label>
					</div>
					<div class="tab__container">
						<div class="tab__content">
							<div class="resume_open">
								<p>${position}</p>
								<p class="period">${period}</p>
							</div>
							${conditionalRender(description, /*html*/ `<p>${description}</p>`)}

							${conditionalRender(
								list && list.length > 0,
								/*html*/ `<ul>${list
									.map((item) => /*html*/ `<li>${item}</li>`)
									.join('')}</ul>`
							)}
						</div>
					</div>
				</div>
		`
		)
		.join('')

export const renderDescription = () =>
	CONFIG.about.description
		.map(
			(text) => /*html*/ `
<p>${text}</p>
`
		)
		.join('')
