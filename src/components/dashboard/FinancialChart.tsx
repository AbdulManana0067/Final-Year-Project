import React from 'react';
import Card from '../ui/Card';

const FinancialChart: React.FC = () => {
  return (
    <Card title="Inflow & Income">
      <div className="flex items-center space-x-4 mb-4">
        <div className="flex items-center">
          <span className="w-3 h-3 bg-gray-500 rounded-full mr-2"></span>
          <span className="text-sm text-gray-600">Income</span>
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 bg-green-200 rounded-full mr-2"></span>
          <span className="text-sm text-gray-600">Expenses</span>
        </div>
      </div>
      
      <div className="flex items-end justify-between h-64">
        {/* This is a simplified representation of a bar chart */}
        {Array.from({ length: 12 }).map((_, i) => {
          const incomeHeight = 30 + Math.random() * 100;
          const expenseHeight = 20 + Math.random() * 80;
          
          return (
            <div key={i} className="flex flex-col items-center space-y-1 w-full">
              <div className="flex flex-col items-center space-y-0">
                <div 
                  className="w-4 bg-green-200 rounded-t"
                  style={{ height: `${expenseHeight}px` }}
                ></div>
                <div 
                  className="w-4 bg-gray-500 rounded-b"
                  style={{ height: `${incomeHeight}px` }}
                ></div>
              </div>
              <span className="text-xs text-gray-500 mt-1">
                {i+1}/23
              </span>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default FinancialChart;