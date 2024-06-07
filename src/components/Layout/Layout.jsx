import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';

export const Layout = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};
