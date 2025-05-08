import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

export const Link: React.FC<LinkProps> = ({ href, children, icon, isActive = false, onClick }) => {
  const baseClasses = "flex items-center px-3 py-2 text-sm font-medium rounded-md group transition-colors duration-150";
  const activeClasses = "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300";
  const inactiveClasses = "text-gray-600 dark:text-gray-300 hover:bg-gray-50 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white";
  
  return (
    <a 
      href={href} 
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
      onClick={(e) => {
        e.preventDefault();
        onClick?.();
      }}
    >
      {icon && (
        <span className={`mr-3 h-5 w-5 ${isActive ? 'text-emerald-500 dark:text-emerald-400' : 'text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-300'}`}>
          {icon}
        </span>
      )}
      {children}
    </a>
  );
};