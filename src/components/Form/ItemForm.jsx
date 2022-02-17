import React, { useState } from 'react';

export default function ItemForm({ handleAddItem, items }) {
  const [newItem, setNewItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewItem('');
    handleAddItem(newItem);
  };
  console.log('items', items);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={newItem}
            placeholder="add item"
            onChange={(e) => setNewItem(e.target.value)}
          ></input>
        </div>

        <button type="submit"> Add Item 🛒 </button>
      </form>
    </div>
  );
}
