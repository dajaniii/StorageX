'use client';

import { useState } from 'react';
import LandingPage from './components/LandingPage';
import DashboardLayout from './components/DashboardLayout';
import { PageType } from './types';

export default function Home() {
  const [currentPage, setCurrentPage] = useState<PageType>('landing');

  const handlePageChange = (page: PageType) => {
    console.log('Page change requested:', page);
    setCurrentPage(page);
  };

  if (currentPage === 'landing') {
    return <LandingPage onPageChange={handlePageChange} />;
  }

  // Handle dashboard and all other pages
  return <DashboardLayout initialPage={currentPage} onPageChange={handlePageChange} />;
}