/** colors */
import { mainColors } from '../colors/main'
import { auxColors } from '../colors/aux'

/** base */
import { sizes } from '../base/sizes'
import { fontSizes } from '../base/font-sizes'
import { fontWeights } from '../base/font-weights'
import { radius } from '../base/radius'
import { spaces } from '../base/spaces'

/** main */
const themes = {
	ligth: {
		bg: '#fafafa',
		text: '#212121',
		border: '#e0e0e0',
		shadow: '#e0e0e0',
	},
	dark: {
		bg: '#212121',
		text: '#fafafa',
		border: '#424242',
		shadow: '#424242',
	},

}

function getTheme(key: keyof typeof themes) {
	return {
		colors: {
			...mainColors,
			...auxColors,
			...themes[key],
		},
		sizes,
		fontSizes,
		fontWeights,
		radius,
		spaces,
	}
}

/** types */
type Themes = typeof themes

/** exports */
export { themes, getTheme }
export type { Themes }