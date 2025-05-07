import React from 'react';
import { TagType } from '../../types';

interface BadgeProps {
  type: TagType;
  children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ type, children }) => {
  const getBadgeClasses = () => {
    switch (type) {
      case 'supplier':
        return 'bg-gray-600 text-white';
      case 'subscription':
        return 'bg-green-100 text-green-800';
      case 'stocks':
        return 'bg-green-100 text-green-800';
      case 'investment':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getBadgeClasses()}`}
    >
      {children}
    </span>
  );
};

export default Badge;