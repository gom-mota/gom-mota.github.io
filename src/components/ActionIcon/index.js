class ActionIcon extends HTMLElement {
	connectedCallback() {
		const icon = this.getAttribute('icon')
		const url = this.getAttribute('url')

		this.innerHTML = /*html*/ `
        <style>
            @import url('/src/components/ActionIcon/style.css');
        </style>
        
        <div class="action-icon" >
            <a href="${url}" target="_blank">
                <ion-icon name="${icon}"></ion-icon>
            </a>
        </div>
      `
	}
}

customElements.define('action-icon', ActionIcon)
