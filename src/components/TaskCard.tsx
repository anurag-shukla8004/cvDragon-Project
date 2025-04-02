
import React from 'react';
import { Check, AlertCircle, MoreVertical } from 'lucide-react';

interface TaskCardProps {
  title: string;
  status: 'completed' | 'due' | 'in-progress' | 'to-do';
  daysLeft?: number;
  animationOrder: number;
}

const TaskCard: React.FC<TaskCardProps> = ({ title, status, daysLeft, animationOrder }) => {
  const getStatusColor = () => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-700';
      case 'due': return 'bg-red-100 text-red-700';
      case 'in-progress': return 'bg-blue-100 text-blue-700';
      case 'to-do': return 'bg-yellow-100 text-yellow-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'completed': return 'Completed';
      case 'due': return 'Due';
      case 'in-progress': return 'In progress';
      case 'to-do': return 'To do';
      default: return 'Unknown';
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case 'completed': 
        return (
          <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
            <Check className="w-6 h-6 text-green-600" />
          </div>
        );
      case 'due': 
        return (
          <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center">
            <AlertCircle className="w-6 h-6 text-red-600" />
          </div>
        );
      case 'in-progress':
      case 'to-do':
        return (
          <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <div className="text-sm font-medium">{daysLeft}</div>
              <div className="text-xs">Days Left</div>
            </div>
          </div>
        );
        default: return null;
    }
  };

  return (
<div 
  className="group task-card bg-white rounded-xl p-4 shadow-sm flex items-center justify-between 
             transition-all duration-300 transform hover:scale-105"
  style={{ "--animation-order": animationOrder } as React.CSSProperties}
>
  <div className="flex items-center gap-4 transition-[padding] duration-300 group-hover:p-1">
    {getStatusIcon()}
    <div>
      <h3 className="font-medium">{title}</h3>
      <div className={`status-badge inline-block px-3 py-1 rounded-full text-xs font-medium mt-1 ${getStatusColor()}`}>
        {getStatusText()}
      </div>
    </div>
  </div>
  <button className="text-gray-400">
    <MoreVertical className="w-5 h-5" />
  </button>
</div>
  );
};

export default TaskCard;
