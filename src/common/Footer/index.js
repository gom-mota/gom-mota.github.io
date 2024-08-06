// Items
import Social from '/src/common/Social/index.js'

const Footer = () => {
	const footerElement = null || document.querySelector('#footer')

	footerElement.innerHTML = /*html*/ `
        <div class="footer_container">
            <p>&copy; gommota</p> 
            
            <div>${Social()}</div>
        </div>

	`
}

export default Footer
