import React, { useState } from 'react';
import { Home, BarChart2, Users, MapPin, MessageSquare } from 'lucide-react';

const BottomNavigation: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Home'); // Default active tab

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg animate-fade-in" style={{ animationDelay: '0.5s', zIndex: 50 }}>
      <div className="flex justify-between items-center px-6 py-3 max-w-512 mx-auto">
        <NavItem icon={<Home className="w-6 h-6" />} label="Home" active={activeTab === 'Home'} onClick={() => setActiveTab('Home')} />
        <NavItem icon={<BarChart2 className="w-6 h-6" />} label="Leaderboard" active={activeTab === 'Leaderboard'} onClick={() => setActiveTab('Leaderboard')} />
        <NavItem icon={<Users className="w-6 h-6" />} label="Community" active={activeTab === 'Community'} onClick={() => setActiveTab('Community')} />
        <NavItem icon={<MapPin className="w-6 h-6" />} label="My Area" active={activeTab === 'My Area'} onClick={() => setActiveTab('My Area')} />
        <NavItem icon={<MessageSquare className="w-6 h-6" />} label="Chats" active={activeTab === 'Chats'} onClick={() => setActiveTab('Chats')} />
      </div>
    </div>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active, onClick }) => {
  return (
    <div 
      className={`flex flex-col items-center cursor-pointer transition-colors ${active ? 'text-red-500' : 'text-gray-500'}`}
      onClick={onClick}
    >
      {icon}
      <span className="text-xs mt-1">{label}</span>
    </div>
  );
};

export default BottomNavigation;
