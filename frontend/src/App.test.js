import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Parking Lot System heading', () => {
  render(<App />);
  const heading = screen.getByText(/Parking Lot System/i);
  expect(heading).toBeInTheDocument();
});
