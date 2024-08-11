export const CONFIG = {
	profile: {
		name: 'Gabriel Mota',
		work: 'Desenvolvedor Frontend &nbsp;|&nbsp; <a href="https://www.seidor.com/" target="_blank">Seidor</a>',
		bio: 'Atualmente trabalhando em soluções cloud utilizando o framework React',
		avatar: 'https://avatars.githubusercontent.com/u/64375830?v=4',
	},
	social: {
		linkedin: 'https://www.linkedin.com/in/gommota/',
		github: 'https://github.com/gom-mota',
		codepen: 'https://codepen.io/gom-mota/',
	},
	github: {
		username: 'gom-mota',
		repos: {
			home: ['portfolio-dev', 'beework'],
			highlights: ['portfolio-dev', 'beework', 'gom-mota.github.io'],
		},
	},
	about: {
		description: [
			`Formado em Sistemas de Informação, atualmente sou desenvolvedor frontend na empresa
			<a href="https://www.seidor.com/" target="_blank">Seidor</a>, e utilizo o framework React nos projetos em que atuo.`,
			`Tenho experiencia em criar soluções web dinâmicas e responsivas com foco na usabilidade do usuário. Busco
			sempre adotar as melhores práticas de acordo com o contexto da aplicação para garantir que o código seja
			escalável, testável e de alta qualidade.`,
			`Além das ferramentas que utilizo diariamente no trabalho, tenho interesse em Linux e no mundo Open Source
			em geral, e estou constantemente explorando projetos e ferramentas que possam inspirar novas ideias.`,
		],
		skills: [
			{ name: 'git', icon: 'git-merge', color: '#E84E31' },
			{ name: 'javascript', icon: 'logo-javascript', color: '#ECDA1D' },
			{ name: 'html5', icon: 'logo-html5', color: '#DD4B25' },
			{ name: 'css', icon: 'logo-css3', color: '#0185C4' },
			{ name: 'figma', icon: 'logo-figma', color: '#9D56F7' },
			{ name: 'nodejs', icon: 'logo-nodejs', color: '#7EC729' },
			{ name: 'react/native', icon: 'logo-react', color: '#5ED3F3' },
			{ name: 'redux', icon: '' },
			{ name: 'api rest', icon: '' },
			{ name: 'mysql', icon: '' },
			{ name: 'mongodb', icon: '' },
			{ name: 'php', icon: '' },
			{ name: 'linux', icon: '' },
		],
		work: [
			{
				company: 'Seidor',
				position: 'Desenvolvedor Frontend',
				period: '03/2021 ~ presente',
				description:
					'Atuando no desenvolvimento de aplicações em React.',
				list: [],
			},
			{
				company: 'MMNET',
				position: 'Técnico em Microinformática',
				period: '04/2018 ~ 03/2021',
				description:
					'Prestação de serviços on-site para a empresa RHI Magnesita.',
				list: [
					'Suporte ao usuário através de fila de atendimento controlado por SLA.',
					'Instalar/configurar os softwares utilizados pela empresa.',
					'Realizar a montagem e manutenção de computadores, notebooks e thinclients.',
					'Gestão/controle de equipamentos e usuários através do Active Directory e ferramentas internas.',
					'Controle de equipamentos/softwares compartilhados via servidor.',
					'Manutenção da infraestrutura de cabeamento de rede/telefonia.',
					`Realizar backup de sistemas legados e supervisórios que controlam os equipamentos de automação
					industrial da empresa.`,
				],
			},
			{
				company: 'MMNET',
				position: 'Estágio em Suporte Técnico',
				period: '03/2017 ~ 03/2018',
				description:
					'Prestação de serviços on-site para a empresa RHI Magnesita.',
				list: [
					'Suporte ao usuário através de fila de atendimento controlado por SLA.',
					'Instalar/configurar os softwares utilizados pela empresa.',
					'Realizar a montagem e manutenção de computadores, notebooks e thinclients.',
				],
			},
			{
				company: 'Vigilância Sanitária (VISA MG)',
				position: 'Estágio em Desenvolvimento Web',
				period: '01/2017 ~ 03/2017',
				description: `Desenvolvimento de site para cadastro de equipamentos de radiografia capaz de gerar relatórios de
					inspeções realizadas.`,
				list: [],
			},
		],
	},
	highlights: {
		explore: [
			{
				text: 'Repositórios Github',
				icon: 'logo-github',
				url: `https://github.com/gom-mota?tab=repositories`,
			},
			{
				text: 'Coleções Codepen',
				icon: 'logo-codepen',
				url: `https://codepen.io/gom-mota/collections/`,
			},
		],
	},
}

export const ROUTES = {
	'/': { name: 'Home', label: 'Início', nav: true },
	'/about': { name: 'About', label: 'Sobre', nav: true },
	'/highlights': { name: 'Highlights', label: 'Destaques', nav: true },
}
