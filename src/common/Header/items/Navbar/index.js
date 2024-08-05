import { ROUTES } from '/src/utils.js'

const Navbar = () => /*html*/ `
				<nav class="header_nav">
					<ul>
						${Object.entries(ROUTES)
							.filter(([_, { nav }]) => nav === true)
							.map(
								([route, { name, label }]) => /*html*/ `
									<li class="nav-item">
										<a id="nav-link-${name}" href=${route}>${label}</a>
									</li>
								`
							)
							.join('')}
					</ul>
				</nav>
	`

export default Navbar
