import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
  onNavigate: (page: string) => void;
  currentPage: string;
  onLogout: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, onNavigate, currentPage, onLogout }) => {
  return (
    <div className="flex min-h-screen bg-emerald-50">
      <Sidebar onNavigate={onNavigate} currentPage={currentPage} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onLogout={onLogout} />
        <main className="flex-1 overflow-y-auto bg-emerald-50 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;