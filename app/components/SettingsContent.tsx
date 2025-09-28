'use client';

import React from 'react';

const SettingsContent: React.FC = () => {
  return (
    <div className="flex-1 bg-slate-50 overflow-auto">
      <div className="bg-white border-b border-slate-200 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Settings</h1>
            <p className="text-slate-600 mt-1">Configure your Storagex platform</p>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">General Settings</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Company Name</label>
                  <input 
                    type="text" 
                    defaultValue="Storagex Demo Store"
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Notifications</label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" defaultChecked className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                      <span className="ml-2 text-sm text-slate-600">Low stock alerts</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" defaultChecked className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                      <span className="ml-2 text-sm text-slate-600">AI insights</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                      <span className="ml-2 text-sm text-slate-600">Weekly reports</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">AI Configuration</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Prediction Sensitivity</label>
                  <select className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500">
                    <option>Conservative</option>
                    <option>Balanced</option>
                    <option>Aggressive</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Auto-reorder Threshold</label>
                  <input 
                    type="number" 
                    defaultValue="5"
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                  Export Data
                </button>
                <button className="w-full bg-slate-100 text-slate-700 px-4 py-2 rounded-lg hover:bg-slate-200 transition-colors text-sm">
                  Import Products
                </button>
                <button className="w-full bg-slate-100 text-slate-700 px-4 py-2 rounded-lg hover:bg-slate-200 transition-colors text-sm">
                  Reset AI Models
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Account</h3>
              <div className="space-y-3">
                <div className="text-sm">
                  <p className="text-slate-600">Current Plan</p>
                  <p className="font-semibold text-slate-900">Professional</p>
                </div>
                <button className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm">
                  Upgrade Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsContent;