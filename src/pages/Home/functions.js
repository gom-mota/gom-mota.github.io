import { GITHUB_PROFILE } from '/src/utils.js'
import { navigateToRoute } from '/src/functions.js'
import { conditionalRender } from '/src/functions.js'

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

export const registerRepoClick = (repositoriesList) => {
	repositoriesList.forEach(({ name }) => {
		const linkElement = document.querySelector(`#${name}`)

		const route = `/repo/${name}`

		linkElement &&
			linkElement.addEventListener('click', (event) => {
				event.preventDefault()
				navigateToRoute(route)
			})
	})
}

export const renderRepositoriesList = (repositoriesList) =>
	repositoriesList
		.map(
			({
				name,
				description,
				stargazers_count,
				language,
				forks_count,
			}) => /*html*/ `
				<div class="repo_content" id="${name}">
						<div class="repo_info">
								<span class="repo_name">${name}</span>
								<span class="repo_description">${description}</span>
						</div>

						<div class="repo_more">
							${conditionalRender(
								forks_count,
								/*html*/ `
									<div class="count_badge">
										<ion-icon name="git-network-outline"></ion-icon>
										<span>${forks_count}</span>
									</div>
								`
							)}

							${conditionalRender(
								stargazers_count,
								/*html*/ `
									<div class="count_badge">
										<ion-icon name="star-outline"></ion-icon>
										<span>${stargazers_count}</span>
									</div>
								`
							)}

							${conditionalRender(
								language,
								/*html*/ `
									<div class="language_badge">
										<span>${language}</span>
									</div>
								`
							)}

							<div class="repo_action">	
								<span>view post</span>	
								<ion-icon name="open-outline"></ion-icon>					
							</div>
						</div>
				</div>
				`
		)
		.join('')
