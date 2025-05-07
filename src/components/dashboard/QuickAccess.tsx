import React from 'react';
import Card from '../ui/Card';
import { Euro, Briefcase, BarChart3, CreditCard } from 'lucide-react';

interface QuickAccessItemProps {
  icon: React.ReactNode;
  label: string;
}

const QuickAccessItem: React.FC<QuickAccessItemProps> = ({ icon, label }) => {
  return (
    <div className="flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-150 cursor-pointer">
      <div className="flex items-center space-x-3">
        <div className="text-gray-500">{icon}</div>
        <span className="text-gray-800">{label}</span>
      </div>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor" 
        className="h-4 w-4 text-gray-400"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M9 5l7 7-7 7" 
        />
      </svg>
    </div>
  );
};

const QuickAccess: React.FC = () => {
  return (
    <Card title="Quick access">
      <div className="space-y-3">
        <QuickAccessItem icon={<Euro size={20} />} label="Account" />
        <QuickAccessItem icon={<Briefcase size={20} />} label="Projects" />
        <QuickAccessItem icon={<BarChart3 size={20} />} label="Forecast" />
        <QuickAccessItem icon={<CreditCard size={20} />} label="Money & Cashflow" />
      </div>
    </Card>
  );
};

export default QuickAccess;