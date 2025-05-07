export interface Account {
  id: string;
  name: string;
  balance: number;
  type: 'bank' | 'vault' | 'cash';
  currency: string;
}

export interface Transaction {
  id: string;
  date: string;
  amount: number;
  description: string;
  category: string;
  type: 'income' | 'expense';
  accountId: string;
  tags: string[];
}

export interface InventoryItem {
  id: string;
  name: string;
  sku: string;
  category: string;
  quantity: number;
  unitPrice: number;
  totalValue: number;
  reorderPoint: number;
  supplier: string;
  lastUpdated: string;
}

export interface Invoice {
  id: string;
  customerName: string;
  date: string;
  dueDate: string;
  items: InvoiceItem[];
  subtotal: number;
  tax: number;
  total: number;
  status: 'draft' | 'sent' | 'paid' | 'overdue';
}

export interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

export interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  type: 'bill' | 'invoice' | 'meeting' | 'reminder';
  description: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'manager' | 'viewer';
  avatar?: string;
}

export interface Company {
  id: string;
  name: string;
  logo?: string;
  address: string;
  taxId: string;
  phone: string;
  email: string;
}

export type TransactionType = 'income' | 'expense' | 'transfer';
export type AccountType = 'bank' | 'vault' | 'cash';
export type TagType = 'supplier' | 'subscription' | 'stocks' | 'investment';