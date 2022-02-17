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
  const saveEditInput = screen.getByLabelText('Save Button');
  userEvent.type(editInput, '{selectall}{del}Bento 🍱');
  userEvent.click(saveEditInput);

  //Make sure our edits persisted and the edit button is replaced
  screen.getByText('Bento 🍱');
  expect(screen.queryByText('Bento 🍱')).not.toBeInTheDocument();
  expect(editInput).not.toBeInTheDocument();
  expect(saveEditInput).not.toBeInTheDocument();

  //delete the edited item
  const deleteBtn = screen.getByLabelText('Delete Button');
  userEvent.click(deleteBtn);
  expect(screen.getByText('Bento')).not.toBeInTheDocument();
});
