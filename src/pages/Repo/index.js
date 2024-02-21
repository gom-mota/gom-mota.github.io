import { getRepositoryReadmeContent } from './functions.js'

const Repo = (params) => {
	const repoName = params.id

	return {
		title: `${repoName} - Repository`,
		description: `This is the ${repoName} repository page`,
		render: async () => {
			const repositoryReadmeContent = await getRepositoryReadmeContent(
				repoName
			)

			return /*html*/ `
				<h2>${repoName}</h2>
				
				<div>${repositoryReadmeContent}</div>
        	`
		},
		after_render: async () => null,
	}
}

export default Repo
