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
    color: "from-emerald-600 to-emerald-800"
  },
  {
    icon: Package,
    percentage: "99%",
    description: "PRODUCT AVAILABILITY",
    color: "from-blue-600 to-blue-800"
  },
  {
    icon: TrendingDown,
    percentage: "40%",
    description: "REDUCTION IN OVERSTOCKING",
    color: "from-violet-600 to-violet-800"
  },
  {
    icon: Clock,
    percentage: "85%",
    description: "FASTER ORDER PROCESSING",
    color: "from-amber-600 to-amber-800"
  },
  {
    icon: Users,
    percentage: "60%",
    description: "IMPROVED CUSTOMER SATISFACTION",
    color: "from-cyan-600 to-cyan-800"
  },
  {
    icon: Shield,
    percentage: "100%",
    description: "COMPLIANCE ASSURANCE",
    color: "from-indigo-600 to-indigo-800"
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
        <div className="text-center mb-12 sm:mb-16 px-4 sm:px-0">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
            Proven Results
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 tracking-tight px-4 sm:px-0">
            Storagex Inventory Management: <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Sell More. Manage Less.</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Join thousands of retailers who have transformed their operations with our AI-powered platform
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {statsData.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="group relative bg-white border border-slate-200/60 p-4 sm:p-5 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:border-blue-300/50 hover:-translate-y-2 hover:scale-[1.02] backdrop-blur-sm"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color}/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className="relative z-10 mb-3 sm:mb-4 flex justify-center">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ring-4 ring-white/50`}>
                    <IconComponent size={18} className="sm:w-5 sm:h-5 text-white drop-shadow-sm" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-blue-900 transition-colors duration-300 tracking-tight">
                    {stat.percentage}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 font-semibold uppercase tracking-wider leading-tight group-hover:text-slate-700 transition-colors duration-300">
                    {stat.description}
                  </p>
                </div>
                
                {/* Professional Accent Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100`}></div>
                
                {/* Subtle Corner Badge */}
                <div className="absolute top-3 right-3 w-2 h-2 bg-slate-300 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-blue-500"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
