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
  const activeClasses = "bg-indigo-50 text-indigo-700";
  const inactiveClasses = "text-gray-600 hover:bg-gray-50 hover:text-gray-900";
  
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
        <span className={`mr-3 h-5 w-5 ${isActive ? 'text-indigo-500' : 'text-gray-400 group-hover:text-gray-500'}`}>
          {icon}
        </span>
      )}
      {children}
    </a>
  );
};