import { Account, Transaction, InventoryItem, Invoice, CalendarEvent, User, Company } from '../types';

export const accounts: Account[] = [
  {
    id: '1',
    name: 'Bank Account',
    balance: 23826,
    type: 'bank',
    currency: '€',
  },
  {
    id: '2',
    name: 'Vaults',
    balance: 34109,
    type: 'vault',
    currency: '€',
  },
  {
    id: '3',
    name: 'Cash',
    balance: 10320,
    type: 'cash',
    currency: '€',
  },
];

export const transactions: Transaction[] = [
  {
    id: '1',
    date: '2023-03-15',
    amount: 2011,
    description: 'Company Co.',
    category: 'Stocks',
    type: 'income',
    accountId: '1',
    tags: ['stocks'],
  },
  {
    id: '2',
    date: '2023-03-04',
    amount: -4500,
    description: 'Acme',
    category: 'Subscription',
    type: 'expense',
    accountId: '1',
    tags: ['subscription'],
  },
  {
    id: '3',
    date: '2023-03-15',
    amount: -3500,
    description: 'Streamio',
    category: 'Supplier',
    type: 'expense',
    accountId: '1',
    tags: ['supplier'],
  },
  {
    id: '4',
    date: '2023-03-10',
    amount: 13500,
    description: 'Company Co.',
    category: 'Investment',
    type: 'income',
    accountId: '1',
    tags: ['investment'],
  },
  {
    id: '5',
    date: '2023-03-10',
    amount: 4900,
    description: 'Company Co.',
    category: 'Investment',
    type: 'income',
    accountId: '2',
    tags: ['investment'],
  },
  {
    id: '6',
    date: '2023-03-25',
    amount: -22500,
    description: 'Office Lease',
    category: 'Expense',
    type: 'expense',
    accountId: '1',
    tags: ['expense'],
  },
  {
    id: '7',
    date: '2023-03-27',
    amount: 12200,
    description: 'Client Payment',
    category: 'Income',
    type: 'income',
    accountId: '1',
    tags: ['income'],
  },
  {
    id: '8',
    date: '2023-03-27',
    amount: 3700,
    description: 'Consulting',
    category: 'Income',
    type: 'income',
    accountId: '1',
    tags: ['income'],
  },
];

export const inventoryItems: InventoryItem[] = [
  {
    id: '1',
    name: 'Office Chair',
    sku: 'FURN-001',
    category: 'Furniture',
    quantity: 12,
    unitPrice: 179.99,
    totalValue: 2159.88,
    reorderPoint: 5,
    supplier: 'Office Supply Co.',
    lastUpdated: '2023-11-01',
  },
  {
    id: '2',
    name: 'Desk Lamp',
    sku: 'LIGHT-002',
    category: 'Lighting',
    quantity: 25,
    unitPrice: 49.99,
    totalValue: 1249.75,
    reorderPoint: 10,
    supplier: 'Home Goods Inc.',
    lastUpdated: '2023-11-05',
  },
  {
    id: '3',
    name: 'Laptop',
    sku: 'TECH-003',
    category: 'Electronics',
    quantity: 8,
    unitPrice: 1299.99,
    totalValue: 10399.92,
    reorderPoint: 3,
    supplier: 'Tech Solutions',
    lastUpdated: '2023-11-10',
  },
  {
    id: '4',
    name: 'Printer Paper',
    sku: 'PAPER-004',
    category: 'Office Supplies',
    quantity: 50,
    unitPrice: 12.99,
    totalValue: 649.50,
    reorderPoint: 20,
    supplier: 'Office Supply Co.',
    lastUpdated: '2023-11-12',
  },
  {
    id: '5',
    name: 'Whiteboard',
    sku: 'FURN-005',
    category: 'Furniture',
    quantity: 6,
    unitPrice: 89.99,
    totalValue: 539.94,
    reorderPoint: 2,
    supplier: 'Office Supply Co.',
    lastUpdated: '2023-11-15',
  },
];

export const invoices: Invoice[] = [
  {
    id: '1',
    customerName: 'Acme Corp',
    date: '2023-11-01',
    dueDate: '2023-11-15',
    items: [
      {
        id: '1-1',
        description: 'Consulting Services',
        quantity: 20,
        unitPrice: 150,
        total: 3000,
      },
      {
        id: '1-2',
        description: 'Software License',
        quantity: 1,
        unitPrice: 1200,
        total: 1200,
      },
    ],
    subtotal: 4200,
    tax: 840,
    total: 5040,
    status: 'paid',
  },
  {
    id: '2',
    customerName: 'Widget Co.',
    date: '2023-11-05',
    dueDate: '2023-11-20',
    items: [
      {
        id: '2-1',
        description: 'Web Design',
        quantity: 1,
        unitPrice: 3500,
        total: 3500,
      },
    ],
    subtotal: 3500,
    tax: 700,
    total: 4200,
    status: 'sent',
  },
  {
    id: '3',
    customerName: 'Tech Solutions',
    date: '2023-11-10',
    dueDate: '2023-11-25',
    items: [
      {
        id: '3-1',
        description: 'Server Maintenance',
        quantity: 12,
        unitPrice: 200,
        total: 2400,
      },
      {
        id: '3-2',
        description: 'Backup Services',
        quantity: 1,
        unitPrice: 800,
        total: 800,
      },
    ],
    subtotal: 3200,
    tax: 640,
    total: 3840,
    status: 'draft',
  },
];

export const calendarEvents: CalendarEvent[] = [
  {
    id: '1',
    title: 'Invoice due - Acme Corp',
    date: '2023-11-15',
    type: 'invoice',
    description: 'Invoice #1001 for $5,040 due today',
  },
  {
    id: '2',
    title: 'Quarterly Tax Payment',
    date: '2023-11-20',
    type: 'bill',
    description: 'Quarterly tax payment of $12,500 due',
  },
  {
    id: '3',
    title: 'Supplier Meeting - Office Supply Co.',
    date: '2023-11-18',
    type: 'meeting',
    description: 'Discuss new product line and pricing',
  },
  {
    id: '4',
    title: 'Inventory Restock Reminder',
    date: '2023-11-22',
    type: 'reminder',
    description: 'Order new office chairs and whiteboards',
  },
];

export const users: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'admin',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'manager',
    avatar: 'https://i.pravatar.cc/150?img=2',
  },
  {
    id: '3',
    name: 'Robert Johnson',
    email: 'robert@example.com',
    role: 'viewer',
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
];

export const company: Company = {
  id: '1',
  name: 'Bokeeps Inc.',
  logo: '/logo.svg',
  address: '123 Finance Street, Money City, FC 12345',
  taxId: 'TAX-12345678',
  phone: '+1 (555) 123-4567',
  email: 'info@bokeeps.com',
};