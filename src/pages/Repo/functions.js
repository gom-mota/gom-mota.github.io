import { GITHUB_PROFILE } from '/src/utils.js'

export const getRepositoryReadmeContent = async (repository) => {
	const url = `https://api.github.com/repos/${GITHUB_PROFILE}/${repository}/contents/POST.md`

	const options = {
		headers: {
			'X-GitHub-Api-Version': '2022-11-28',
			Accept: 'application/vnd.github.html',
		},
	}

	try {
		const response = await fetch(url, options)

		if (response.ok) return response.text()

		return 'Repository not found'
	} catch (error) {
		throw new Error(error)
	}
}
