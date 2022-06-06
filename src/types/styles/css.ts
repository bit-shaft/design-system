/** packages */
import type { CSS as StitchesCSS } from '@stitches/core'

/** compose */
import { stitches } from '@/styles'

/** types */
type CSS = StitchesCSS<typeof stitches.config> & HTMLElement['style']

/** exports */
export type { CSS }