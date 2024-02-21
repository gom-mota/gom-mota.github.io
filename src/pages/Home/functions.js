import { GITHUB_PROFILE } from '/src/utils.js'
import { navigateToRoute } from '/src/functions.js'

export const getRepositoriesList = async () => {
	const url = `https://api.github.com/users/${GITHUB_PROFILE}/repos`

	try {
		const response = await fetch(url)

		if (response.ok) return response.json().then((data) => data)

		return []
	} catch (error) {
		throw new Error(error)
	}
}

export const registerNavLinks = (repositoriesList) => {
	repositoriesList.forEach(({ name }) => {
		const linkElement = document.querySelector(`#repo-${name}`)

		linkElement &&
			linkElement.addEventListener('click', (event) => {
				event.preventDefault()
				navigateToRoute(linkElement.getAttribute('href'))
			})
	})
}
