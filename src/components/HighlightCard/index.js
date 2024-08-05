import { conditionalRender } from '/src/functions.js'

class HighlightCard extends HTMLElement {
	connectedCallback() {
		const type = this.getAttribute('type')
		const title = this.getAttribute('title')
		const url = this.getAttribute('url')
		const description = this.getAttribute('description')
		const icon = this.getAttribute('icon')
		const forks = this.getAttribute('forks')
		const stars = this.getAttribute('stars')
		const language = this.getAttribute('language')

		this.innerHTML = /*html*/ `
        <style>
            @import url('/src/components/HighlightCard/style.css');
        </style>

        <a class="repo_content_link" href="${url}" target="_blank">
			<div class="repo_content" id="${title}">
				
						<div class="repo_info_container">
									<div class="repo_img">
										<ion-icon name="${icon}" />
									</div>
									
									<div class="repo_info_content">
										<span class="repo_name">${title}</span>
										<span class="repo_description">${description}</span>
									</div>
								
							</div>

							${conditionalRender(
								type === 'repo',
								/*html*/ `
								<div class="repo_more">
								${conditionalRender(
									Number(forks),
									/*html*/ `
										<div class="count_badge">
											<ion-icon name="git-network-outline"></ion-icon>
											<span>${forks}</span>
										</div>
									`
								)}

								${conditionalRender(
									Number(stars),
									/*html*/ `
										<div class="count_badge">
											<ion-icon name="star-outline"></ion-icon>
											<span>${stars}</span>
										</div>
									`
								)}

								${conditionalRender(
									language,
									/*html*/ `
										<info-badge content="${language}"></info-badge>
									`
								)}							
							</div>
								`
							)}

			</div>
		</a>	
      `
	}
}

customElements.define('highlight-card', HighlightCard)
