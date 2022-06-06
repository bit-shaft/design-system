/** compose */
import * as s from './styles'
import { TextProps } from './types'

/** render */
const Text = (props: TextProps) => {
	return <p className={s.wrapper({ ...props })} {...props}>{props.children}</p>
}

/** exports */
export { Text }
