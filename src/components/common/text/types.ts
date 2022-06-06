/** compose */
import { DefaultProps, VariantProps } from '@/types'
import { wrapper } from './styles'

/** types */
type TextProps = DefaultProps & VariantProps<typeof wrapper>

/** exports */
export type { TextProps }
