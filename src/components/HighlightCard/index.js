// Functions
import { conditionalRender } from '/src/functions.js'

class HighlightCard extends HTMLElement {
	connectedCallback() {
		const title = this.getAttribute('title')
		const url = this.getAttribute('url')
		const description = this.getAttribute('description')
		const icon = this.getAttribute('icon')
		const forks = this.getAttribute('forks')
		const stars = this.getAttribute('stars')
		const language = this.getAttribute('language')

		this.innerHTML = /*html*/ `
        <style>
            @import url('/src/components/HighlightCard/styles.css');
        </style>

		<div class="highlight_card_container">
			<a href="${url}" target="_blank">
				<div class="highlight_icon_container">
					<ion-icon name="${icon}" />
				</div>

				<div class="highlight_title_container">
					<h4>${title}</h4>
				</div>

				${conditionalRender(
					language,
					/*html*/ `
						<div class="highlight_badge_container">
							<info-badge content="${language}"></info-badge>
						</div>
					`
				)}

				${conditionalRender(
					description !== 'null',
					/*html*/ `
						<div class="highlight_description_container">
							<p>${description}</p>
						</div>
					`
				)}

				<div class="highlight_count_container">
					${conditionalRender(
						Number(forks),
						/*html*/ `
							<div>
								<ion-icon name="git-network-outline"></ion-icon>
								<span>${forks}</span>
							</div>
						`
					)}

					${conditionalRender(
						Number(stars),
						/*html*/ `
							<div>
								<ion-icon name="star-outline"></ion-icon>
								<span>${stars}</span>
							</div>
						`
					)}
				</div>
			</a>
		</div>
      `
	}
}

customElements.define('highlight-card', HighlightCard)
