import React, { useState } from 'react';
import './ItemForm.css';

export default function ItemForm({ handleAddItem }) {
  const [newItem, setNewItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewItem('');
    handleAddItem(newItem);
  };

  return (
    <div className="itemForm">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className="itemInput"
            type="text"
            value={newItem}
            placeholder="add item"
            onChange={(e) => setNewItem(e.target.value)}
          ></input>
        </div>

        <button className="submitBtn" type="submit">
          Add Item 🛒
        </button>
      </form>
    </div>
  );
}
