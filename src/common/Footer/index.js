import { renderSocialAccountsList } from './functions.js'

const Footer = () => {
	const footerElement = null || document.querySelector('#footer')

	footerElement.innerHTML = /*html*/ `
        <div class="footer">
            <p>&copy; gommota</p> <div>${renderSocialAccountsList()}</div>
        </div>

	`
}

export default Footer
