/** lib exports */
import { utils } from './lib/utils'
import { media } from './lib/media'
import { themes, getTheme } from './lib/themes'

const lib = {
	utils,
	themes,
	media,
	getTheme,
}

/** base exports */
import { sizes } from './base/sizes'
import { fontSizes } from './base/font-sizes'
import { fontWeights } from './base/font-weights'
import { radius } from './base/radius'
import { spaces } from './base/spaces'

const base = {
	sizes,
	fontSizes,
	fontWeights,
	radius,
	spaces,
}

/** colors exports */
import { mainColors } from './colors/main'
import { auxColors } from './colors/aux'

const colors = {
	main: mainColors,
	aux: auxColors,
}

/** exports */
export { lib, base, colors }
