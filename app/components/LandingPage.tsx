'use client';

import React, { useState } from 'react';
import { 
  Menu, X, Star, Check, ArrowRight, Play
} from 'lucide-react';
import { PageType, Feature, Testimonial, PricingPlan } from '../types';
import { features, testimonials, pricingPlans } from '../data/mockData';

interface LandingPageProps {
  onPageChange: (page: PageType) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="ml-3 text-2xl font-bold text-slate-900">Storagex</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-slate-600 hover:text-slate-900 font-medium">Features</a>
              <a href="#pricing" className="text-slate-600 hover:text-slate-900 font-medium">Pricing</a>
              <a href="#testimonials" className="text-slate-600 hover:text-slate-900 font-medium">Reviews</a>
              <button 
                onClick={() => onPageChange('dashboard')}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Try Demo
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="px-4 py-2 space-y-2">
              <a href="#features" className="block py-2 text-slate-600">Features</a>
              <a href="#pricing" className="block py-2 text-slate-600">Pricing</a>
              <a href="#testimonials" className="block py-2 text-slate-600">Reviews</a>
              <button 
                onClick={() => onPageChange('dashboard')}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg mt-2"
              >
                Try Demo
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Smart Inventory Management
              <span className="block text-blue-600 mt-2">Powered by AI</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Transform your retail operations with intelligent inventory management. 
              Predict demand, prevent stockouts, and maximize profits with our advanced AI platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => onPageChange('dashboard')}
                className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors text-lg font-semibold flex items-center justify-center space-x-2"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-slate-300 text-slate-700 px-8 py-4 rounded-xl hover:bg-slate-50 transition-colors text-lg font-semibold flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Everything you need to manage inventory
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our AI-powered platform provides all the tools you need to optimize your inventory operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon as React.ComponentType<{ className?: string }>;
              return (
                <div key={index} className="p-8 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors">
                  <div className="text-blue-600 mb-4">
                    <IconComponent className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Trusted by retail leaders
            </h2>
            <p className="text-xl text-slate-600">
              See what our customers are saying about Storagex
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 text-lg">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-slate-600">{testimonial.role}</div>
                  <div className="text-blue-600 font-medium">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-slate-600">
              Choose the plan that fits your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative p-8 rounded-2xl border-2 ${
                plan.popular 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-slate-200 bg-white'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <p className="text-slate-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-slate-900">{plan.price}</span>
                    <span className="text-slate-600 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">S</span>
                </div>
                <span className="ml-2 text-xl font-bold">Storagex</span>
              </div>
              <p className="text-slate-400">
                AI-powered inventory management for modern retail businesses.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">API</a></li>
                <li><a href="#" className="hover:text-white">Integrations</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">Status</a></li>
                <li><a href="#" className="hover:text-white">Security</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 Storagex. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;