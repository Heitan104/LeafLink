import React from 'react';

const Header = ({title}) => {
  return (
    <header className="bg-green-900 text-white p-4 flex justify-between items-center">
      <div className="text-xl">
        {title}
      </div>
      <div className="text-xl">
        
      </div>
    </header>
  );
};

export default Header;
