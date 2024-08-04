import React, { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown}>Dropdown</button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li className="dropdown-item">Leaderboard</li>
          <li className="dropdown-item">Get Planting</li>
          <li className="dropdown-item">Rewards</li>
        </ul>
      )}
    </div>
  )
}

export default Dropdown;