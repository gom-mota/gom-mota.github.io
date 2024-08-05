import { CONFIG } from '/src/utils.js'
import { navigateToRoute } from '/src/functions.js'

export const registerLinks = () => {
	const linkHighlightsElement = document.querySelector(
		'#link-highlights-page'
	)

	linkHighlightsElement &&
		linkHighlightsElement.addEventListener('click', (event) => {
			event.preventDefault()
			navigateToRoute(linkHighlightsElement.getAttribute('href'))
		})

	const linkAboutElement = document.querySelector('#link-about-page')

	linkAboutElement &&
		linkAboutElement.addEventListener('click', (event) => {
			event.preventDefault()
			navigateToRoute(linkAboutElement.getAttribute('href'))
		})
}

export const renderSocialAccountsList = () =>
	Object.entries(CONFIG.social)
		.map(
			([key, value]) =>
				/*html*/ `<action-icon icon="logo-${key}" url="${value}"></action-icon>`
		)
		.join('')

export const getRepositoriesList = async () => {
	const url = `https://api.github.com/users/${CONFIG.github.username}/repos`

	try {
		const response = await fetch(url)

		if (response.ok) return response.json().then((data) => data)

		return []
	} catch (error) {
		throw new Error(error)
	}
}

export const renderRepositoriesList = (repositoriesList) =>
	repositoriesList
		.filter(({ name }) => CONFIG.github.repos.home.includes(name))
		.sort(
			(a, b) =>
				CONFIG.github.repos.home.indexOf(a.name) -
				CONFIG.github.repos.home.indexOf(b.name)
		)
		.map(
			({
				name,
				description,
				stargazers_count,
				language,
				forks_count,
				html_url,
			}) => /*html*/ `
				<highlight-card
					type="repo"
					icon="logo-github"
					title="${name}"
					description="${description}"
					stars="${stargazers_count}"
					forks="${forks_count}"
					language="${language}"
					url="${html_url}" >
				</highlight-card>
				`
		)
		.join('')
