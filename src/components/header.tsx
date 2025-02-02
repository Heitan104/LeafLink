import React from 'react';
import NavMenu from '@/components/navMenu';

interface HeaderProps {
  title: string;
}

const Header = ({title}: HeaderProps) => {
  return (
    <header className="bg-green-900 text-white p-4 flex justify-between items-center">
      <div className="text-xl">
        {title}
      </div>
      <div className="text-xl">
        <NavMenu />
      </div>
    </header>
  );
};

export default Header;
