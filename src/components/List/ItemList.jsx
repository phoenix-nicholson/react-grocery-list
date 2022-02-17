import React, { useState } from 'react';

export default function ItemList({ items, handleEditItem }) {
  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <h4>{item.text}</h4>
          <Item handleEditItem={handleEditItem} />
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
          value={item.text}
          onChange={(e) => {
            handleEditItem({ ...item, text: e.target.value });
          }}
        />
        <button onClick={() => setEditItem(false)}>save</button>
      </>
    );
  } else {
    itemContent = (
      <>
        <p>{item.text}</p>
        <button onClick={() => setEditItem(true)}>edit</button>
      </>
    );
  }
  return (
    <label>
      <input
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
      <button type="button" onClick={() => handleDeleteItem(item.id)}>
        deleted
      </button>
    </label>
  );
}
