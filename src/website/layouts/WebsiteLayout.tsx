import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/navigation/Navbar';
import './Styles/WebsiteLayout.css';

export const WebsiteLayout: React.FC = () => {
  return (
    <div className="wl1">
      {/* Heritage Header Navigation */}
      <Navbar />

      {/* Main Website Page Content */}
      <main className="wl2">
        <Outlet />
      </main>
    </div>
  );
};
