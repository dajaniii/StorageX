import React from "react";
import { 
  Brain, 
  Store, 
  RefreshCw, 
  BarChart3, 
  AlertTriangle, 
  ScanLine, 
  Users, 
  Smartphone 
} from "lucide-react";

export function FeaturesSection() {
  return (
    <div className="py-20 lg:py-32 bg-slate-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-slate-50/30"></div>
      
      {/* Big Glowing Balls */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-48 h-48 bg-purple-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-cyan-400/20 rounded-full blur-xl animate-pulse delay-2000"></div>
      <div className="absolute top-60 right-1/3 w-56 h-56 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      <div className="absolute top-80 left-1/2 w-72 h-72 bg-pink-400/15 rounded-full blur-3xl animate-pulse delay-1500"></div>
      <div className="absolute bottom-60 right-10 w-52 h-52 bg-green-400/20 rounded-full blur-2xl animate-pulse delay-300"></div>
      <div className="absolute top-32 left-1/3 w-60 h-60 bg-orange-400/15 rounded-full blur-xl animate-pulse delay-800"></div>
      <div className="absolute bottom-80 right-1/2 w-44 h-44 bg-teal-400/20 rounded-full blur-2xl animate-pulse delay-1200"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
            Powerful Features
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Everything you need to <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">scale your business</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Advanced AI-powered tools designed to optimize your inventory management and drive growth
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative bg-white border border-slate-200 p-6 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 hover:border-blue-200 hover:-translate-y-1 hover:scale-105"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color.replace('from-', 'from-').replace('to-', 'to-')}/5 via-transparent to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Decorative Elements */}
                <div className={`absolute top-0 right-0 w-12 h-12 bg-gradient-to-br ${feature.color.replace('from-', 'from-').replace('to-', 'to-')}/15 to-transparent rounded-full -translate-y-6 translate-x-6 group-hover:scale-125 transition-transform duration-700`}></div>
                <div className="absolute bottom-0 left-0 w-10 h-10 bg-gradient-to-tr from-slate-100/30 to-transparent rounded-full translate-y-5 -translate-x-5 group-hover:scale-110 transition-transform duration-700"></div>
                
                {/* Icon */}
                <div className="relative z-10 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:rotate-2`}>
                    <IconComponent size={20} className="text-white" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors duration-300 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
                
                {/* Hover Indicator */}
                <div className={`absolute bottom-4 right-4 w-6 h-6 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0`}>
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    title: "AI-Powered Inventory Insights",
    description:
      "Get intelligent predictions and recommendations for stock levels, demand forecasting, and optimal reorder points using advanced AI algorithms.",
    icon: Brain,
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "Multi-Store Management",
    description:
      "Manage inventory across multiple store locations from a single dashboard, with real-time synchronization and centralized control.",
    icon: Store,
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Automated Reordering",
    description:
      "Set up smart reorder rules that automatically place purchase orders when stock levels reach predefined thresholds, saving time and preventing stockouts.",
    icon: RefreshCw,
    color: "from-green-500 to-green-600"
  },
  {
    title: "Real-Time Analytics",
    description:
      "Track sales performance, inventory turnover, and profitability with comprehensive dashboards and detailed reporting tools.",
    icon: BarChart3,
    color: "from-orange-500 to-orange-600"
  },
  {
    title: "Low Stock Alerts",
    description:
      "Receive instant notifications when products are running low, with customizable alert thresholds and multiple notification channels.",
    icon: AlertTriangle,
    color: "from-red-500 to-red-600"
  },
  {
    title: "Barcode Scanning",
    description:
      "Quickly add and update inventory using barcode scanning technology, reducing manual data entry and human errors.",
    icon: ScanLine,
    color: "from-indigo-500 to-indigo-600"
  },
  {
    title: "Supplier Management",
    description:
      "Maintain detailed supplier information, track purchase history, and manage vendor relationships all in one place.",
    icon: Users,
    color: "from-teal-500 to-teal-600"
  },
  {
    title: "Mobile App Access",
    description:
      "Access your inventory data anywhere with our mobile app, featuring offline capabilities and real-time synchronization.",
    icon: Smartphone,
    color: "from-pink-500 to-pink-600"
  },
];

export default FeaturesSection;
