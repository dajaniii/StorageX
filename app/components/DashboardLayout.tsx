'use client';

import React, { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import DashboardContent from './DashboardContent';
import InventoryContent from './InventoryContent';
import LowStockContent from './LowStockContent';
import AIInsightsContent from './AIInsightsContent';
import StoresContent from './StoresContent';
import SettingsContent from './SettingsContent';
import CustomersContent from './CustomersContent';
import ProductsContent from './ProductsContent';
import OrdersContent from './OrdersContent';
import SuppliersContent from './SuppliersContent';
import AnalyticsContent from './AnalyticsContent';
import SupportContent from './SupportContent';
import { PageType } from '../types';
import ErrorBoundary from './ErrorBoundary';
import { 
  Search, 
  Home, 
  Package, 
  ShoppingCart, 
  Store, 
  Truck, 
  BarChart3, 
  Settings, 
  ChevronDown,
  Bell
} from 'lucide-react';

interface DashboardLayoutProps {
  initialPage?: PageType;
  onPageChange?: (page: PageType) => void;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ 
  initialPage = 'dashboard',
  onPageChange
}) => {
  const [currentPage, setCurrentPage] = useState<PageType>(initialPage);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [timeFilter, setTimeFilter] = useState<string>('7d');
  const [inventoryFilter, setInventoryFilter] = useState<string>('all');
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [isSettingsDropdownOpen, setIsSettingsDropdownOpen] = useState<boolean>(false);
  const [isAnalyticsDropdownOpen, setIsAnalyticsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const analyticsDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsSettingsDropdownOpen(false);
      }
      if (analyticsDropdownRef.current && !analyticsDropdownRef.current.contains(event.target as Node)) {
        setIsAnalyticsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handlePageChange = useCallback((page: PageType): void => {
    setCurrentPage(page);
    setSelectedItems([]);
    if (onPageChange) {
      onPageChange(page);
    }
  }, [onPageChange]);

  const navItems = [
    { id: 'dashboard', label: 'Overview', icon: <Home className="w-4 h-4" /> },
    { id: 'customers', label: 'Customers', icon: <Package className="w-4 h-4" /> },
    { id: 'products', label: 'Products', icon: <ShoppingCart className="w-4 h-4" /> },
    { id: 'orders', label: 'Orders', icon: <Store className="w-4 h-4" /> },
    { id: 'suppliers', label: 'Suppliers', icon: <Truck className="w-4 h-4" /> }
  ];

  // Memoized content component to prevent unnecessary re-renders
  const renderContent = useMemo(() => {
    const commonProps = {
      onPageChange: handlePageChange,
    };

    switch (currentPage) {
      case 'dashboard':
        return (
          <DashboardContent
            timeFilter={timeFilter}
            onTimeFilterChange={setTimeFilter}
            onPageChange={handlePageChange}
          />
        );
      case 'inventory':
        return (
          <InventoryContent
            inventoryFilter={inventoryFilter}
            onInventoryFilterChange={setInventoryFilter}
            selectedItems={selectedItems}
            onSelectedItemsChange={setSelectedItems}
          />
        );
      case 'low-stock':
        return <LowStockContent />;
      case 'customers':
        return (
          <CustomersContent
            timeFilter={timeFilter}
            onTimeFilterChange={setTimeFilter}
            onPageChange={handlePageChange}
          />
        );
      case 'products':
        return (
          <ProductsContent
            timeFilter={timeFilter}
            onTimeFilterChange={setTimeFilter}
            onPageChange={handlePageChange}
          />
        );
      case 'orders':
        return (
          <OrdersContent
            timeFilter={timeFilter}
            onTimeFilterChange={setTimeFilter}
            onPageChange={handlePageChange}
          />
        );
      case 'suppliers':
        return (
          <SuppliersContent
            timeFilter={timeFilter}
            onTimeFilterChange={setTimeFilter}
            onPageChange={handlePageChange}
          />
        );
      case 'analytics':
        return (
          <AnalyticsContent
            timeFilter={timeFilter}
            onTimeFilterChange={setTimeFilter}
            onPageChange={handlePageChange}
          />
        );
      case 'ai-insights':
        return (
          <AIInsightsContent
            timeFilter={timeFilter}
            onTimeFilterChange={setTimeFilter}
            onPageChange={handlePageChange}
          />
        );
      case 'stores':
        return <StoresContent />;
      case 'settings':
      case 'general':
      case 'stores-config':
      case 'ai-settings':
      case 'notifications':
      case 'billing':
        return (
          <SettingsContent
            timeFilter={timeFilter}
            onTimeFilterChange={setTimeFilter}
            onPageChange={handlePageChange}
          />
        );
      case 'documentation':
        return (
          <div className="flex-1 bg-slate-50 overflow-auto">
            <div className="bg-white border-b border-slate-200 p-6">
              <h1 className="text-2xl font-bold text-slate-900">API Documentation</h1>
              <p className="text-slate-600 mt-1">Complete API reference and integration guides</p>
            </div>
            <div className="p-6">
              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">API Documentation</h3>
                <p className="text-slate-600">Complete API documentation interface would go here with endpoints, authentication, and examples.</p>
              </div>
            </div>
          </div>
        );
      case 'support':
        return (
          <SupportContent
            onPageChange={handlePageChange}
          />
        );
      default:
        return (
          <DashboardContent
            timeFilter={timeFilter}
            onTimeFilterChange={setTimeFilter}
            onPageChange={handlePageChange}
          />
        );
    }
  }, [currentPage, timeFilter, inventoryFilter, selectedItems, handlePageChange]);

  return (
    <ErrorBoundary>
      <div className="flex flex-col h-screen bg-white">
        {/* Top Navigation Bar */}
        <div className="bg-white border-b border-gray-200 px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Left Side - User Profile */}
            <div className="flex items-center space-x-3">
              {/* Avatar Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsSettingsDropdownOpen(!isSettingsDropdownOpen)}
                  className="flex items-center space-x-2 hover:bg-gray-50 rounded-lg p-1 transition-colors"
                >
                  <div className="w-7 h-7 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-semibold text-xs">
                    AD
                  </div>
                  <span className="font-semibold text-gray-900 text-sm">Amr Dajani</span>
                  <ChevronDown className="w-3 h-3 text-gray-400" />
                </button>
                
                {/* Dropdown Menu */}
                {isSettingsDropdownOpen && (
                  <div className="absolute left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                    <div className="px-3 py-2 border-b border-gray-100">
                      <div className="text-xs font-medium text-gray-900">Amr Dajani</div>
                      <div className="text-xs text-gray-500">amr.dajani@email.com</div>
                    </div>
                    <button
                      onClick={() => {
                        handlePageChange('settings');
                        setIsSettingsDropdownOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-xs text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                    >
                      <Settings className="w-3 h-3" />
                      <span>Settings</span>
                    </button>
                    <div className="border-t border-gray-100 mt-1">
                      <button 
                        onClick={() => {
                          alert('Signing out...');
                          window.location.href = '/';
                        }}
                        className="w-full text-left px-3 py-2 text-xs text-gray-700 hover:bg-gray-100"
                      >
                        Sign out
                      </button>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Navigation Links */}
              <nav className="flex items-center space-x-1 ml-6">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handlePageChange(item.id as PageType)}
                    className={`flex items-center space-x-1 px-3 py-2 text-xs font-medium transition-all duration-200 rounded-lg ${
                      currentPage === item.id 
                        ? 'bg-brand-50 text-brand-main border border-brand-200 shadow-sm' 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <div className={`transition-colors ${
                      currentPage === item.id ? 'text-brand-main' : 'text-gray-500'
                    }`}>
                      {item.icon}
                    </div>
                    <span>{item.label}</span>
                  </button>
                ))}
                
                {/* Analytics Dropdown */}
                <div className="relative" ref={analyticsDropdownRef}>
                  <button
                    onClick={() => setIsAnalyticsDropdownOpen(!isAnalyticsDropdownOpen)}
                    className={`flex items-center space-x-1 px-3 py-2 text-xs font-medium transition-all duration-200 rounded-lg ${
                      currentPage === 'analytics' || currentPage === 'ai-insights'
                        ? 'bg-brand-50 text-brand-main border border-brand-200 shadow-sm' 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <div className={`transition-colors ${
                      currentPage === 'analytics' || currentPage === 'ai-insights' ? 'text-brand-main' : 'text-gray-500'
                    }`}>
                      <BarChart3 className="w-4 h-4" />
                    </div>
                    <span>Analytics</span>
                    <ChevronDown className={`w-3 h-3 transition-colors ${
                      currentPage === 'analytics' || currentPage === 'ai-insights' ? 'text-brand-500' : 'text-gray-400'
                    }`} />
                  </button>
                  
                  {/* Dropdown Menu */}
                  {isAnalyticsDropdownOpen && (
                    <div className="absolute left-0 mt-1 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                      <button
                        onClick={() => {
                          handlePageChange('analytics');
                          setIsAnalyticsDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 text-xs flex items-center space-x-2 transition-colors ${
                          currentPage === 'analytics'
                            ? 'bg-brand-50 text-brand-main'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <BarChart3 className={`w-3 h-3 ${
                          currentPage === 'analytics' ? 'text-brand-main' : 'text-gray-500'
                        }`} />
                        <span>Analytics</span>
                      </button>
                      <button
                        onClick={() => {
                          handlePageChange('ai-insights');
                          setIsAnalyticsDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 text-xs flex items-center space-x-2 transition-colors ${
                          currentPage === 'ai-insights'
                            ? 'bg-brand-50 text-brand-main'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <BarChart3 className={`w-3 h-3 ${
                          currentPage === 'ai-insights' ? 'text-brand-main' : 'text-gray-500'
                        }`} />
                        <span>AI Insights</span>
                      </button>
                    </div>
                  )}
                </div>
              </nav>
            </div>

            {/* Right Side - Search and Actions */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-3 h-3 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-7 pr-3 py-1.5 border border-gray-200 rounded text-xs focus:outline-none focus:ring-1 focus:ring-brand-500 focus:border-transparent w-48"
                />
              </div>
              <button 
                onClick={() => alert('You have 3 new notifications')}
                className="p-1.5 text-gray-600 hover:bg-gray-100 rounded transition-colors"
              >
                <Bell className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-hidden">
          {renderContent}
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default DashboardLayout;
