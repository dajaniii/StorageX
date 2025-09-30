'use client';

import React from 'react';
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
  ChevronRight,
  Shield,
  Key,
  Users,
  Star,
  Bell
} from 'lucide-react';
import { PageType } from '../types';

interface SidebarNavProps {
  currentPage: PageType;
  onPageChange: (page: PageType) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  expandedSections: string[];
  onToggleSection: (sectionId: string) => void;
}

const SidebarNav: React.FC<SidebarNavProps> = ({ 
  currentPage,
  onPageChange,
  searchQuery, 
  onSearchChange, 
  expandedSections, 
  onToggleSection 
}) => {
  const navItems = [
    {
      id: 'dashboard',
      label: 'Home',
      icon: <Home className="w-5 h-5" />,
      active: currentPage === 'dashboard'
    },
    {
      id: 'inventory',
      label: 'Inventory',
      icon: <Package className="w-5 h-5" />,
      active: currentPage === 'inventory'
    },
    {
      id: 'orders',
      label: 'Orders',
      icon: <ShoppingCart className="w-5 h-5" />,
      active: currentPage === 'orders'
    },
    {
      id: 'stores',
      label: 'Stores',
      icon: <Store className="w-5 h-5" />,
      active: currentPage === 'stores'
    },
    {
      id: 'suppliers',
      label: 'Suppliers',
      icon: <Truck className="w-5 h-5" />,
      active: currentPage === 'suppliers'
    },
    {
      id: 'analytics',
      label: 'Analytics',
      icon: <BarChart3 className="w-5 h-5" />,
      active: currentPage === 'analytics'
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: <Settings className="w-5 h-5" />,
      hasSubmenu: true,
      active: currentPage === 'settings' || currentPage === 'general' || currentPage === 'stores-config' || currentPage === 'ai-settings' || currentPage === 'notifications' || currentPage === 'billing'
    }
  ];  

  const settingsSubmenu = [
    { id: 'general', label: 'Connected Service' },
    { id: 'stores-config', label: 'Password & Security' },
    { id: 'ai-settings', label: 'Team' }
  ];

  const isSettingsExpanded = expandedSections.includes('settings');

  return (
    <div className="w-80 h-screen bg-white border-r border-gray-200 flex flex-col">
      {/* User Profile */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-semibold">
            AD
          </div>
          <div className="flex-1">
            <div className="font-semibold text-gray-900">Amr Dajani</div>
            <div className="text-sm text-gray-500">amr.dajani@email.com</div>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
      </div>

      {/* Search */}
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search..." 
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="px-4 space-y-2 flex-1">
        {navItems.map((item) => (
          <div key={item.id}>
            {item.hasSubmenu ? (
              <button
                onClick={() => onToggleSection(item.id)}
                className={`flex items-center justify-between w-full px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors ${
                  item.active ? 'bg-blue-600 text-white' : ''
                }`}
              >
                <div className="flex items-center">
                  {item.icon}
                  <span className="ml-3 text-sm font-medium">{item.label}</span>
                </div>
                {isSettingsExpanded ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>
            ) : (
              <button
                onClick={() => onPageChange(item.id as PageType)}
                className={`flex items-center w-full px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors ${
                  item.active ? 'bg-blue-600 text-white' : ''
                }`}
              >
                {item.icon}
                <span className="ml-3 text-sm font-medium">{item.label}</span>
              </button>
            )}
            
            {item.hasSubmenu && isSettingsExpanded && (
              <div className="ml-6 space-y-1 mt-2">
                {settingsSubmenu.map((subItem) => (
                  <button
                    key={subItem.id}
                    onClick={() => onPageChange(subItem.id as PageType)}
                    className={`flex items-center w-full px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors ${
                      currentPage === subItem.id ? 'bg-blue-50 text-blue-600' : ''
                    }`}
                  >
                    <span>{subItem.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Pro Upgrade Card */}
      <div className="p-4">
        <div className="bg-blue-600 rounded-lg p-4 text-white">
          <div className="flex items-center space-x-2 mb-2">
            <Star className="w-5 h-5" />
            <span className="font-semibold">Become Pro Access</span>
          </div>
          <p className="text-sm text-blue-100 mb-3">
            Try your experience for using more features
          </p>
          <button className="w-full bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Upgrade Pro
          </button>
        </div>
      </div>
    </div>
  );
};

export default SidebarNav;