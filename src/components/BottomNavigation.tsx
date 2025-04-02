
import React from 'react';
import { Home, BarChart2, Users, MapPin, MessageSquare } from 'lucide-react';

const BottomNavigation: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg animate-fade-in" style={{ animationDelay: '0.5s' }}>
      <div className="flex justify-between items-center px-6 py-3">
        <NavItem icon={<Home className="w-6 h-6" />} label="Home" active />
        <NavItem icon={<BarChart2 className="w-6 h-6" />} label="Leaderboard" />
        <NavItem icon={<Users className="w-6 h-6" />} label="Community" />
        <NavItem icon={<MapPin className="w-6 h-6" />} label="My Area" />
        <NavItem icon={<MessageSquare className="w-6 h-6" />} label="Chats" />
      </div>
    </div>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active }) => {
  return (
    <div className={`flex flex-col items-center nav-item ${active ? 'active text-sangathan-primary' : 'text-gray-500'}`}>
      {icon}
      <span className="text-xs mt-1">{label}</span>
    </div>
  );
};

export default BottomNavigation;
