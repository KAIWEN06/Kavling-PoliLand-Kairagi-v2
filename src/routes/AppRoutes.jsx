import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/public/Home';
import About from '../pages/public/About';
import Gallery from '../pages/public/Gallery';
import NotFound from '../pages/public/NotFound';
import Maintenance from '../pages/public/Maintenance';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="tentang" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="siteplan" element={<Home />} />
        <Route path="progress" element={<Home />} />
        <Route path="kontak" element={<Home />} />
        <Route path="maintenance" element={<Maintenance />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;