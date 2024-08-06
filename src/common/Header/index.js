// Functions
import { registerNavLinks } from './functions.js'

// Utils
import { ROUTES } from '/src/utils.js'

const Header = () => {
	const headerElement = null || document.querySelector('#header')

	headerElement.innerHTML = /*html*/ `
		<div class="header_container">
		
			<div class="header_logo_container">
				<span>> gom</span> mota_
			</div>

			<nav>
				<ul>
					${Object.entries(ROUTES)
						.filter(([_, { nav }]) => nav === true)
						.map(
							([route, { name, label }]) => /*html*/ `
								<li>
									<a id="nav-link-${name}" href=${route}>
										${label}
									</a>
								</li>
							`
						)
						.join('')}
				</ul>
			</nav>
		</div>
	`

	registerNavLinks(ROUTES)
}

export default Header
