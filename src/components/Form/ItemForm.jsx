import React, { useState } from 'react';

export default function ItemForm({ handleAddItem }) {
  const [newItem, setNewItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewItem('');
    handleAddItem(newItem);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="add item"
            onChange={(e) => setNewItem(e.target.value)}
          ></input>
        </div>

        <button type="submit"> submit </button>
      </form>
    </div>
  );
}
