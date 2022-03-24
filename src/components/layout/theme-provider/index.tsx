import { globalStyles } from '@/config/global'
import { ThemeProviderProps } from './types'

export const ThemeProvider = (props: ThemeProviderProps) => {
	globalStyles()

	return props.children
}
