// Functions
import { conditionalRender } from '/src/functions.js'

class ActionButton extends HTMLElement {
	connectedCallback() {
		const icon = this.getAttribute('icon')
		const url = this.getAttribute('url')
		const label = this.getAttribute('label')
		const options = this.getAttribute('options')

		const optionsArr = JSON.parse(options)

		const buttonContent = `
         ${conditionalRender(
				icon,
				/*html*/ `<ion-icon name="${icon}"></ion-icon>`
			)}
                ${conditionalRender(label, /*html*/ `<span>${label}</span>`)}
                `

		const renderButtonType = url
			? `
			<a class="action_button_container ${
				!label ? 'icon_only' : ''
			}" href="${url}" target="_blank">
				${buttonContent}
			</a>`
			: `<div class="button-dropdown">
			<button class="action_button_container ${!label ? 'icon_only' : ''}">
				${buttonContent}

               
			</button>
             ${conditionalRender(
					options && options.length > 0,
					/*html*/ `
                    <ul class="button-dropdown-menu">
					${
						optionsArr &&
						optionsArr.length > 0 &&
						optionsArr
							.map(
								({ text, icon, url }) => /*html*/ `
						<li>
						<a href=${url} target="_blank">
							<ion-icon name=${icon}></ion-icon>
							${text}
						</a>
					</li>
						`
							)
							.join('')
					}
				
				</ul>
                `
				)}
            </div>`

		this.innerHTML = /*html*/ `
        <style>
            @import url('/src/components/ActionButton/styles.css');
        </style>

        ${renderButtonType}
      `
	}
}

customElements.define('action-button', ActionButton)
