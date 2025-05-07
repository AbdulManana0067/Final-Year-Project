import React from 'react';
import Card from '../ui/Card';
import { Account } from '../../types';

interface AccountsSummaryProps {
  accounts: Account[];
}

const AccountsSummary: React.FC<AccountsSummaryProps> = ({ accounts }) => {
  const total = accounts.reduce((sum, account) => sum + account.balance, 0);

  return (
    <Card title="My accounts">
      <div className="space-y-4">
        {accounts.map((account) => (
          <div key={account.id} className="flex justify-between items-center">
            <span className="text-gray-900">{account.name}</span>
            <span className="text-gray-900 font-medium">
              {account.currency}{account.balance.toLocaleString()}
            </span>
          </div>
        ))}
        
        <div className="border-t pt-4 mt-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-900 font-medium">Total</span>
            <span className="text-gray-900 font-bold">
              €{total.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AccountsSummary;