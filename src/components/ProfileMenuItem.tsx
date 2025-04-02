
import React from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProfileMenuItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick?: () => void;
  className?: string;
}

const ProfileMenuItem: React.FC<ProfileMenuItemProps> = ({
  icon,
  title,
  description,
  onClick,
  className,
}) => {
  return (
    <div 
      className={cn(
        "flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      <div className="flex items-center gap-4">
        <div className="bg-white p-2 rounded-md shadow-sm">
          {icon}
        </div>
        <div>
          <h3 className="font-medium text-red-700">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
      <ChevronRight className="h-5 w-5 text-gray-400" />
    </div>
  );
};

export default ProfileMenuItem;