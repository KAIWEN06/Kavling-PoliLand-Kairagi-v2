import React from 'react';
import AppRoutes from './routes/AppRoutes';
import ScrollToTop from './components/utils/ScrollToTop';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <AppRoutes />
    </>
  );
}