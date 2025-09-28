'use client';

import React, { useState } from 'react';
import SidebarNav from '../components/SidebarNav';
import DashboardContent from '../components/DashboardContent';
import { PageType } from '../types';

const DashboardPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedSections, setExpandedSections] = useState<string[]>(['settings']);
  const [timeFilter, setTimeFilter] = useState<string>('7d');

  const toggleSection = (sectionId: string): void => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const handlePageChange = (page: PageType): void => {
    // Handle navigation to other pages
    console.log('Navigate to:', page);
    // You can implement routing logic here
    // For example: router.push(`/${page}`);
  };

  return (
    <div className="flex h-screen bg-slate-50">
      <SidebarNav 
        currentPage="dashboard"
        onPageChange={handlePageChange}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        expandedSections={expandedSections}
        onToggleSection={toggleSection}
      />
      <DashboardContent 
        timeFilter={timeFilter}
        onTimeFilterChange={setTimeFilter}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default DashboardPage;