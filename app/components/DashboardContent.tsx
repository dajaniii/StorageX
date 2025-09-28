'use client';

import React from 'react';
import { 
  TrendingUp,
  TrendingDown,
  Eye,
  Plus,
  MapPin,
  Zap,
  Activity,
  AlertTriangle,
  Package
} from 'lucide-react';
import { PageType } from '../types';
import { stats, lowStockItems, recentActivity, stores } from '../data/mockData';

interface DashboardContentProps {
  timeFilter: string;
  onTimeFilterChange: (filter: string) => void;
  onPageChange: (page: PageType) => void;
}

const DashboardContent: React.FC<DashboardContentProps> = ({ 
  timeFilter, 
  onTimeFilterChange, 
  onPageChange 
}) => {
  return (
    <div className="flex-1 bg-slate-50 overflow-auto">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
            <p className="text-slate-600 mt-1">Monitor your inventory across all locations</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex bg-slate-100 rounded-lg p-1">
              {(['24h', '7d', '30d', '3m'] as const).map((period) => (
                <button
                  key={period}
                  onClick={() => onTimeFilterChange(period)}
                  className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
                    timeFilter === period 
                      ? 'bg-white text-slate-900 shadow-sm' 
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>Add Product</span>
            </button>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon as React.ComponentType<{ className?: string }>;
            return (
              <div key={index} className="bg-white rounded-xl border border-slate-200 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${
                      stat.trend === 'up' ? 'bg-green-100 text-green-600' : 
                      stat.trend === 'down' ? 'bg-red-100 text-red-600' : 
                      'bg-blue-100 text-blue-600'
                    }`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600">{stat.title}</p>
                      <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                    </div>
                  </div>
                  <div className={`flex items-center space-x-1 text-sm font-medium ${
                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.trend === 'up' ? (
                      <TrendingUp className="w-4 h-4" />
                    ) : (
                      <TrendingDown className="w-4 h-4" />
                    )}
                    <span>{stat.change}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Low Stock Alerts */}
          <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200">
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900">Low Stock Alerts</h3>
                <button 
                  onClick={() => onPageChange('low-stock')}
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center space-x-1"
                >
                  <Eye className="w-4 h-4" />
                  <span>View All</span>
                </button>
              </div>
            </div>
            <div className="p-6 space-y-4">
              {lowStockItems.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${
                      item.status === 'critical' ? 'bg-red-500' : 'bg-yellow-500'
                    }`}></div>
                    <div>
                      <p className="font-medium text-slate-900">{item.name}</p>
                      <p className="text-sm text-slate-600">
                        {item.current} in stock • Min: {item.minimum}
                      </p>
                    </div>
                  </div>
                  <button className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                    Reorder
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* AI Insights */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Zap className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">AI Insights</h3>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
                  <p className="text-sm font-medium text-slate-900">Demand Forecast</p>
                  <p className="text-xs text-slate-600 mt-1">
                    iPhone 15 Pro demand expected to increase by 35% next week
                  </p>
                </div>
                <div className="p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                <p className="text-sm font-medium text-slate-900">Cost Optimization</p>
              <p className="text-xs text-slate-600 mt-1">
                Bulk ordering Samsung products could save $2,340 this month
              </p>
            </div>
          </div>
          <button 
            onClick={() => onPageChange('ai-insights')}
            className="w-full mt-4 bg-slate-100 text-slate-700 px-4 py-2 rounded-lg hover:bg-slate-200 transition-colors text-sm font-medium"
          >
            View All Insights
          </button>
        </div>

        {/* Store Locations */}
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Store Performance</h3>
          <div className="space-y-3">
            {stores.map((store, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  <div>
                    <p className="font-medium text-slate-900 text-sm">{store.name}</p>
                    <p className="text-xs text-slate-600">{store.items} items</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-slate-600">{store.alerts} alerts</span>
                  <div className={`w-2 h-2 rounded-full ${
                    store.status === 'excellent' ? 'bg-green-500' : 'bg-yellow-500'
                  }`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Recent Activity */}
    <div className="bg-white rounded-xl border border-slate-200">
      <div className="p-6 border-b border-slate-200">
        <h3 className="text-lg font-semibold text-slate-900">Recent Activity</h3>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex items-center space-x-4 p-3 hover:bg-slate-50 rounded-lg transition-colors">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                activity.type === 'update' ? 'bg-blue-100 text-blue-600' :
                activity.type === 'alert' ? 'bg-red-100 text-red-600' :
                activity.type === 'shipment' ? 'bg-green-100 text-green-600' :
                'bg-purple-100 text-purple-600'
              }`}>
                {activity.type === 'update' && <Activity className="w-4 h-4" />}
                {activity.type === 'alert' && <AlertTriangle className="w-4 h-4" />}
                {activity.type === 'shipment' && <Package className="w-4 h-4" />}
                {activity.type === 'ai' && <Zap className="w-4 h-4" />}
              </div>
              <div className="flex-1">
                <p className="font-medium text-slate-900">{activity.action}</p>
                <p className="text-sm text-slate-600">{activity.item}</p>
              </div>
              <span className="text-xs text-slate-500">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>
);
};