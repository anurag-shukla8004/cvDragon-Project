
import React from 'react';
import TaskCard from './TaskCard';
import { Check, AlertCircle, MoreVertical } from 'lucide-react';

export interface TaskCardProps {
  title: string;
  status: 'completed' | 'due' | 'in-progress' | 'to-do';
  daysLeft?: number;
}

const TaskList: React.FC = () => {
  const tasks: TaskCardProps[] = [
    { title: 'Sangathan Yatra', status: 'completed' },
    { title: 'Sangathan Yatra', status: 'due' },
    { title: 'Sangathan Yatra', status: 'in-progress', daysLeft: 25 },
    { title: 'Sangathan Yatra', status: 'to-do', daysLeft: 25 },
  ];

  return (
    <div className="px-6 mt-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <svg className="w-6 h-6 text-gray-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#D73618" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6Z" stroke="#D73618" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" stroke="#D73618" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <h2 className="text-xl font-bold text-sangathan-primary">Tasks</h2>
        </div>
        <button className="text-sangathan-primary font-medium">View All</button>
      </div>
      
      <div className="space-y-4">
        {tasks.map((task, index) => (
          <TaskCard 
            key={index} 
            title={task.title} 
            status={task.status} 
            daysLeft={task.daysLeft}
            animationOrder={index}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
