import React from 'react';
import { useLocation } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';
import { AmbientBlobs } from './AmbientBlobs';
import { CustomCursor } from './CustomCursor';
import { OmniSearchModal } from './OmniSearchModal';
import { ToastContainer } from './ToastContainer';

export const AppLayout = ({ children }) => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login';
  const isLandingPage = location.pathname === '/';

  const isStandalone = isAuthPage || isLandingPage;

  return (
    <div className="relative min-h-screen text-slate-800 dark:text-slate-100 flex flex-col">
      {/* Background Blobs & Cursor */}
      <AmbientBlobs />
      <CustomCursor />

      {/* Global Modals & Notifications */}
      <OmniSearchModal />
      <ToastContainer />

      {isStandalone ? (
        <div className="w-full min-h-screen flex flex-col">
          {children}
        </div>
      ) : (
        <div className="relative z-10 flex min-h-screen">
          {/* Frosted Sidebar */}
          <Sidebar />

          {/* Right Workspace with Persistent Top Omni-Navbar */}
          <div className="flex-1 ml-64 flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 p-6 lg:p-8 space-y-8 max-w-7xl w-full mx-auto">
              {children}
            </main>
          </div>
        </div>
      )}
    </div>
  );
};
