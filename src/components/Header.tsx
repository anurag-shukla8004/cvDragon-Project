
import React, { useState } from 'react';
import { Menu, User } from 'lucide-react';
import Sidebar from './Sidebar';

interface HeaderProps {
  logoSrc: string;
}

const Header: React.FC<HeaderProps> = ({ logoSrc }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // User profile data (this would typically come from a context or props)
  const userProfile = {
    name: 'विकी जैन',
    role: 'कार्यसमिति सदस्य',
    avatarSrc: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=150&h=150&q=80'
  };

  return (
    <>
      <header className="p-6 flex justify-between items-center">
        <button 
          className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu className="w-6 h-6 text-gray-700" />
        </button>
        
        <div className="flex-1 flex justify-center items-center animate-fade-in">
          <img src={logoSrc} alt="Sangathan Logo" className="h-16" />
        </div>
        
        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
          <User className="w-6 h-6 text-gray-700" />
        </button>
      </header>

      <Sidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
        userProfile={userProfile}
      />
    </>
  );
};

export default Header;
