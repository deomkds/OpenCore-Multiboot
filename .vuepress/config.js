const {
    description
} = require('../package')

module.exports = {
    title: 'Multiboot com o OpenCore',
    head: [
        ['meta', {
            name: 'theme-color',
            content: '#3eaf7c'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-capable',
            content: 'yes'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
        }],
        ["link", {
            rel: "'stylesheet",
            href: "/styles/website.css"
        },]
    ],
    base: '/OpenCore-Multiboot/',

	markdown: {
		extendMarkdown: md => {
			md.use(require('markdown-it-multimd-table'), {
				rowspan: true,
			});
		}
	},
    theme: 'vuepress-theme-succinct',
    globalUIComponents: [
        'ThemeManager'
    ],

    themeConfig: {
        lastUpdated: true,
        repo: 'https://github.com/deomkds/OpenCore-Multiboot',
		editLinks: true,
		editLinkText: 'Ajude-nos a melhorar esta página!',
        logo: 'homepage.png',
        nav: [{
            text: 'Outros Guias',
            ariaLabel: 'Language Menu',
            items: [{
                text: 'Site Original (em inglês)',
                link: 'https://dortania.github.io/'
            },
            {
                text: 'Primeiros Passos com a ACPI',
                link: 'https://deomkds.github.io/Getting-Started-With-ACPI/'
            },
            {
                text: 'Guia de Instalação do OpenCore',
                link: 'https://deomkds.github.io/OpenCore-Install-Guide/'
            },
            {
                text: 'Pós-instalação do OpenCore',
                link: 'https://deomkds.github.io/OpenCore-Post-Install/'
            },
            {
                text: 'Guia de Compra de GPUs',
                link: 'https://deomkds.github.io/GPU-Buyers-Guide/'
            },
            {
                text: 'Guia de Compra de Wi-Fi',
                link: 'https://deomkds.github.io/Wireless-Buyers-Guide/'
            },
            {
                text: 'Guia de Compra Anti-Hackintosh',
                link: 'https://deomkds.github.io/Anti-Hackintosh-Buyers-Guide/'
            },
            ]
        },
        ],
        sidebar: [{
	            title: 'Multiboot com o OpenCore',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                    '',
                ]
	        },
		{
            title: 'Para usuários experientes que já lidaram com multiboot',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                ['QUICK', 'Rápido! Eu sei o que fazer, só me diga COMO!'],
            ]

        },
		{
            title: 'Introdução ao boot múltiplo',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                ['/Intro/Def', 'O que é isso?'],
				['/Intro/Booting-part', 'UEFI? Legado? CSM? O quê?'],
				['/Intro/disc', 'Aviso'],
            ]

        },
		{
            title: 'Situações de Multiboot',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                ['/empty/', 'Situações de Multiboot'],
				{
            	collapsable: false,
            	sidebarDepth: 1,
	            children: [
	                ['/empty/samedisk', 'Uma Unidade com Múltiplos Sistemas'],
					['/empty/diffdisk', 'Múltiplas Unidades com Múltiplos Sistemas'],
	            ]
				},
				['/exist/', 'Unidade Existente Cheia'],
				{
            	collapsable: false,
            	sidebarDepth: 1,
	            children: [
	                ['/exist/data', 'Em uma unidade cheia que contém dados'],
					['/exist/os', 'Em uma unidade cheia que contém sistemas (Windows/Linux)'],
	            ]
				},
            ]

        },
		{
            title: 'Configuração do OpenCore',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                ['/oc/win', 'Para Iniciar o Windows'],
				        ['/oc/linux', 'Para Iniciar o Linux'],
				        ['/oc/duet', 'Instalando o OpenCore em um PC antigo'],
				        ['https://deomkds.github.io/OpenCore-Post-Install/multiboot/bootstrap.html', 'Usando o LauncherOption'],
				        ['https://deomkds.github.io/OpenCore-Post-Install/multiboot/bootcamp.html', 'Instalação do BootCamp'],
            ]

        },
    	],
    },
    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: [
        '@vuepress/plugin-back-to-top',
        'vuepress-plugin-smooth-scroll',
        ['vuepress-plugin-medium-zoom',
            {
                selector: "img",
                options: {
                    background: 'var(--bodyBgColor)'
                }
            }],
    ]
}
