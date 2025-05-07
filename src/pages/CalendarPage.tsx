import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { transactions } from '../data/mockData';
import Card from '../components/ui/Card';

const CalendarPage: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date('2023-03-01'));

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();
    
    return { daysInMonth, startingDay };
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', { 
      month: 'long',
      year: 'numeric'
    }).format(date);
  };

  const { daysInMonth, startingDay } = getDaysInMonth(currentMonth);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: startingDay }, (_, i) => i);

  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const getTransactionsForDay = (day: number) => {
    const dateStr = `${currentMonth.getFullYear()}-${String(currentMonth.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return transactions.filter(transaction => transaction.date === dateStr);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Calendar</h1>
      </div>

      <Card>
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={previousMonth}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-150"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>
          
          <h2 className="text-xl font-semibold text-gray-900">
            {formatDate(currentMonth)}
          </h2>
          
          <button
            onClick={nextMonth}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-150"
          >
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        <div className="grid grid-cols-7 gap-px bg-gray-200">
          {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(day => (
            <div key={day} className="bg-gray-50 p-2 text-center text-xs font-medium text-gray-700">
              {day}
            </div>
          ))}

          {blanks.map(blank => (
            <div key={`blank-${blank}`} className="bg-white p-2 min-h-[120px]" />
          ))}

          {days.map(day => {
            const dayTransactions = getTransactionsForDay(day);
            return (
              <div key={day} className="bg-white p-2 border-t border-l first:border-l-0 min-h-[120px]">
                <div className="font-medium text-gray-700 mb-2">{day}</div>
                <div className="space-y-1">
                  {dayTransactions.map(transaction => (
                    <div
                      key={transaction.id}
                      className={`text-xs flex items-center ${
                        transaction.amount >= 0 ? 'text-green-600' : 'text-red-600'
                      }`}
                      title={transaction.description}
                    >
                      <span className="mr-1">•</span>
                      <span>{`€${Math.abs(transaction.amount).toLocaleString()}`}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default CalendarPage;