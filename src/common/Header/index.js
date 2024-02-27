import { ROUTES } from '/src/utils.js'
import { registerNavLinks } from './functions.js'
import Navbar from './items/Navbar/index.js'

const Header = () => {
	const headerElement = null || document.querySelector('#header')

	headerElement.innerHTML = /*html*/ `
        ${Navbar()}
	`

	registerNavLinks(ROUTES)
}

export default Header
