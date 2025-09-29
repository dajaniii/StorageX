'use client';

import React, { memo, useCallback, useMemo, useState } from 'react';
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
import { TableSkeleton } from './LoadingSkeleton';

interface InventoryContentProps {
  inventoryFilter: string;
  onInventoryFilterChange: (filter: string) => void;
  selectedItems: number[];
  onSelectedItemsChange: (items: number[]) => void;
}

const InventoryContent: React.FC<InventoryContentProps> = memo(({ 
  inventoryFilter, 
  onInventoryFilterChange, 
  selectedItems, 
  onSelectedItemsChange 
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleItemSelection = useCallback((itemId: number): void => {
    const newSelected = selectedItems.includes(itemId) 
      ? selectedItems.filter(id => id !== itemId)
      : [...selectedItems, itemId];
    onSelectedItemsChange(newSelected);
  }, [selectedItems, onSelectedItemsChange]);

  const handleSelectAll = useCallback((checked: boolean): void => {
    if (checked) {
      onSelectedItemsChange(inventoryItems.map(item => item.id));
    } else {
      onSelectedItemsChange([]);
    }
  }, [onSelectedItemsChange]);

  const handleExport = useCallback(() => {
    setIsLoading(true);
    // Simulate export operation
    setTimeout(() => {
      setIsLoading(false);
      console.log('Export completed');
    }, 2000);
  }, []);

  const handleAddProduct = useCallback(() => {
    console.log('Add product clicked');
  }, []);

  const handleEdit = useCallback((itemId: number) => {
    console.log('Edit item:', itemId);
  }, []);

  const handleDelete = useCallback((itemId: number) => {
    console.log('Delete item:', itemId);
  }, []);

  const getStatusColor = useCallback((status: 'critical' | 'warning' | 'good'): string => {
    switch (status) {
      case 'critical': return 'bg-red-100 text-red-800';
      case 'warning': return 'bg-yellow-100 text-yellow-800';
      case 'good': return 'bg-green-100 text-green-800';
      default: return 'bg-slate-100 text-slate-800';
    }
  }, []);

  // Memoized filtered data
  const filteredItems = useMemo(() => {
    return inventoryItems.filter(item => {
      const matchesFilter = inventoryFilter === 'all' || item.status === inventoryFilter;
      const matchesSearch = searchQuery === '' || 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.sku.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [inventoryFilter, searchQuery]);

  if (isLoading) {
    return <TableSkeleton rows={10} columns={8} />;
  }

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
            <button 
              onClick={handleExport}
              disabled={isLoading}
              className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg hover:bg-slate-200 transition-colors flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Export inventory data"
            >
              <Download className="w-4 h-4" aria-hidden="true" />
              <span>{isLoading ? 'Exporting...' : 'Export'}</span>
            </button>
            <button 
              onClick={handleAddProduct}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Add new product to inventory"
            >
              <Plus className="w-4 h-4" aria-hidden="true" />
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
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" aria-hidden="true" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-slate-100 border-0 rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 w-64 focus:outline-none"
                aria-label="Search products by name or SKU"
              />
            </div>
          </div>
        </div>

        {/* Inventory Table */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden" role="region" aria-label="Inventory table">
          <div className="overflow-x-auto">
            <table className="w-full" role="table" aria-label="Product inventory">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr role="row">
                  <th className="px-6 py-3 text-left" role="columnheader">
                    <input 
                      type="checkbox" 
                      className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                      onChange={(e) => handleSelectAll(e.target.checked)}
                      checked={selectedItems.length === filteredItems.length && filteredItems.length > 0}
                      aria-label="Select all products"
                    />
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase" role="columnheader">Product</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase" role="columnheader">SKU</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase" role="columnheader">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase" role="columnheader">Stock</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase" role="columnheader">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase" role="columnheader">Price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase" role="columnheader">Last Updated</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase" role="columnheader">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200" role="rowgroup">
                {filteredItems.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50 transition-colors" role="row">
                    <td className="px-6 py-4" role="cell">
                      <input 
                        type="checkbox" 
                        className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                        checked={selectedItems.includes(item.id)}
                        onChange={() => toggleItemSelection(item.id)}
                        aria-label={`Select ${item.name}`}
                      />
                    </td>
                    <td className="px-6 py-4" role="cell">
                      <div className="font-medium text-slate-900">{item.name}</div>
                    </td>
                    <td className="px-6 py-4 text-slate-600" role="cell">{item.sku}</td>
                    <td className="px-6 py-4 text-slate-600" role="cell">{item.category}</td>
                    <td className="px-6 py-4" role="cell">
                      <div className="text-slate-900 font-medium">{item.stock}</div>
                      <div className="text-xs text-slate-500">Min: {item.minStock}</div>
                    </td>
                    <td className="px-6 py-4" role="cell">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(item.status)}`}>
                        {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-900 font-medium" role="cell">{item.price}</td>
                    <td className="px-6 py-4 text-slate-600 text-sm" role="cell">{item.lastUpdated}</td>
                    <td className="px-6 py-4 text-right" role="cell">
                      <div className="flex items-center justify-end space-x-2">
                        <button 
                          onClick={() => handleEdit(item.id)}
                          className="p-1 text-slate-400 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                          aria-label={`Edit ${item.name}`}
                        >
                          <Edit3 className="w-4 h-4" aria-hidden="true" />
                        </button>
                        <button 
                          onClick={() => handleDelete(item.id)}
                          className="p-1 text-slate-400 hover:text-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded"
                          aria-label={`Delete ${item.name}`}
                        >
                          <Trash2 className="w-4 h-4" aria-hidden="true" />
                        </button>
                        <button 
                          className="p-1 text-slate-400 hover:text-slate-600 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 rounded"
                          aria-label={`More options for ${item.name}`}
                        >
                          <MoreHorizontal className="w-4 h-4" aria-hidden="true" />
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
          <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white rounded-lg px-6 py-3 shadow-lg flex items-center space-x-4" role="region" aria-label="Bulk actions">
            <span className="text-sm font-medium">{selectedItems.length} items selected</span>
            <button 
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Edit selected items"
            >
              Bulk Edit
            </button>
            <button 
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              aria-label="Delete selected items"
            >
              Delete
            </button>
            <button 
              onClick={() => onSelectedItemsChange([])}
              className="text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 rounded"
              aria-label="Clear selection"
            >
              <X className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
});

InventoryContent.displayName = 'InventoryContent';

export default InventoryContent;