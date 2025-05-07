import React from 'react';
import { Plus, Pencil } from 'lucide-react';
import Card from '../components/ui/Card';
import { company, users } from '../data/mockData';

const CompanyPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Company and users</h1>
      </div>

      <div className="space-y-6">
        {/* Companies Section */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Companies</h2>
            <button className="inline-flex items-center px-3 py-1.5 bg-slate-100 text-gray-700 rounded-md hover:bg-slate-200 transition-colors duration-150">
              <Plus className="h-4 w-4 mr-1" />
              Add company
            </button>
          </div>

          <Card>
            <div className="divide-y divide-gray-200">
              <div className="flex items-center justify-between py-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                    <span className="text-lg font-medium text-gray-700">{company.name[0]}</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{company.name}</h3>
                    <p className="text-sm text-gray-500">{company.email}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-12">
                  <div>
                    <p className="text-sm text-gray-500">Total balance</p>
                    <p className="font-medium text-gray-900">€34,500</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Total balance</p>
                    <p className="font-medium text-gray-900">€34,500</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Total balance</p>
                    <p className="font-medium text-gray-900">€34,500</p>
                  </div>
                  <button className="p-2 text-gray-400 hover:text-gray-600">
                    <Pencil className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Users Section */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Users</h2>
            <button className="inline-flex items-center px-3 py-1.5 bg-slate-100 text-gray-700 rounded-md hover:bg-slate-200 transition-colors duration-150">
              <Plus className="h-4 w-4 mr-1" />
              Add user
            </button>
          </div>

          <Card>
            <div className="divide-y divide-gray-200">
              {users.map(user => (
                <div key={user.id} className="flex items-center justify-between py-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                      <span className="text-lg font-medium text-gray-700">{user.name[0]}</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{user.name}</h3>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-12">
                    <div>
                      <p className="text-sm text-gray-500">Employment Type</p>
                      <p className="font-medium text-gray-900">Full-Time</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Position</p>
                      <p className="font-medium text-gray-900">{user.role}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Access</p>
                      <p className="font-medium text-gray-900">Full</p>
                    </div>
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                      <Pencil className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default CompanyPage;