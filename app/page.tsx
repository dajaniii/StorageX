'use client';

import { useState } from 'react';
import LandingPage from './components/LandingPage';
import { PageType } from './types';

export default function Home() {
  const [currentPage, setCurrentPage] = useState<PageType>('landing');

  const handlePageChange = (page: PageType) => {
    setCurrentPage(page);
  };

  if (currentPage === 'landing') {
    return <LandingPage onPageChange={handlePageChange} />;
  }

  // For now, redirect back to landing for other pages
  // In a real app, you'd handle routing properly
  return <LandingPage onPageChange={handlePageChange} />;
}