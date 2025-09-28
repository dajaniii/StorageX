'use client';

import React from 'react';
import { 
  TrendingUp,
  DollarSign,
  AlertTriangle,
  RefreshCw
} from 'lucide-react';
import { aiInsights } from '../data/mockData';

const AIInsightsContent: React.FC = () => {
  return (
    <div className="flex-1 bg-slate-50 overflow-auto">
      <div className="bg-white border-b border-slate-200 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">AI Insights</h1>
            <p className="text-slate-600 mt-1">Intelligent predictions and recommendations</p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <RefreshCw className="w-4 h-4" />
            <span>Refresh Insights</span>
          </button>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Key Insights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl p-6 border border-purple-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-purple-500 rounded-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Demand Forecast</h3>
            </div>
            <p className="text-slate-700 mb-4">iPhone 15 Pro demand expected to increase by 35% next week based on historical patterns and market trends.</p>
            <div className="bg-white/50 rounded-lg p-3">
              <p className="text-sm text-slate-600">Confidence: 87%</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl p-6 border border-green-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-green-500 rounded-lg">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Cost Optimization</h3>
            </div>
            <p className="text-slate-700 mb-4">Bulk ordering Samsung products this month could save $2,340 through volume discounts.</p>
            <div className="bg-white/50 rounded-lg p-3">
              <p className="text-sm text-slate-600">Potential Savings: $2,340</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-xl p-6 border border-orange-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-orange-500 rounded-lg">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Risk Alert</h3>
            </div>
            <p className="text-slate-700 mb-4">5 products at risk of stockout within next 7 days based on current sales velocity.</p>
            <div className="bg-white/50 rounded-lg p-3">
              <p className="text-sm text-slate-600">Action Required</p>
            </div>
          </div>
        </div>

        {/* Detailed Insights */}
        <div className="bg-white rounded-xl border border-slate-200">
          <div className="p-6 border-b border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900">Detailed Recommendations</h3>
          </div>
          <div className="p-6 space-y-6">
            {aiInsights.map((insight, index) => (
              <div key={index} className="border border-slate-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-semibold text-slate-900">{insight.title}</h4>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    insight.impact === 'High' ? 'bg-red-100 text-red-800' :
                    insight.impact === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {insight.impact} Impact
                  </span>
                </div>
                <p className="text-slate-600 mb-4">{insight.description}</p>
                <div className="flex items-center space-x-6 text-sm text-slate-500">
                  <div>Timeframe: {insight.timeframe}</div>
                  <div>Confidence: {insight.confidence}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIInsightsContent;