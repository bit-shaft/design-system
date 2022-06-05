import { mainColors } from '../colors/main'
import { auxColors } from '../colors/aux'

/** main */
const themes = {
	ligth: {
		colors: {
			...mainColors,
			...auxColors,
  
			bg: '#fafafa',
			text: '#212121',
			border: '#e0e0e0',
			shadow: '#e0e0e0',
		}
	},
	dark: {
		colors: {
			...mainColors,
			...auxColors,
  
			bg: '#212121',
			text: '#fafafa',
			border: '#424242',
			shadow: '#424242',
		}
	}
}

/** types */
type Themes = typeof themes

/** exports */
export { themes }
export type { Themes }