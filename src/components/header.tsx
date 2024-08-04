import React from 'react';


interface HeaderProps {
  handleMenuChange: () => void;
}

const Header = ({ handleMenuChange }: HeaderProps) => {
  return (
    <header className="bg-green-900 text-white p-4 flex justify-between items-center">
      <div className="text-xl">
        HEADER [logo]
      </div>
      <div className="text-xl">
        <select onChange={handleMenuChange} className="bg-green-900 text-white p-2 rounded">
          <option value="">☰</option>
          <option value="/leaderboard">Leaderboard</option>
          <option value="/start-planting">Start Planting</option>
          <option value="/get-saplings">Get Saplings</option>
          <option value="/rewards">Rewards</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
