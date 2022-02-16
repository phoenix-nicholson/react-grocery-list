import React, { useState } from 'react';

export default function ItemForm({ handleAdditem }) {
  const [newItem, setNewItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewItem('');
    handleAdditem(newItem);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" placeholder="add item"></input>
        </div>

        <button> submit </button>
      </form>
    </div>
  );
}
