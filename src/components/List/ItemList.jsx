import React, { useState } from 'react';
import './ItemList.css';

export default function ItemList({ items, handleEditItem, handleDeleteItem }) {
  return (
    <div className="itemList">
      {items.map((item) => (
        <div className="item" key={item.id}>
          <Item item={item} handleEditItem={handleEditItem} handleDeleteItem={handleDeleteItem} />
        </div>
      ))}
    </div>
  );
}

function Item({ item, handleEditItem, handleDeleteItem }) {
  const [editItem, setEditItem] = useState(false);
  let itemContent;

  if (editItem) {
    itemContent = (
      <>
        <input
          aria-label="Edit Field"
          value={item.text}
          onChange={(e) => {
            handleEditItem({ ...item, text: e.target.value });
          }}
        />
        <button aria-label="Save Button" onClick={() => setEditItem(false)}>
          save
        </button>
      </>
    );
  } else {
    itemContent = (
      <>
        <p>{item.text}</p>
        <button aria-label="Edit Button" onClick={() => setEditItem(true)}>
          edit
        </button>
      </>
    );
  }
  return (
    <label>
      <input
        aria-label="Check Box"
        type="checkbox"
        checked={item.done}
        onChange={(e) => {
          handleEditItem({
            ...item,
            done: e.target.value,
          });
        }}
      />
      {itemContent}
      <button aria-label="Delete Button" type="button" onClick={() => handleDeleteItem(item.id)}>
        delete
      </button>
    </label>
  );
}
