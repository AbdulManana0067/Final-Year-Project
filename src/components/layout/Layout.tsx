import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { Menu } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  onNavigate: (page: string) => void;
  currentPage: string;
  onLogout: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, onNavigate, currentPage, onLogout }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-emerald-50 dark:bg-gray-900">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden transition-opacity duration-300"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-[85vw] sm:w-80 z-30 
        lg:relative lg:block lg:w-80 lg:z-0
        transform lg:transform-none transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <Sidebar onNavigate={(page) => {
          onNavigate(page);
          setIsSidebarOpen(false);
        }} currentPage={currentPage} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <Header onLogout={onLogout}>
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-3 -ml-2 rounded-lg hover:bg-emerald-100 dark:hover:bg-gray-700 transition-colors duration-150 lg:hidden touch-manipulation"
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          </button>
        </Header>

        <main className="flex-1 p-4 md:p-6 overflow-x-hidden">
          <div className="max-w-7xl mx-auto animate-fade-in">
            {children}
          </div>
        </main>

        <footer className="mt-auto py-4 px-4 md:px-6 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © 2024 Bokeeps. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <button className="py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 touch-manipulation">
                Privacy Policy
              </button>
              <button className="py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 touch-manipulation">
                Terms of Service
              </button>
              <button className="py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 touch-manipulation">
                Contact Support
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;