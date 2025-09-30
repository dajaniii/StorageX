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
      {/* Main Content */}
      <div className="p-6">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-900">All Stores Overview</h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm">Jan 20, 2023 - Feb 09, 2023</span>
              </div>
              <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Download</span>
              </button>
            </div>
          </div>
          
          {/* Navigation Tabs */}
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit">
            <button className="px-4 py-2 bg-white text-gray-900 rounded-md text-sm font-medium shadow-sm">
              Overview
            </button>
            <button className="px-4 py-2 text-gray-600 hover:text-gray-900 text-sm font-medium">
              Analytics
            </button>
            <button className="px-4 py-2 text-gray-600 hover:text-gray-900 text-sm font-medium">
              Reports
            </button>
            <button className="px-4 py-2 text-gray-600 hover:text-gray-900 text-sm font-medium">
              Notifications
            </button>
          </div>
        </div>

        {/* Upgrade Banner */}
        <div className="mb-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-blue-900">Unlock AI-Powered Insights</h3>
                <p className="text-xs text-blue-700">Get smart predictions, automated reorder suggestions, and advanced analytics</p>
              </div>
            </div>
            <button 
              onClick={() => handlePageChange('ai-insights')}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              Upgrade to Pro
            </button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-medium text-gray-600">Total Stores</div>
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <Store className="w-4 h-4 text-blue-600" />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">24</div>
            <div className="text-sm text-green-600">+2 new stores this month</div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-medium text-gray-600">Total Inventory Value</div>
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <Package className="w-4 h-4 text-green-600" />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">$2.4M</div>
            <div className="text-sm text-green-600">+12.3% from last month</div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-medium text-gray-600">Low Stock Alerts</div>
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-4 h-4 text-orange-600" />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">47</div>
            <div className="text-sm text-orange-600">Items need reordering</div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-medium text-gray-600">Active Orders</div>
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <ShoppingCart className="w-4 h-4 text-purple-600" />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">156</div>
            <div className="text-sm text-green-600">Processing across all stores</div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Overview Chart */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Store Performance Trend</h3>
            <div className="h-64 flex items-end justify-between space-x-2">
              {/* Simple bar chart representation */}
              <div className="flex flex-col items-center space-y-2">
                <div className="w-8 bg-gray-800 rounded-t" style={{height: '120px'}}></div>
                <span className="text-xs text-gray-600">Jan</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-8 bg-gray-800 rounded-t" style={{height: '80px'}}></div>
                <span className="text-xs text-gray-600">Feb</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-8 bg-gray-800 rounded-t" style={{height: '100px'}}></div>
                <span className="text-xs text-gray-600">Mar</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-8 bg-gray-800 rounded-t" style={{height: '140px'}}></div>
                <span className="text-xs text-gray-600">Apr</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-8 bg-gray-800 rounded-t" style={{height: '60px'}}></div>
                <span className="text-xs text-gray-600">May</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-8 bg-gray-800 rounded-t" style={{height: '90px'}}></div>
                <span className="text-xs text-gray-600">Jun</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-8 bg-gray-800 rounded-t" style={{height: '110px'}}></div>
                <span className="text-xs text-gray-600">Jul</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-8 bg-gray-800 rounded-t" style={{height: '95px'}}></div>
                <span className="text-xs text-gray-600">Aug</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-8 bg-gray-800 rounded-t" style={{height: '85px'}}></div>
                <span className="text-xs text-gray-600">Sep</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-8 bg-gray-800 rounded-t" style={{height: '70px'}}></div>
                <span className="text-xs text-gray-600">Oct</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-8 bg-gray-800 rounded-t" style={{height: '105px'}}></div>
                <span className="text-xs text-gray-600">Nov</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-8 bg-gray-800 rounded-t" style={{height: '130px'}}></div>
                <span className="text-xs text-gray-600">Dec</span>
              </div>
            </div>
          </div>

          {/* Recent Sales */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Top Performing Stores</h3>
            <p className="text-sm text-gray-600 mb-6">Best performing stores this month.</p>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Store className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">Downtown Store</div>
                    <div className="text-xs text-gray-500">New York, NY</div>
                  </div>
                </div>
                <div className="text-sm font-medium text-gray-900">$45,231</div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Store className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">Mall Location</div>
                    <div className="text-xs text-gray-500">Los Angeles, CA</div>
                  </div>
                </div>
                <div className="text-sm font-medium text-gray-900">$38,920</div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <Store className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">Airport Store</div>
                    <div className="text-xs text-gray-500">Chicago, IL</div>
                  </div>
                </div>
                <div className="text-sm font-medium text-gray-900">$32,150</div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <Store className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">Strip Mall Store</div>
                    <div className="text-xs text-gray-500">Miami, FL</div>
                  </div>
                </div>
                <div className="text-sm font-medium text-gray-900">$28,450</div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <Store className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">Outlet Store</div>
                    <div className="text-xs text-gray-500">Houston, TX</div>
                  </div>
                </div>
                <div className="text-sm font-medium text-gray-900">$25,680</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

DashboardContent.displayName = 'DashboardContent';

export default DashboardContent;