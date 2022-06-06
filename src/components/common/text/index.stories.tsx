/** packages */
import { ComponentStory, ComponentMeta } from '@storybook/react'

/** compose */
import { Text as Component } from '.'
import { TextProps as Props } from './types'

/** types */
type ComponentProps = typeof Component;

/** main */
export default {
	title: 'Common/Text',
	component: Component,
	argTypes: {
		children: {
			description: 'The Text\'s content',
			type: 'string',
		},
	},
	args: {
		children: 'Hi I\'m a text',
	},
} as ComponentMeta<ComponentProps>

/** render */
const Text: ComponentStory<ComponentProps> = (props: Props) => (
	<Component {...props} />
)

/** exports */
export { Text }
