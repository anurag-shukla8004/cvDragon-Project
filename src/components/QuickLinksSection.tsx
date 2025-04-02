
import React from 'react';
import { FileText, BookOpen, Download, MoreHorizontal } from 'lucide-react';

interface QuickLinkItemProps {
  icon: React.ReactNode;
  label: string;
}

const QuickLinkItem: React.FC<QuickLinkItemProps> = ({ icon, label }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
        {icon}
      </div>
      <span className="text-xs text-gray-700">{label}</span>
    </div>
  );
};

const QuickLinksSection: React.FC = () => {
  return (
    <div className="px-6 mt-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <svg className="w-6 h-6 text-sangathan-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 13C10 13.5304 10.2107 14.0391 10.5858 14.4142C10.9609 14.7893 11.4696 15 12 15C12.5304 15 13.0391 14.7893 13.4142 14.4142C13.7893 14.0391 14 13.5304 14 13C14 12.4696 13.7893 11.9609 13.4142 11.5858C13.0391 11.2107 12.5304 11 12 11C11.4696 11 10.9609 11.2107 10.5858 11.5858C10.2107 11.9609 10 12.4696 10 13Z" stroke="#D73618" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 12C5.4 16.4 8.6 18 12 18C15.4 18 18.6 16.4 21 12C18.6 7.6 15.4 6 12 6C8.6 6 5.4 7.6 3 12Z" stroke="#D73618" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <h2 className="text-xl font-bold text-sangathan-primary">Quick Links</h2>
        </div>
      </div>
      
      <div className="flex justify-around mt-4">
        <QuickLinkItem 
          icon={<FileText className="w-6 h-6 text-sangathan-primary" />} 
          label="Poll" 
        />
        <QuickLinkItem 
          icon={<BookOpen className="w-6 h-6 text-sangathan-primary" />} 
          label="Knowledge" 
        />
        <QuickLinkItem 
          icon={<Download className="w-6 h-6 text-sangathan-primary" />} 
          label="Download" 
        />
        <QuickLinkItem 
          icon={<MoreHorizontal className="w-6 h-6 text-sangathan-primary" />} 
          label="More" 
        />
      </div>
    </div>
  );
};

export default QuickLinksSection;
