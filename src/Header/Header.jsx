import React from 'react';

export default function Header({ items, handleClearList }) {
  return (
    <div>
      <p>{items.length}</p>
      <button onClick={handleClearList}>Empty cart</button>
    </div>
  );
}
