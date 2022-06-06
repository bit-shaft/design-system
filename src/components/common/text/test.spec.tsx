/** packages */
import { render } from '@testing-library/react'

/** compose */
import { Text } from '.'

/** tests */
describe('Text component', () => {
	it('renders correctly', () => {
		const { getByText } = render(<Text>Hello text</Text>)

		expect(getByText('Hello text')).toBeInTheDocument()
	})
})
