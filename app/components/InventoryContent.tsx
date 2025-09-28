'use client';

import React from 'react';
import { 
  Filter,
  Download,
  Plus,
  Search,
  Edit3,
  Trash2,
  MoreHorizontal,
  X
} from 'lucide-react';
import { inventoryItems } from '../data/mockData';

interface InventoryContentProps {
  inventoryFilter: string;
  onInventoryFilterChange: (filter: string) => void;
  selectedItems: number[];
  onSelectedItemsChange: (items: number[]) => void;
}

const InventoryContent: React.FC<InventoryContentProps> = ({ 
  inventoryFilter, 
  onInventoryFilterChange, 
  selectedItems, 
  onSelectedItemsChange 
}) => {
  const toggleItemSelection = (itemId: number): void => {
    const newSelected = selectedItems.includes(itemId) 
      ? selectedItems.filter(id => id !== itemId)
      : [...selectedItems, itemId];
    onSelectedItemsChange(newSelected);
  };

  const getStatusColor = (status: 'critical' | 'warning' | 'good'): string => {
    switch (status) {
      case 'critical': return 'bg-red-100 text-red-800';
      case 'warning': return 'bg-yellow-100 text-yellow-800';
      case 'good': return 'bg-green-100 text-green-800';
      default: return 'bg-slate-100 text-slate-800';
    }
  };

  return (
    <div className="flex-1 bg-slate-50 overflow-auto">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Inventory Management</h1>
            <p className="text-slate-600 mt-1">Manage all your products and stock levels</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg hover:bg-slate-200 transition-colors flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Export</span>
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>Add Product</span>
            </button>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Filters */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 mb-6">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-slate-400" />
              <span className="text-sm font-medium text-slate-700">Filters:</span>
            </div>
            <select 
              value={inventoryFilter} 
              onChange={(e) => onInventoryFilterChange(e.target.value)}
              className="bg-slate-100 border-0 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Items</option>
              <option value="critical">Critical Stock</option>
              <option value="warning">Low Stock</option>
              <option value="good">Good Stock</option>
            </select>
            <select className="bg-slate-100 border-0 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500">
              <option>All Categories</option>
              <option>Electronics</option>
              <option>Accessories</option>
              <option>Clothing</option>
            </select>
            <div className="relative ml-auto">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search products..."
                className="bg-slate-100 border-0 rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 w-64"
              />
            </div>
          </div>
        </div>

        {/* Inventory Table */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-3 text-left">
                    <input 
                      type="checkbox" 
                      className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                      onChange={(e) => {
                        if (e.target.checked) {
                          onSelectedItemsChange(inventoryItems.map(item => item.id));
                        } else {
                          onSelectedItemsChange([]);
                        }
                      }}
                      checked={selectedItems.length === inventoryItems.length}
                    />
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Product</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">SKU</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Stock</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Last Updated</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {inventoryItems.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <input 
                        type="checkbox" 
                        className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                        checked={selectedItems.includes(item.id)}
                        onChange={() => toggleItemSelection(item.id)}
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-medium text-slate-900">{item.name}</div>
                    </td>
                    <td className="px-6 py-4 text-slate-600">{item.sku}</td>
                    <td className="px-6 py-4 text-slate-600">{item.category}</td>
                    <td className="px-6 py-4">
                      <div className="text-slate-900 font-medium">{item.stock}</div>
                      <div className="text-xs text-slate-500">Min: {item.minStock}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(item.status)}`}>
                        {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-900 font-medium">{item.price}</td>
                    <td className="px-6 py-4 text-slate-600 text-sm">{item.lastUpdated}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end space-x-2">
                        <button className="p-1 text-slate-400 hover:text-blue-600 transition-colors">
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button className="p-1 text-slate-400 hover:text-red-600 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                        <button className="p-1 text-slate-400 hover:text-slate-600 transition-colors">
                          <MoreHorizontal className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bulk Actions */}
        {selectedItems.length > 0 && (
          <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white rounded-lg px-6 py-3 shadow-lg flex items-center space-x-4">
            <span className="text-sm font-medium">{selectedItems.length} items selected</span>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
              Bulk Edit
            </button>
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm">
              Delete
            </button>
            <button 
              onClick={() => onSelectedItemsChange([])}
              className="text-slate-300 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default InventoryContent;