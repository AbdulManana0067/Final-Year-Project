import React from 'react';
import { Link } from '../ui/Link';
import { Euro, FileText, BarChart3, Calendar, Users } from 'lucide-react';

interface SidebarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Sidebar: React.FC<SidebarProps> = ({ onNavigate, currentPage }) => {
  return (
    <aside className="w-full md:w-80 bg-white border-r border-gray-200 min-h-screen">
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-8">
          <Euro className="h-8 w-8 text-indigo-600" />
          <h1 className="text-2xl font-bold text-gray-900">Bokeeps</h1>
        </div>

        <nav className="space-y-1">
          <Link 
            href="#" 
            icon={<Euro />}
            isActive={currentPage === 'dashboard'}
            onClick={() => onNavigate('dashboard')}
          >
            Dashboard
          </Link>
          
          <Link 
            href="#" 
            icon={<FileText />}
            isActive={currentPage === 'transactions'}
            onClick={() => onNavigate('transactions')}
          >
            Transactions
          </Link>
          
          <Link 
            href="#" 
            icon={<BarChart3 />}
            isActive={currentPage === 'inventory'}
            onClick={() => onNavigate('inventory')}
          >
            Inventory
          </Link>
          
          <Link 
            href="#" 
            icon={<Calendar />}
            isActive={currentPage === 'calendar'}
            onClick={() => onNavigate('calendar')}
          >
            Calendar
          </Link>
          
          <Link 
            href="#" 
            icon={<Users />}
            isActive={currentPage === 'company'}
            onClick={() => onNavigate('company')}
          >
            Company and users
          </Link>
        </nav>
      </div>

      <div className="px-6 py-4 mt-auto border-t border-gray-200">
        <div className="flex flex-col">
          <p className="text-sm text-gray-500">Total on your accounts</p>
          <p className="text-2xl font-bold text-gray-900">€35.927</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar