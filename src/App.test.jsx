import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('Should test function of shopping list', () => {
  render(<App />);

  const addInput = screen.getByPlaceholderText('add item');
  const addBtn = screen.getByText('Add Item 🛒');

  screen.getByText('Meat 🍖');
  screen.getByText('Sake 🍶');
  screen.getByText('Rice 🍚');

  expect(screen.queryByText('Chicken🍗')).not.toBeInTheDocument();
  userEvent.type(addInput, 'Chicken🍗');
  userEvent.click(addBtn);

  screen.getByText('Chicken🍗');

  //forgot steps//
  //edit newly added item
  const editBtn = screen.getByLabelText('EditChicken🍗');
  userEvent.click(editBtn);

  // userEvent.type(screen.getByLabelText('Edit-Field'), 'Bento🍱');
  // screen.debug(screen.getByLabelText('Edit-Field'));
  // userEvent.click(screen.getByLabelText('Save-Button'));
  //   //Make sure our edits persisted and the edit button is replaced
  // screen.getByText('Bento 🍱');
  //   expect(screen.queryByText('Bento 🍱')).not.toBeInTheDocument();
  //   expect(editInput).not.toBeInTheDocument();
  //   expect(saveEditInput).not.toBeInTheDocument();

  //   //delete the edited item
  //   const deleteBtn = screen.getByLabelText('Delete Bento 🍱');
  //   userEvent.click(deleteBtn);
  //   expect(screen.getByText('Bento 🍱)')).not.toBeInTheDocument();
});
