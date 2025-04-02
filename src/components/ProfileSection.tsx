
import React from 'react';

interface ProfileSectionProps {
  name: string;
  role: string;
  points: number;
  avatarSrc: string;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ name, role, points, avatarSrc }) => {
  return (
    <div className="flex items-center justify-between px-6 py-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
      <div className="flex items-center gap-4">
        <div className="relative">
          <img 
            src={avatarSrc} 
            alt={name} 
            className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
          />
        </div>
        <div>
          <h2 className="text-xl font-bold text-sangathan-primary">{name}</h2>
          <div className="flex items-center gap-2 text-gray-600">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 8a2 2 0 100-4 2 2 0 000 4z"></path>
              <path fillRule="evenodd" d="M8 7a4 4 0 11-8 0 4 4 0 018 0zm4 1a1 1 0 01.707.293l4 4a1 1 0 01-1.414 1.414L12 10.414l-1.293 1.293a1 1 0 01-1.414-1.414l2-2A1 1 0 0112 8z" clipRule="evenodd"></path>
            </svg>
            <span>{role}</span>
          </div>
        </div>
      </div>
      <div className="bg-white px-4 py-2 rounded-lg shadow-sm flex items-center gap-2 cursor-pointer">
        <div className="w-5 h-5 rounded-full flex items-center justify-center bg-sangathan-primary">
          <span className="text-white text-xs">₹</span>
        </div>
        <span className="font-semibold text-sangathan-primary cursor-pointer">{points}</span>
      </div>
    </div>
  );
};

export default ProfileSection;
