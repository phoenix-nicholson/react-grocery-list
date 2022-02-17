import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test.skip('renders learn react link', () => {
  render(<App />);

  const addInput = screen.getByPlaceholderText('add item');
  const addBtn = screen.getByText('Add Item 🛒');

  screen.getByText('Meat 🍖');
  screen.getByText('Sake 🍶');
  screen.getByText('Rice 🍚');

  expect(screen.queryByText('Chicken 🍗')).not.toBeInTheDocument();
  userEvent.type(addInput, 'Chicken 🍗');
  userEvent.click(addBtn);
});
