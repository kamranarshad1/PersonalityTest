import { render } from '@testing-library/react'
import Feedback from '../components/Feedback'

describe('Feedback Component', () => {
  it('renders result correctly', () => {
    const result = 'Introvert' // Assuming some example result

    const { getByRole } = render(<Feedback result={result} />)

    expect(getByRole('heading', { name: 'You are an Introvert!' })).toBeInTheDocument()
  });
})
