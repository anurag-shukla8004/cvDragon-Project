
import React from 'react';
import { Menu, User } from 'lucide-react';

interface HeaderProps {
  logoSrc: string;
}

const Header: React.FC<HeaderProps> = ({ logoSrc }) => {
  return (
    <header className="p-6 flex justify-between items-center">
      <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
        <Menu className="w-6 h-6 text-gray-700" />
      </button>
      
      <div className="flex-1 flex justify-center items-center animate-fade-in">
        <img src={logoSrc} alt="Sangathan Logo" className="h-16" />
      </div>
      
      <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
        <User className="w-6 h-6 text-gray-700" />
      </button>
    </header>
  );
};

export default Header;
