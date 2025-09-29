// Items
import Social from '/src/common/Social/index.js'

const Footer = () => {
	const footerElement = null || document.querySelector('#footer')

	footerElement.innerHTML = /*html*/ `
        <div class="footer_container">
            <p>&copy; 2024 gommota</p> 
            
            <div>${Social()}</div>
        </div>

	`
}

export default Footer
