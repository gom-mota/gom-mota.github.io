import { ROUTES } from '/src/utils.js'
import { registerNavLinks } from './functions.js'

const Navbar = () => {
	const navElement = null || document.querySelector('#nav')

	navElement.innerHTML = `
		<ul>
			${Object.entries(ROUTES)
				.filter(([_, { nav }]) => nav === true)
				.map(
					([route, { name, label }]) => /*html*/ `
						<li>
							<a id="nav-${name}" href=${route}>${label}</a>
						</li>
					`
				)
				.join('')}
		</ul>
	`

	registerNavLinks(ROUTES)
}

export default Navbar
