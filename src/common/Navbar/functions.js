import { navigateToRoute } from '/src/functions.js'

export const registerNavLinks = (routes) => {
	Object.values(routes).forEach(({ name }) => {
		const linkElement = document.querySelector(`#nav-${name}`)

		linkElement &&
			linkElement.addEventListener('click', (event) => {
				event.preventDefault()
				navigateToRoute(linkElement.getAttribute('href'))
			})
	})
}
