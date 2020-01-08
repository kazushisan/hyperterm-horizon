'use strict'

const colors = require('./colors')

exports.decorateConfig = config => {
	const selectedTheme = config.horizonTheme === 'bright' ? 'bright' : 'normal'

	const {
		tabColor,
		backgroundColor,
		foregroundColor,
		borderColor,
		cursorColor,
		selectionColor,
		lightBlue,
		lightCyan,
		lightGreen,
		lightMagenta,
		lightRed,
		lightYellow,
		black,
		blue,
		cyan,
		green,
		magenta,
		red,
		yellow,
		white
	} = colors[selectedTheme]

	return {
		...config,
		backgroundColor,
		foregroundColor,
		borderColor,
		cursorColor,
		cursorAccentColor: backgroundColor,
		selectionColor,
		colors: {
			lightBlue,
			lightCyan,
			lightGreen,
			lightMagenta,
			lightRed,
			lightYellow,
			black,
			blue,
			cyan,
			green,
			magenta,
			red,
			yellow,
			white
		},
		css: `
			.hyper_main {
				border: none;
			}
		
			.tabs_title, .tab_tab {
				color: ${foregroundColor};
			}

			.tabs_borderShim {
				display: none;
			}

			.tab_tab {
				border: none;
			}

			.tab_tab.tab_active::before {
				content: '';
				position: absolute;
				bottom: 0;
				left: 0;
				right: 0;
				height: 1px;
				background-color: ${tabColor};
			}

			.tab_text,
			.term_term {
				opacity: 0.6;
			}

			.tab_active .tab_text,
			.term_active .term_term {
				opacity: 1;
			}

			${config.css || ''}
		`
	}
}
