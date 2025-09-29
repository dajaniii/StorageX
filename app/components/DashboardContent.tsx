'use client';

import React, { memo, useCallback, useMemo } from 'react';
import { 
  TrendingUp,
  TrendingDown,
  Eye,
  Plus,
  MapPin,
  Zap,
  Activity,
  AlertTriangle,
  Package,
  Search,
  Bell,
  ShoppingCart,
  Store
} from 'lucide-react';
import { PageType } from '../types';
import { stats, lowStockItems, recentActivity, stores } from '../data/mockData';

interface DashboardContentProps {
  timeFilter: string;
  onTimeFilterChange: (filter: string) => void;
  onPageChange: (page: PageType) => void;
}

const DashboardContent: React.FC<DashboardContentProps> = memo(({ 
  timeFilter, 
  onTimeFilterChange, 
  onPageChange 
}) => {
  // Memoized handlers for better performance
  const handleTimeFilterChange = useCallback((period: string) => {
    onTimeFilterChange(period);
  }, [onTimeFilterChange]);

  const handlePageChange = useCallback((page: PageType) => {
    onPageChange(page);
  }, [onPageChange]);

  const handleAddProduct = useCallback(() => {
    // Handle add product action
    console.log('Add product clicked');
  }, []);

  const handleReorder = useCallback((itemName: string) => {
    // Handle reorder action
    console.log('Reorder clicked for:', itemName);
  }, []);

  // Memoized filtered data
  const filteredStats = useMemo(() => stats, []);
  const filteredLowStockItems = useMemo(() => lowStockItems, []);
  const filteredRecentActivity = useMemo(() => recentActivity, []);
  const filteredStores = useMemo(() => stores, []);

  return (
    <div className="flex-1 bg-white overflow-auto h-full">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Q Search something..." 
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                SX
              </div>
              <span className="font-semibold text-gray-900">Storagex Inc.</span>
              <span className="text-sm text-gray-500">Brand</span>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>Add Product</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Inventory</h1>
          <p className="text-gray-600 mt-1">See how much inventory you have</p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <Package className="w-6 h-6 text-gray-600" />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">1,247</div>
            <div className="text-sm text-gray-600">Total Products</div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">23</div>
            <div className="text-sm text-gray-600">Low Stock Items</div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 text-gray-600" />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">156</div>
            <div className="text-sm text-gray-600">Pending Orders</div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <Store className="w-6 h-6 text-gray-600" />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">8</div>
            <div className="text-sm text-gray-600">Active Stores</div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-6">
          <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Period: This Year</option>
            <option>Last Month</option>
            <option>Last Quarter</option>
          </select>
          <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Status: All</option>
            <option>In Stock</option>
            <option>Low Stock</option>
            <option>Out of Stock</option>
          </select>
          <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Category: All</option>
            <option>Electronics</option>
            <option>Clothing</option>
            <option>Books</option>
          </select>
        </div>

        {/* Inventory Table */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">PRODUCT NAME</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">CATEGORY</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">STOCK</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">PRICE</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">STATUS</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">LAST UPDATED</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        A
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">iPhone 15 Pro</div>
                        <div className="text-sm text-gray-500">Electronics</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-600">Electronics</td>
                  <td className="py-4 px-6 text-gray-600">23</td>
                  <td className="py-4 px-6 text-gray-600">$999.00</td>
                  <td className="py-4 px-6">
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">In Stock</span>
                  </td>
                  <td className="py-4 px-6 text-gray-600">Today, Dec 20, 2024 (10:06 PM)</td>
                  <td className="py-4 px-6">
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        S
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Samsung Galaxy S24</div>
                        <div className="text-sm text-gray-500">Electronics</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-600">Electronics</td>
                  <td className="py-4 px-6 text-gray-600">8</td>
                  <td className="py-4 px-6 text-gray-600">$799.00</td>
                  <td className="py-4 px-6">
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Low Stock</span>
                  </td>
                  <td className="py-4 px-6 text-gray-600">Today, Dec 20, 2024 (10:06 PM)</td>
                  <td className="py-4 px-6">
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        M
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">MacBook Pro M3</div>
                        <div className="text-sm text-gray-500">Electronics</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-600">Electronics</td>
                  <td className="py-4 px-6 text-gray-600">15</td>
                  <td className="py-4 px-6 text-gray-600">$1,999.00</td>
                  <td className="py-4 px-6">
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">In Stock</span>
                  </td>
                  <td className="py-4 px-6 text-gray-600">Today, Dec 20, 2024 (10:06 PM)</td>
                  <td className="py-4 px-6">
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        A
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">AirPods Pro</div>
                        <div className="text-sm text-gray-500">Electronics</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-600">Electronics</td>
                  <td className="py-4 px-6 text-gray-600">0</td>
                  <td className="py-4 px-6 text-gray-600">$249.00</td>
                  <td className="py-4 px-6">
                    <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">Out of Stock</span>
                  </td>
                  <td className="py-4 px-6 text-gray-600">Today, Dec 20, 2024 (10:06 PM)</td>
                  <td className="py-4 px-6">
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
});

DashboardContent.displayName = 'DashboardContent';

export default DashboardContent;