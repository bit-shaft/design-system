import { createStitches } from '@stitches/core'
import { lib } from './config'

const stitches = createStitches({
	theme: lib.themes.dark,
	utils: lib.utils,
})

export { stitches }