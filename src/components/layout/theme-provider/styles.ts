import { stitches } from '@/styles'

const globalStyles = stitches.globalCss({
	'@import': 'url("https://fonts.googleapis.com/css2?family=Inter:wght@200;400;700&display=swap")',

	'*': {
		padding: 0,
		margin: 0,
		boxSizing: 'border-box',

		fontFamily: 'Inter, sans-serif, Arial, -apple-system, sans-serif',
		color: '$text',
	}
})

export { globalStyles }