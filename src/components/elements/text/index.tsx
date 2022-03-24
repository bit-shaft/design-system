import React from 'react'
import * as S from './styles'
import { TextProps } from './types'

const Text = (props: TextProps) => {
	return <S.Wrapper>{props.children}</S.Wrapper>
}

export { Text }
