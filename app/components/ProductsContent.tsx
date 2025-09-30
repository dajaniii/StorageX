'use client';

import React, { memo, useCallback, useMemo } from 'react';
import {
  Package,
  Search,
  Filter,
  MoreHorizontal,
  Plus,
  Edit,
  Trash2,
  Eye,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  DollarSign,
  BarChart3,
  Calendar,
  Tag
} from 'lucide-react';
import { PageType } from '../types';

interface ProductsContentProps {
  timeFilter: string;
  onTimeFilterChange: (filter: string) => void;
  onPageChange: (page: PageType) => void;
}

const ProductsContent: React.FC<ProductsContentProps> = memo(({
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

  // Mock product data
  const products = useMemo(() => [
    {
      id: 1,
      name: 'iPhone 15 Pro',
      sku: 'IPH15P-256',
      category: 'Smartphones',
      price: 999.99,
      cost: 750.00,
      stock: 45,
      lowStockThreshold: 10,
      status: 'Active',
      image: '📱',
      lastUpdated: '2024-01-15'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24',
      sku: 'SGS24-128',
      category: 'Smartphones',
      price: 799.99,
      cost: 600.00,
      stock: 23,
      lowStockThreshold: 10,
      status: 'Active',
      image: '📱',
      lastUpdated: '2024-01-14'
    },
    {
      id: 3,
      name: 'MacBook Pro M3',
      sku: 'MBP-M3-512',
      category: 'Laptops',
      price: 1999.99,
      cost: 1500.00,
      stock: 8,
      lowStockThreshold: 5,
      status: 'Low Stock',
      image: '💻',
      lastUpdated: '2024-01-13'
    },
    {
      id: 4,
      name: 'AirPods Pro',
      sku: 'APP-2ND',
      category: 'Audio',
      price: 249.99,
      cost: 180.00,
      stock: 0,
      lowStockThreshold: 15,
      status: 'Out of Stock',
      image: '🎧',
      lastUpdated: '2024-01-12'
    },
    {
      id: 5,
      name: 'iPad Air',
      sku: 'IPA-256',
      category: 'Tablets',
      price: 599.99,
      cost: 450.00,
      stock: 32,
      lowStockThreshold: 8,
      status: 'Active',
      image: '📱',
      lastUpdated: '2024-01-11'
    }
  ], []);

  return (
    <div className="flex-1 bg-white overflow-auto h-full">
      {/* Main Content */}
      <div className="p-6">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Products</h1>
              <p className="text-gray-600 mt-2 text-lg">Manage your product catalog and inventory levels</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">Jan 20, 2023 - Feb 09, 2023</span>
              </div>
              <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors flex items-center space-x-2">
                <Plus className="w-4 h-4" />
                <span>Add Product</span>
              </button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit">
            <button className="px-4 py-2 bg-white text-gray-900 rounded-md text-sm font-medium shadow-sm">
              All Products
            </button>
            <button className="px-4 py-2 text-gray-600 hover:text-gray-900 text-sm font-medium">
              Low Stock
            </button>
            <button className="px-4 py-2 text-gray-600 hover:text-gray-900 text-sm font-medium">
              Out of Stock
            </button>
            <button className="px-4 py-2 text-gray-600 hover:text-gray-900 text-sm font-medium">
              Categories
            </button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-medium text-gray-600">Total Products</div>
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <Package className="w-4 h-4 text-blue-600" />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">1,247</div>
            <div className="text-sm text-green-600">+8.2% from last month</div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-medium text-gray-600">Low Stock Items</div>
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-4 h-4 text-orange-600" />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">23</div>
            <div className="text-sm text-orange-600">Need reordering</div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-medium text-gray-600">Out of Stock</div>
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                <TrendingDown className="w-4 h-4 text-red-600" />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">7</div>
            <div className="text-sm text-red-600">Urgent restock needed</div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-medium text-gray-600">Total Value</div>
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-4 h-4 text-green-600" />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">$2.4M</div>
            <div className="text-sm text-green-600">Inventory value</div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50"
              />
            </div>
            <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50">
              <option>All Categories</option>
              <option>Smartphones</option>
              <option>Laptops</option>
              <option>Audio</option>
              <option>Tablets</option>
            </select>
            <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50">
              <option>All Status</option>
              <option>Active</option>
              <option>Low Stock</option>
              <option>Out of Stock</option>
            </select>
            <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50 transition-colors flex items-center space-x-2">
              <Filter className="w-4 h-4" />
              <span>More Filters</span>
            </button>
          </div>
        </div>

        {/* Products Table */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SKU</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cost</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {products.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-lg mr-3">
                          {product.image}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">{product.name}</div>
                          <div className="text-sm text-gray-500">Updated: {new Date(product.lastUpdated).toLocaleDateString()}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-mono">
                      {product.sku}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800">
                        {product.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ${product.price.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ${product.cost.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className={`text-sm font-medium ${
                          product.stock === 0 ? 'text-red-600' :
                          product.stock <= product.lowStockThreshold ? 'text-orange-600' :
                          'text-green-600'
                        }`}>
                          {product.stock}
                        </span>
                        <span className="text-sm text-gray-500 ml-1">units</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        product.status === 'Active' ? 'bg-green-100 text-green-800' :
                        product.status === 'Low Stock' ? 'bg-orange-100 text-orange-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {product.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button className="text-blue-600 hover:text-blue-900">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="text-gray-600 hover:text-gray-900">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          <Trash2 className="w-4 h-4" />
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

ProductsContent.displayName = 'ProductsContent';

export default ProductsContent;
