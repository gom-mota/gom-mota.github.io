import { handleRouteChange } from '/src/router.js'

export const navigateToRoute = (pathname) => {
	window.history.pushState(null, null, pathname)
	handleRouteChange()
}

export const conditionalRender = (show, htmlCode) => (show ? htmlCode : ``)
