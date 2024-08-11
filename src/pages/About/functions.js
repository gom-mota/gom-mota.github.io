// Functions
import { conditionalRender } from '/src/functions.js'

// Utils
import { CONFIG } from '/src/utils.js'

export const renderExperience = () =>
	CONFIG.about.work
		.map(
			(
				{ company, position, period, description, list },
				index
			) => /*html*/ ` 
				<div class="experience_card_container">
					<input 
						name="experience"
						id="experience-${index}"
						type="checkbox"
						${index === 0 ? 'checked' : ''}
					/>

					<div class="experience_title_container">
						<label for="experience-${index}">
							<div>${company}</div>

							<div class="experience_main_info">
								<div class="experience_position">
									${position}
								</div>

								<div class="experience_period">
									${period}
								</div>
							</div>
						</label>
					</div>
					
					<div class="experience_description_container">
						<div class="experience_content_container">
							
							<div class="experience_main_info_open">
								<p>${position}</p>
								
								<p class="experience_period">${period}</p>
							</div>

							${conditionalRender(description, /*html*/ `<p>${description}</p>`)}

							${conditionalRender(
								list && list.length > 0,
								/*html*/ `
									<ul>
										${list.map((item) => /*html*/ `<li>${item}</li>`).join('')}
									</ul>`
							)}
						</div>
					</div>
				</div>
		`
		)
		.join('')

export const renderDescription = () =>
	CONFIG.about.description.map((text) => /*html*/ `<p>${text}</p>`).join('')
