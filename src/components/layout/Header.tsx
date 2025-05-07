import React from 'react';
import { User, HelpCircle, Settings, LogOut } from 'lucide-react';

interface HeaderProps {
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogout }) => {
  return (
    <header className="bg-white border-b border-gray-200 py-4 px-6 flex items-center justify-end space-x-4">
      <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-150">
        <User className="h-5 w-5 text-gray-500" />
      </button>
      
      <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-150">
        <HelpCircle className="h-5 w-5 text-gray-500" />
      </button>
      
      <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-150">
        <Settings className="h-5 w-5 text-gray-500" />
      </button>
      
      <button 
        className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-150"
        onClick={onLogout}
      >
        <LogOut className="h-5 w-5 text-gray-500" />
      </button>
    </header>
  );
};

export default Header;