import React from 'react';
import { User, HelpCircle, Settings, LogOut, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  children: React.ReactNode;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ children, onLogout }) => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 md:py-3 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          {children}
        </div>
        
        <div className="flex items-center gap-1 md:gap-2">
          <button 
            className="p-3 rounded-lg hover:bg-emerald-100 dark:hover:bg-gray-700 transition-colors duration-150 touch-manipulation"
            onClick={() => setIsDarkMode(!isDarkMode)}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            ) : (
              <Moon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            )}
          </button>
          
          <button 
            className="p-3 rounded-lg hover:bg-emerald-100 dark:hover:bg-gray-700 transition-colors duration-150 touch-manipulation hidden md:block"
            aria-label="User profile"
          >
            <User className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          </button>
          
          <button 
            className="p-3 rounded-lg hover:bg-emerald-100 dark:hover:bg-gray-700 transition-colors duration-150 touch-manipulation hidden md:block"
            aria-label="Help"
          >
            <HelpCircle className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          </button>
          
          <button 
            className="p-3 rounded-lg hover:bg-emerald-100 dark:hover:bg-gray-700 transition-colors duration-150 touch-manipulation hidden md:block"
            aria-label="Settings"
          >
            <Settings className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          </button>
          
          <button 
            className="p-3 rounded-lg hover:bg-emerald-100 dark:hover:bg-gray-700 transition-colors duration-150 touch-manipulation"
            onClick={onLogout}
            aria-label="Logout"
          >
            <LogOut className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;