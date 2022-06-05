/** lib exports */
import { utils } from './lib/utils'
import { themes } from './lib/themes'

export const lib = {
	utils,
	themes,
}

/** fonts exports */
import { heading } from './fonts/heading'
import { paragraph } from './fonts/paragraph'

export const typography = {
	heading,
	paragraph,
}

/** colors exports */
import { mainColors } from './colors/main'
import { auxColors } from './colors/aux'

export const colors = {
	main: mainColors,
	aux: auxColors,
}
