
import React from 'react';
import { X } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader } from '@/components/ui/sheet';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  userProfile: {
    name: string;
    role: string;
    avatarSrc: string;
  };
}

const sidebarLinks = [
  { icon: "📋", label: "My Task" },
  { icon: "👥", label: "My Community" },
  { icon: "📊", label: "Leaderboard" },
  { icon: "💬", label: "Chats" },
  { icon: "📚", label: "Courses" },
  { icon: "📖", label: "Knowledge" },
  { icon: "📊", label: "Polls" },
  { icon: "🤝", label: "Contributions" },
  { icon: "📝", label: "Quizzes" },
  { icon: "🔄", label: "Updates" },
  { icon: "⬇️", label: "Downloads" },
  { icon: "📢", label: "News" },
  { icon: "❓", label: "FAQ's" },
  { icon: "⚙️", label: "Settings" },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, userProfile }) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="left" className="p-0 border-r w-[300px] sm:max-w-[300px]">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 rounded-full w-8 h-8 bg-white flex items-center justify-center shadow-sm"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>
        
        <div className="border-b p-6 flex items-center">
          <img 
            src={userProfile.avatarSrc}
            alt={userProfile.name}
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <h3 className="text-xl font-bold">{userProfile.name}</h3>
            <div className="flex items-center text-gray-600 mt-1">
              <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none">
                <path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-sm">{userProfile.role}</span>
            </div>
          </div>
        </div>
        
        <div className="py-4">
          {sidebarLinks.map((link, index) => (
            <button 
              key={index}
              className="w-full flex items-center px-6 py-3 hover:bg-gray-100 transition-colors"
            >
              <span className="text-xl mr-4">{link.icon}</span>
              <span className="text-gray-700">{link.label}</span>
            </button>
          ))}
        </div>
        
        <div className="absolute bottom-4 w-full text-center text-gray-500 text-sm">
          Version 8.97.99.00
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
