import React from 'react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { Transaction } from '../../types';

interface TransactionsListProps {
  transactions: Transaction[];
}

const TransactionsList: React.FC<TransactionsListProps> = ({ transactions }) => {
  return (
    <Card title="Upcoming transactions">
      <div className="divide-y divide-gray-200">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="py-3 flex justify-between items-center">
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">{transaction.date}</span>
              <div className="flex space-x-2 items-center">
                <span className={`${transaction.amount >= 0 ? 'text-green-600' : 'text-red-600'} font-medium`}>
                  {transaction.amount >= 0 ? `+€${transaction.amount}` : `-€${Math.abs(transaction.amount)}`}
                </span>
                <span className="text-gray-900">{transaction.description}</span>
              </div>
            </div>
            {transaction.tags.map((tag) => (
              <Badge key={tag} type={tag as any}>
                {transaction.category}
              </Badge>
            ))}
          </div>
        ))}
      </div>
    </Card>
  );
};

export default TransactionsList;