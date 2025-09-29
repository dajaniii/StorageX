'use client';

import React from 'react';
import { DollarSign, Package, TrendingDown, Clock, Users, Shield } from 'lucide-react';

interface StatItem {
  icon: React.ComponentType<any>;
  percentage: string;
  description: string;
  color: string;
}

const statsData: StatItem[] = [
  {
    icon: DollarSign,
    percentage: "25%",
    description: "REDUCTION IN INVENTORY COSTS",
    color: "from-green-500 to-green-600"
  },
  {
    icon: Package,
    percentage: "99%",
    description: "PRODUCT AVAILABILITY",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: TrendingDown,
    percentage: "40%",
    description: "REDUCTION IN OVERSTOCKING",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Clock,
    percentage: "85%",
    description: "FASTER ORDER PROCESSING",
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: Users,
    percentage: "60%",
    description: "IMPROVED CUSTOMER SATISFACTION",
    color: "from-teal-500 to-teal-600"
  },
  {
    icon: Shield,
    percentage: "100%",
    description: "COMPLIANCE ASSURANCE",
    color: "from-indigo-500 to-indigo-600"
  }
];

const StatsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 bg-slate-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-slate-50/30"></div>
      
      {/* Big Glowing Balls */}
      <div className="absolute top-16 right-16 w-72 h-72 bg-emerald-400/15 rounded-full blur-3xl animate-pulse delay-300"></div>
      <div className="absolute bottom-20 left-16 w-48 h-48 bg-orange-400/20 rounded-full blur-2xl animate-pulse delay-1500"></div>
      <div className="absolute top-1/2 left-8 w-64 h-64 bg-rose-400/15 rounded-full blur-3xl animate-pulse delay-700"></div>
      <div className="absolute bottom-40 right-1/4 w-56 h-56 bg-violet-400/20 rounded-full blur-2xl animate-pulse delay-1200"></div>
      <div className="absolute top-24 left-1/2 w-68 h-68 bg-cyan-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      <div className="absolute bottom-60 right-8 w-52 h-52 bg-lime-400/15 rounded-full blur-2xl animate-pulse delay-900"></div>
      <div className="absolute top-80 left-20 w-60 h-60 bg-amber-400/20 rounded-full blur-xl animate-pulse delay-1100"></div>
      <div className="absolute bottom-80 right-1/3 w-44 h-44 bg-fuchsia-400/15 rounded-full blur-2xl animate-pulse delay-400"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
            Proven Results
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Storagex Inventory Management: <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Sell More. Manage Less.</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of retailers who have transformed their operations with our AI-powered platform
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {statsData.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white to-slate-50 border border-slate-200 p-4 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-blue-300 hover:-translate-y-1"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color}/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className="relative z-10 mb-3 flex justify-center">
                  <div className={`w-10 h-10 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105`}>
                    <IconComponent size={18} className="text-white" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 group-hover:text-blue-900 transition-colors duration-300">
                    {stat.percentage}
                  </div>
                  <p className="text-xs text-slate-600 font-medium uppercase tracking-wide leading-tight group-hover:text-slate-700 transition-colors duration-300">
                    {stat.description}
                  </p>
                </div>
                
                {/* Subtle accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
