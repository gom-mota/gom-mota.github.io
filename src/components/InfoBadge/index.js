import { conditionalRender } from '/src/functions.js'

class InfoBadge extends HTMLElement {
	connectedCallback() {
		const content = this.getAttribute('content')
		const icon = this.getAttribute('icon')
		const size = this.getAttribute('size')
		const color = this.getAttribute('color')

		this.innerHTML = /*html*/ `
        <style>
            @import url('/src/components/InfoBadge/style.css');           
        </style>
        
        <div class="badge_container ${size === 'large' ? 'large' : ''}">
            ${conditionalRender(
				icon,
				/*html*/ `<ion-icon name="${icon}" size="small" style="color: ${color}"></ion-icon>`
			)}

            <span>${content}</span>
        </div>
      `
	}
}

customElements.define('info-badge', InfoBadge)
