'use client';

import React, { memo, useCallback, useMemo } from 'react';
import {
  ShoppingCart,
  Search,
  Filter,
  MoreHorizontal,
  Eye,
  Edit,
  Package,
  Truck,
  CheckCircle,
  Clock,
  XCircle,
  DollarSign,
  Calendar,
  User,
  MapPin
} from 'lucide-react';
import { PageType } from '../types';

interface OrdersContentProps {
  timeFilter: string;
  onTimeFilterChange: (filter: string) => void;
  onPageChange: (page: PageType) => void;
}

const OrdersContent: React.FC<OrdersContentProps> = memo(({
  timeFilter,
  onTimeFilterChange,
  onPageChange
}) => {
  const handleTimeFilterChange = useCallback((period: string) => {
    onTimeFilterChange(period);
  }, [onTimeFilterChange]);

  const handlePageChange = useCallback((page: PageType) => {
    onPageChange(page);
  }, [onPageChange]);

  // Mock orders data
  const orders = useMemo(() => [
    {
      id: 'ORD-001',
      customer: 'John Smith',
      email: 'john.smith@email.com',
      items: 3,
      total: 2847.50,
      status: 'Shipped',
      orderDate: '2024-01-15',
      shipDate: '2024-01-16',
      trackingNumber: 'TRK123456789',
      shippingAddress: '123 Main St, New York, NY 10001'
    },
    {
      id: 'ORD-002',
      customer: 'Sarah Johnson',
      email: 'sarah.johnson@email.com',
      items: 1,
      total: 799.99,
      status: 'Processing',
      orderDate: '2024-01-14',
      shipDate: null,
      trackingNumber: null,
      shippingAddress: '456 Oak Ave, Los Angeles, CA 90210'
    },
    {
      id: 'ORD-003',
      customer: 'Mike Wilson',
      email: 'mike.wilson@email.com',
      items: 2,
      total: 1249.98,
      status: 'Delivered',
      orderDate: '2024-01-13',
      shipDate: '2024-01-14',
      trackingNumber: 'TRK987654321',
      shippingAddress: '789 Pine St, Chicago, IL 60601'
    },
    {
      id: 'ORD-004',
      customer: 'Emily Davis',
      email: 'emily.davis@email.com',
      items: 4,
      total: 3421.80,
      status: 'Cancelled',
      orderDate: '2024-01-12',
      shipDate: null,
      trackingNumber: null,
      shippingAddress: '321 Elm St, Miami, FL 33101'
    },
    {
      id: 'ORD-005',
      customer: 'David Brown',
      email: 'david.brown@email.com',
      items: 1,
      total: 249.99,
      status: 'Pending',
      orderDate: '2024-01-11',
      shipDate: null,
      trackingNumber: null,
      shippingAddress: '654 Maple Dr, Seattle, WA 98101'
    }
  ], []);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Delivered':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'Shipped':
        return <Truck className="w-4 h-4 text-blue-600" />;
      case 'Processing':
        return <Package className="w-4 h-4 text-orange-600" />;
      case 'Pending':
        return <Clock className="w-4 h-4 text-yellow-600" />;
      case 'Cancelled':
        return <XCircle className="w-4 h-4 text-red-600" />;
      default:
        return <Clock className="w-4 h-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-100 text-green-800';
      case 'Shipped':
        return 'bg-blue-100 text-blue-800';
      case 'Processing':
        return 'bg-orange-100 text-orange-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="flex-1 bg-white overflow-auto h-full">
      {/* Main Content */}
      <div className="p-6">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Orders</h1>
              <p className="text-gray-600 mt-2 text-lg">Track and manage customer orders</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">Jan 20, 2023 - Feb 09, 2023</span>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit">
            <button className="px-4 py-2 bg-white text-gray-900 rounded-md text-sm font-medium shadow-sm">
              All Orders
            </button>
            <button className="px-4 py-2 text-gray-600 hover:text-gray-900 text-sm font-medium">
              Pending
            </button>
            <button className="px-4 py-2 text-gray-600 hover:text-gray-900 text-sm font-medium">
              Processing
            </button>
            <button className="px-4 py-2 text-gray-600 hover:text-gray-900 text-sm font-medium">
              Shipped
            </button>
            <button className="px-4 py-2 text-gray-600 hover:text-gray-900 text-sm font-medium">
              Delivered
            </button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-medium text-gray-600">Total Orders</div>
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <ShoppingCart className="w-4 h-4 text-blue-600" />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">1,247</div>
            <div className="text-sm text-green-600">+12.3% from last month</div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-medium text-gray-600">Pending Orders</div>
              <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Clock className="w-4 h-4 text-yellow-600" />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">23</div>
            <div className="text-sm text-yellow-600">Awaiting processing</div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-medium text-gray-600">Shipped Today</div>
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <Truck className="w-4 h-4 text-green-600" />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">47</div>
            <div className="text-sm text-green-600">Out for delivery</div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-medium text-gray-600">Total Revenue</div>
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-4 h-4 text-purple-600" />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">$284.7K</div>
            <div className="text-sm text-green-600">This month</div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search orders..."
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50"
              />
            </div>
            <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50">
              <option>All Status</option>
              <option>Pending</option>
              <option>Processing</option>
              <option>Shipped</option>
              <option>Delivered</option>
              <option>Cancelled</option>
            </select>
            <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50 transition-colors flex items-center space-x-2">
              <Filter className="w-4 h-4" />
              <span>More Filters</span>
            </button>
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Items</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tracking</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {orders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{order.id}</div>
                      <div className="text-sm text-gray-500">{order.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <User className="w-4 h-4 text-gray-400 mr-2" />
                        <div className="text-sm font-medium text-gray-900">{order.customer}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-sm text-gray-900">
                        <Package className="w-4 h-4 text-gray-400 mr-1" />
                        {order.items} item{order.items !== 1 ? 's' : ''}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      ${order.total.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {getStatusIcon(order.status)}
                        <span className={`ml-2 inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}>
                          {order.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {new Date(order.orderDate).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {order.trackingNumber ? (
                        <div className="text-sm text-blue-600 font-mono">{order.trackingNumber}</div>
                      ) : (
                        <span className="text-sm text-gray-400">-</span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button className="text-blue-600 hover:text-blue-900">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="text-gray-600 hover:text-gray-900">
                          <Edit className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
});

OrdersContent.displayName = 'OrdersContent';

export default OrdersContent;
