'use client';

import React from 'react';
import { RefreshCw } from 'lucide-react';

const LowStockContent: React.FC = () => {
  return (
    <div className="flex-1 bg-slate-50 overflow-auto">
      <div className="bg-white border-b border-slate-200 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Low Stock Alerts</h1>
            <p className="text-slate-600 mt-1">Items that need immediate attention</p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <RefreshCw className="w-4 h-4" />
            <span>Refresh Alerts</span>
          </button>
        </div>
      </div>
      <div className="p-6">
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-red-600 mb-4">Critical Stock Levels</h3>
          <p className="text-slate-600">Detailed low stock management interface would go here with expanded functionality, filters, and bulk reorder options.</p>
        </div>
      </div>
    </div>
  );
};

export default LowStockContent;