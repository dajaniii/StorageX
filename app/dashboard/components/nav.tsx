'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
  User,
  LogOut,
  ExternalLink
} from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  href?: string;
  count?: number;
  children?: NavItem[];
}

interface UserProfileDropdownProps {
  isOpen: boolean;
  onToggle: () => void;
}

const UserProfileDropdown: React.FC<UserProfileDropdownProps> = ({ isOpen, onToggle }) => {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex items-center w-full p-3 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors duration-200"
      >
        <div className="w-8 h-8 rounded-full overflow-hidden mr-3 ring-2 ring-blue-500/20">
          <Image
            src="/api/placeholder/32/32"
            alt="Store Manager"
            width={32}
            height={32}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 text-left">
          <div className="text-sm font-medium text-white">Store Manager</div>
          <div className="text-xs text-slate-400">admin@storagex.com</div>
        </div>
        <ExternalLink className="w-4 h-4" />
      </button>
      
      {isOpen && (
        <div className="absolute bottom-full left-0 right-0 mb-2 bg-slate-800 border border-slate-600 rounded-lg shadow-xl z-50">
          <div className="p-2 space-y-1">
            <button className="flex items-center w-full p-2 text-sm text-slate-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors duration-200">
              <User className="w-4 h-4 mr-3" />
              View profile
            </button>
            <button className="flex items-center w-full p-2 text-sm text-slate-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors duration-200">
              <Settings className="w-4 h-4 mr-3" />
              Account settings
            </button>
            <button className="flex items-center w-full p-2 text-sm text-slate-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors duration-200">
              <BarChart3 className="w-4 h-4 mr-3" />
              Analytics
            </button>
            <hr className="border-slate-600 my-2" />
            <button className="flex items-center justify-between w-full p-2 text-sm text-slate-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors duration-200">
              <div className="flex items-center">
                <LogOut className="w-4 h-4 mr-3" />
                Log out
              </div>
              <span className="text-xs text-slate-500">v1.0</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const SidebarNav: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>(['settings']);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const navItems: NavItem[] = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: <LayoutDashboard className="w-5 h-5" />,
      href: '/dashboard'
    },
    {
      id: 'inventory',
      label: 'Inventory',
      icon: <CheckSquare className="w-5 h-5" />,
      href: '/inventory',
      count: 1247
    },
    {
      id: 'low-stock',
      label: 'Low Stock Alerts',
      icon: <Activity className="w-5 h-5" />,
      href: '/low-stock',
      count: 12
    },
    {
      id: 'ai-insights',
      label: 'AI Insights',
      icon: <BarChart3 className="w-5 h-5" />,
      href: '/ai-insights'
    },
    {
      id: 'stores',
      label: 'Store Locations',
      icon: <FolderOpen className="w-5 h-5" />,
      href: '/stores'
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: <Settings className="w-5 h-5" />,
      children: [
        { id: 'general', label: 'General', icon: null, href: '/settings/general' },
        { id: 'stores-config', label: 'Store Configuration', icon: null, href: '/settings/stores' },
        { id: 'ai-settings', label: 'AI Settings', icon: null, href: '/settings/ai' },
        { id: 'notifications', label: 'Notifications', icon: null, href: '/settings/notifications' },
        { id: 'billing', label: 'Billing', icon: null, href: '/settings/billing' }
      ]
    },
    {
      id: 'documentation',
      label: 'API Documentation',
      icon: <FileText className="w-5 h-5" />,
      href: '/docs'
    },
    {
      id: 'support',
      label: 'Support',
      icon: <Inbox className="w-5 h-5" />,
      href: '/support',
      count: 3
    }
  ];

  const renderNavItem = (item: NavItem, depth = 0) => {
    const isExpanded = expandedSections.includes(item.id);
    const hasChildren = item.children && item.children.length > 0;

    return (
      <div key={item.id} className={depth > 0 ? 'ml-6' : ''}>
        {hasChildren ? (
          <button
            onClick={() => toggleSection(item.id)}
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
            {isExpanded ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
        ) : (
          <Link
            href={item.href || '#'}
            className="flex items-center p-3 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors duration-200"
          >
            {item.icon}
            <span className="ml-3 text-sm font-medium">{item.label}</span>
            {item.count && (
              <span className="ml-auto bg-blue-600 text-blue-100 px-2 py-1 text-xs rounded-full font-medium">
                {item.count}
              </span>
            )}
          </Link>
        )}
        
        {hasChildren && isExpanded && (
          <div className="mt-2 space-y-1">
            {item.children!.map(child => (
              <Link
                key={child.id}
                href={child.href || '#'}
                className={`flex items-center p-2 ml-8 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors duration-200 ${
                  child.id === 'billing' ? 'bg-slate-800 text-white' : ''
                }`}
              >
                <div className="w-1 h-1 bg-current rounded-full mr-3"></div>
                <span className="text-sm">{child.label}</span>
              </Link>
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
            <div className="w-6 h-6 text-white font-bold text-sm flex items-center justify-center">
              S
            </div>
          </div>
          <div className="ml-3">
            <h1 className="text-white font-bold text-lg">Storagex</h1>
            <p className="text-xs text-slate-400">AI Inventory Management</p>
          </div>
          <ExternalLink className="w-4 h-4 text-slate-400 ml-auto" />
        </div>
        
        {/* Search */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search inventory..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
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
        <UserProfileDropdown 
          isOpen={userDropdownOpen} 
          onToggle={() => setUserDropdownOpen(!userDropdownOpen)} 
        />
      </div>
    </div>
  );
};

export default SidebarNav;