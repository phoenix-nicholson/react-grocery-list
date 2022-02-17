import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders learn react link', () => {
  render(<App />);

  const addInput = screen.getByPlaceholderText('add item');
  const addBtn = screen.getByText('Add Item 🛒');

  screen.getByText('Meat 🍖');
  screen.getByText('Sake 🍶');
  screen.getByText('Rice 🍚');

  expect(screen.queryByText('Chicken 🍗')).not.toBeInTheDocument();
  userEvent.type(addInput, 'Chicken 🍗');
  userEvent.click(addBtn);

  screen.getByText('Chicken 🍗');

  //forgot steps//
  //edit newly added item
  const editBtn = screen.getByText('edit');
  userEvent.click(editBtn);
  const editInput = screen.getByLabelText('Edit Field');
  //Make sure our edits persisted and the edit button is replaced

  //delete the edited item
});
