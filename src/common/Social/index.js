// Utils
import { CONFIG } from '/src/utils.js'

const Social = () => {
	const { social } = CONFIG

	return /*html*/ `
            <div class="social_container">
                ${Object.entries(social)
					.map(
						([key, value]) =>
							/*html*/ `<action-icon icon="logo-${key}" url="${value}"></action-icon>`
					)
					.join('')}
            </div>                
	`
}

export default Social
