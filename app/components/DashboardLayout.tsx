'use client';

import React, { useState, useCallback, useMemo } from 'react';
import SidebarNav from './SidebarNav';
import DashboardContent from './DashboardContent';
import InventoryContent from './InventoryContent';
import LowStockContent from './LowStockContent';
import AIInsightsContent from './AIInsightsContent';
import StoresContent from './StoresContent';
import SettingsContent from './SettingsContent';
import { PageType } from '../types';
import ErrorBoundary from './ErrorBoundary';

interface DashboardLayoutProps {
  initialPage?: PageType;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ 
  initialPage = 'dashboard' 
}) => {
  const [currentPage, setCurrentPage] = useState<PageType>(initialPage);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedSections, setExpandedSections] = useState<string[]>(['settings']);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [timeFilter, setTimeFilter] = useState<string>('7d');
  const [inventoryFilter, setInventoryFilter] = useState<string>('all');
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const handlePageChange = useCallback((page: PageType): void => {
    setCurrentPage(page);
    // Clear selections when changing pages
    setSelectedItems([]);
  }, []);

  const toggleSidebar = useCallback(() => {
    setSidebarOpen(prev => !prev);
  }, []);

  const toggleSection = useCallback((sectionId: string): void => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  }, []);

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
      case 'ai-insights':
        return <AIInsightsContent />;
      case 'stores':
        return <StoresContent />;
      case 'settings':
      case 'general':
      case 'stores-config':
      case 'ai-settings':
      case 'notifications':
      case 'billing':
        return <SettingsContent />;
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
          <div className="flex-1 bg-slate-50 overflow-auto">
            <div className="bg-white border-b border-slate-200 p-6">
              <h1 className="text-2xl font-bold text-slate-900">Support</h1>
              <p className="text-slate-600 mt-1">Get help and support for your Storagex account</p>
            </div>
            <div className="p-6">
              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Support Center</h3>
                <p className="text-slate-600">Support tickets, knowledge base, and contact information would go here.</p>
              </div>
            </div>
          </div>
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
      <div className="flex h-screen bg-white">
        {/* Sidebar */}
        <div className={`${sidebarOpen ? 'w-80' : 'w-0'} transition-all duration-300 overflow-hidden`}>
          <div className="w-80 h-full">
            <SidebarNav 
              currentPage={currentPage}
              onPageChange={handlePageChange}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              expandedSections={expandedSections}
              onToggleSection={toggleSection}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Mobile Header */}
          <div className="lg:hidden bg-white border-b border-gray-200 p-4 flex items-center justify-between">
            <button
              onClick={toggleSidebar}
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle sidebar"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h1 className="text-lg font-semibold text-gray-900 capitalize">
              {currentPage.replace('-', ' ')}
            </h1>
            <div className="w-10" /> {/* Spacer */}
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-hidden">
            {renderContent}
          </div>
        </div>

        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleSidebar}
            aria-hidden="true"
          />
        )}
      </div>
    </ErrorBoundary>
  );
};

export default DashboardLayout;
