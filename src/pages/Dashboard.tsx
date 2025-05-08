import React from 'react';
import AccountsSummary from '../components/dashboard/AccountsSummary';
import TransactionsList from '../components/dashboard/TransactionsList';
import FinancialChart from '../components/dashboard/FinancialChart';
import { accounts, transactions } from '../data/mockData';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Welcome!</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <AccountsSummary accounts={accounts} />
        <TransactionsList transactions={transactions} />
      </div>
      
      <div>
        <FinancialChart />
      </div>
    </div>
  );
};

export default Dashboard;