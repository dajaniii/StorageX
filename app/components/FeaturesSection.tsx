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
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 px-4 sm:px-0">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
            Powerful Features
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 tracking-tight px-4 sm:px-0">
            Everything you need to <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">scale your business</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Advanced AI-powered tools designed to optimize your inventory management and drive growth
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative bg-white border border-slate-200/60 p-5 sm:p-6 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:border-blue-300/50 hover:-translate-y-2 hover:scale-[1.02] backdrop-blur-sm"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color.replace('from-', 'from-').replace('to-', 'to-')}/5 via-transparent to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Decorative Elements */}
                <div className={`absolute top-0 right-0 w-12 h-12 bg-gradient-to-br ${feature.color.replace('from-', 'from-').replace('to-', 'to-')}/15 to-transparent rounded-full -translate-y-6 translate-x-6 group-hover:scale-125 transition-transform duration-700`}></div>
                <div className="absolute bottom-0 left-0 w-10 h-10 bg-gradient-to-tr from-slate-100/30 to-transparent rounded-full translate-y-5 -translate-x-5 group-hover:scale-110 transition-transform duration-700"></div>
                
                {/* Icon */}
                <div className="relative z-10 mb-4 sm:mb-5">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ring-4 ring-white/50`}>
                    <IconComponent size={20} className="sm:w-6 sm:h-6 text-white drop-shadow-sm" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4 group-hover:text-blue-900 transition-colors duration-300 leading-tight tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300 font-medium">
                    {feature.description}
                  </p>
                </div>
                
                {/* Professional Accent Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100`}></div>
                
                {/* Subtle Corner Badge */}
                <div className="absolute top-3 right-3 w-2 h-2 bg-slate-300 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-blue-500"></div>
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
    color: "from-slate-700 to-slate-900"
  },
  {
    title: "Multi-Store Management",
    description:
      "Manage inventory across multiple store locations from a single dashboard, with real-time synchronization and centralized control.",
    icon: Store,
    color: "from-blue-600 to-blue-800"
  },
  {
    title: "Automated Reordering",
    description:
      "Set up smart reorder rules that automatically place purchase orders when stock levels reach predefined thresholds, saving time and preventing stockouts.",
    icon: RefreshCw,
    color: "from-emerald-600 to-emerald-800"
  },
  {
    title: "Real-Time Analytics",
    description:
      "Track sales performance, inventory turnover, and profitability with comprehensive dashboards and detailed reporting tools.",
    icon: BarChart3,
    color: "from-violet-600 to-violet-800"
  },
  {
    title: "Low Stock Alerts",
    description:
      "Receive instant notifications when products are running low, with customizable alert thresholds and multiple notification channels.",
    icon: AlertTriangle,
    color: "from-amber-600 to-amber-800"
  },
  {
    title: "Barcode Scanning",
    description:
      "Quickly add and update inventory using barcode scanning technology, reducing manual data entry and human errors.",
    icon: ScanLine,
    color: "from-cyan-600 to-cyan-800"
  },
  {
    title: "Supplier Management",
    description:
      "Maintain detailed supplier information, track purchase history, and manage vendor relationships all in one place.",
    icon: Users,
    color: "from-indigo-600 to-indigo-800"
  },
  {
    title: "Mobile App Access",
    description:
      "Access your inventory data anywhere with our mobile app, featuring offline capabilities and real-time synchronization.",
    icon: Smartphone,
    color: "from-rose-600 to-rose-800"
  },
];

export default FeaturesSection;
