import React from 'react'
import * as s from './styles'
import { TextProps } from './types'

const Text = (props: TextProps) => {
	return <p className={s.wrapper()}>{props.children}</p>
}

export { Text }
