import { ROUTES } from '/src/utils.js'

const Navbar = () => /*html*/ `
				<nav class="nav">
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
				</nav>
	`

export default Navbar
