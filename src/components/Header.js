import React from 'react';

export default function Header() {
  return (
    <nav className="btn-group" id="header" role="group" aria-label="Basic example">
      <button type="button" className="btn btn-secondary nav-button">Left</button>
      <button type="button" className="btn btn-secondary nav-button">Middle</button>
      <button type="button" className="btn btn-secondary nav-button">Right</button>
      <button type="button" className="btn btn-secondary nav-button">Right</button>
    </nav>
  )
}