import React from 'react';
import './Header.css';

export default function Header({ items, handleClearList }) {
  return (
    <div>
      <p className="headerP">{items.length}</p>
      <button className="headerBtn" onClick={handleClearList}>
        Empty cart
      </button>
    </div>
  );
}
