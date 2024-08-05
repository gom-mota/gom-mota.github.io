import { ROUTES } from './utils.js'

const content = null || document.getElementById('content')

const handleGithubPages404File = () => {
	const search = window.location.search

	if (search && search[1] === '/') {
		const pathnameAndSearch = search.substring(1)
		const hash = window.location.hash

		window.history.replaceState(null, null, `${pathnameAndSearch}${hash}`)
	}
}

const renderPageContent = async (pageName, params) => {
	const { default: Page } = await import(`/src/pages/${pageName}/index.js`)

	const page = await Page(params)

	window.scrollTo({ top: 0, behavior: 'instant' })

	content.innerHTML = await page.render()
	await page.after_render()

	document
		.querySelector('meta[name="description"]')
		.setAttribute('content', page.description)

	document.title = `${page.title} | gommota`
}

const handleMatchRoute = (pathname) =>
	Object.keys(ROUTES).find((route) => {
		const pattern = `^${route.replace(/:\w+/g, '([^/]+)')}$`
		const regex = new RegExp(pattern)

		return regex.test(pathname)
	})

const getRouteParams = (pathname, route) => {
	const pattern = `^${route.replace(/:\w+/g, '([^/]+)')}$`
	const matchRoute = pathname.match(pattern)

	const params = {}

	if (matchRoute) {
		const paramKeys = route.match(/:\w+/g) || []

		paramKeys.forEach(
			(param, index) => (params[param.slice(1)] = matchRoute[index + 1])
		)
	}

	return params
}

export const handleRouteChange = () => {
	const pathname = window.location.pathname
	const currentRoute = handleMatchRoute(pathname)

	if (currentRoute) {
		const params = getRouteParams(pathname, currentRoute)

		renderPageContent(ROUTES[currentRoute].name, params)
	} else renderPageContent('NotFound')
}

const mount = () => {
	handleGithubPages404File()
	handleRouteChange()
	window.addEventListener('popstate', handleRouteChange)
}

mount()
