import React, { useState } from "react";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import InventoryPage from "./pages/InventoryPage";
import TransactionsPage from "./pages/TransactionsPage";
import CalendarPage from "./pages/CalendarPage";
import CompanyPage from "./pages/CompanyPage";
import LoginPage from "./pages/LoginPage";

type Page =
  | "dashboard"
  | "transactions"
  | "inventory"
  | "calendar"
  | "company"
  | "login";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>("dashboard");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentPage("login");
  };

  if (!isAuthenticated) {
    return <LoginPage onLogin={handleLogin} />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <Dashboard />;
      case "transactions":
        return <TransactionsPage />;
      case "inventory":
        return <InventoryPage />;
      case "calendar":
        return <CalendarPage />;
      case "company":
        return <CompanyPage />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Layout
        onNavigate={(page: string) => setCurrentPage(page as Page)}
        currentPage={currentPage}
        onLogout={handleLogout}
      >
        {renderPage()}
      </Layout>
    </div>
  );
}

export default App;
