import { CONFIG } from '/src/utils.js'

export const renderSocialAccountsList = () =>
	Object.entries(CONFIG.social)
		.map(
			([key, value]) =>
				/*html*/ `<action-icon icon="logo-${key}" url="${value}"></action-icon>`
		)
		.join('')
