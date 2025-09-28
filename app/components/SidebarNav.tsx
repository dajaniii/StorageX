'use client';

import React from 'react';
import { 
  Search, 
  LayoutDashboard, 
  Activity, 
  CheckSquare, 
  BarChart3, 
  FolderOpen, 
  Settings, 
  FileText, 
  Inbox,
  ChevronDown,
  ChevronUp,
  ExternalLink
} from 'lucide-react';
import { NavItem, PageType } from '../types';

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
  const navItems: NavItem[] = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: <LayoutDashboard className="w-5 h-5" />,
      active: currentPage === 'dashboard'
    },
    {
      id: 'inventory',
      label: 'Inventory',
      icon: <CheckSquare className="w-5 h-5" />,
      count: 1247,
      active: currentPage === 'inventory'
    },
    {
      id: 'low-stock',
      label: 'Low Stock Alerts',
      icon: <Activity className="w-5 h-5" />,
      count: 12,
      active: currentPage === 'low-stock'
    },
    {
      id: 'ai-insights',
      label: 'AI Insights',
      icon: <BarChart3 className="w-5 h-5" />,
      active: currentPage === 'ai-insights'
    },
    {
      id: 'stores',
      label: 'Store Locations',
      icon: <FolderOpen className="w-5 h-5" />,
      active: currentPage === 'stores'
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: <Settings className="w-5 h-5" />,
      children: [
        { id: 'general', label: 'General', icon: null },
        { id: 'stores-config', label: 'Store Configuration', icon: null },
        { id: 'ai-settings', label: 'AI Settings', icon: null },
        { id: 'notifications', label: 'Notifications', icon: null },
        { id: 'billing', label: 'Billing', icon: null }
      ]
    },
    {
      id: 'documentation',
      label: 'API Documentation',
      icon: <FileText className="w-5 h-5" />
    },
    {
      id: 'support',
      label: 'Support',
      icon: <Inbox className="w-5 h-5" />,
      count: 3
    }
  ];

  const renderNavItem = (item: NavItem, depth: number = 0): JSX.Element => {
    const isExpanded = expandedSections.includes(item.id);
    const hasChildren = item.children && item.children.length > 0;

    return (
      <div key={item.id} className={depth > 0 ? 'ml-6' : ''}>
        {hasChildren ? (
          <button
            onClick={() => onToggleSection(item.id)}
            className="flex items-center justify-between w-full p-3 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors duration-200"
          >
            <div className="flex items-center">
              {item.icon}
              <span className="ml-3 text-sm font-medium">{item.label}</span>
              {item.count && (
                <span className="ml-auto bg-blue-600 text-blue-100 px-2 py-1 text-xs rounded-full font-medium">
                  {item.count}
                </span>
              )}
            </div>
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        ) : (
          <button
            onClick={() => onPageChange(item.id as PageType)}
            className={`flex items-center w-full p-3 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors duration-200 ${
              item.active ? 'bg-slate-800 text-white border-r-2 border-blue-500' : ''
            }`}
          >
            {item.icon}
            <span className="ml-3 text-sm font-medium">{item.label}</span>
            {item.count && (
              <span className="ml-auto bg-blue-600 text-blue-100 px-2 py-1 text-xs rounded-full font-medium">
                {item.count}
              </span>
            )}
          </button>
        )}
        
        {hasChildren && isExpanded && (
          <div className="mt-2 space-y-1">
            {item.children!.map(child => (
              <button
                key={child.id}
                className={`flex items-center w-full p-2 ml-8 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors duration-200 ${
                  child.id === 'billing' ? 'bg-slate-800 text-white' : ''
                }`}
              >
                <div className="w-1 h-1 bg-current rounded-full mr-3"></div>
                <span className="text-sm">{child.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-80 h-screen bg-slate-900 border-r border-slate-700 flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-slate-700">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
            <span className="w-6 h-6 text-white font-bold text-sm flex items-center justify-center">
              S
            </span>
          </div>
          <div className="ml-3">
            <h1 className="text-white font-bold text-lg">Storagex</h1>
            <p className="text-xs text-slate-400">AI Inventory Management</p>
          </div>
          <button onClick={() => onPageChange('landing')}>
            <ExternalLink className="w-4 h-4 text-slate-400 ml-auto hover:text-white" />
          </button>
        </div>
        
        {/* Search */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search inventory..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-slate-800 border border-slate-600 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 px-4 py-4 space-y-2 overflow-y-auto">
        {navItems.map(item => renderNavItem(item))}
      </div>

      {/* User Profile */}
      <div className="p-4 border-t border-slate-700">
        <button className="flex items-center w-full p-3 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors duration-200">
          <div className="w-8 h-8 rounded-full overflow-hidden mr-3 ring-2 ring-blue-500/20 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
            <span className="text-white font-semibold text-sm">SM</span>
          </div>
          <div className="flex-1 text-left">
            <div className="text-sm font-medium text-white">Store Manager</div>
            <div className="text-xs text-slate-400">admin@storagex.com</div>
          </div>
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default SidebarNav;