import { CONFIG } from '/src/utils.js'

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
		.filter(({ name }) => CONFIG.github.repos.highlights.includes(name))
		.sort(
			(a, b) =>
				CONFIG.github.repos.highlights.indexOf(a.name) -
				CONFIG.github.repos.highlights.indexOf(b.name)
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
